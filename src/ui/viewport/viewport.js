
module.exports =

require('spsui').directive('spsViewport', ViewportDirective);

function ViewportDirective() {
    return {
        restrict: 'E',
        template: '<div ui-view></div>',
        controller: ViewportController,
        link: function (scope, element, attrs, controller) {

            // Attach the controller directly to the element
            element[0].controller = controller;

        }
    };
}

function ViewportController() {}


ViewportController.prototype.addPanel = function() {

};

ViewportController.prototype.loadAppByName = function(name) {

    console.log('Viewport.loadAppByName', name);


};
