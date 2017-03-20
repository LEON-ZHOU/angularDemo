//When use this way to declare an app module, need to put the AngularDemo in the html ag-app="AngularDemo"
var angularDemo = angular.module('AngularDemo', []);
function InvoiceCtrl($scope) {
    $scope.qty = 1;
    $scope.cost = 19.95;
}

angularDemo.controller('InvoiceCtrl', InvoiceCtrl);

angularDemo.directive('draggable', function($document) {
    var startX = 0, startY = 0, x = 0, y = 0;
    return function(scope, element, attr) {
        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });
        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        };

        function mouseup(event) {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        };
    }
});