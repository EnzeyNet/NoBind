(function(angular, $) {

	var module = angular.module('net.enzey.nobind', []);

	var ctrlBind = function($parse) {
		return function($scope) {
			var resolveValueWithoutWatching = function(varExpression, func) {
				// varExpression.exp is passed as the 'old' value
				//   so that angular can remove the expression text from an
				//   element's attributes, such as when using an expression for the class.
				func($parse(varExpression)(this), varExpression.exp);
			};
			$scope.$watch = resolveValueWithoutWatching;
			$scope.$watchCollection = resolveValueWithoutWatching;
		};
	};

	var linkBind = function($timeout) {
		return function(scope, element, attrs) {
			element.find('*').removeClass('ng-binding');
			$timeout(function() {
				scope.$destroy();
			}, 0, false);
		};
	};

	module.directive('nzNoBind', function ($parse, $timeout) {
		return {
			restrict: 'A',
			priority: 999999,
			scope: true,
			controller: ctrlBind($parse),
			link: function(scope, element, attrs) {
				element.removeClass('ng-scope');
				element.removeClass('ng-binding');
				linkBind($timeout)(scope, element, attrs);
			}
		};
	});

	module.directive('nzNoBindChildren', function ($parse, $timeout) {
		return {
			restrict: 'A',
			priority: -999999,
			scope: true,
			controller: ctrlBind($parse),
			link: linkBind($timeout)
		};
	});

})(angular, jQuery);
