AngularJS NoBind
===

Angular Module: net.enzey.nobind

Difference between noBind and other bindonce directives:
 * When applied to an element all child elements will no longer have two-binding.
 * No special binding attributes. Works using standard mustash resolution.

When nz-no-bind is applied to the same element as an ng-repeat all elements of the repeats will no have two-way binding but ng-repeat will still pick up changes to the collection it is watching. Making it very userful for data returned from a server the user will not modify, such as dropdown selection.

After including this module as a dependent the following directives can be used.

| Directive Name | Description |
| :------------- | :---------- |
| nz-no-bind | Causes no binding for this element and all child elements. |
| nz-no-bind-children | Causes no binding for all child elements, excluding the element this directive is applied to. |

