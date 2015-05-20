module.exports = AppSwitcherController;

/**
 * This is the controller for the App Switcher
 *
 * @param $scope
 * @constructor
 * @ngInject
 */
function AppSwitcherController($scope) {

    this.id = Math.random();
    this.isOpen = false;
    this.$scope = $scope;

}

/**
 *
 */
AppSwitcherController.prototype.open = function() {
    console.log('open app switcher', this.id);
    this.isOpen = true;
    this.$scope.$apply();
};

/**
 *
 */
AppSwitcherController.prototype.close = function() {
    console.log('close app switcher', this.id);
    this.isOpen = false;
    this.$scope.$apply();
};

/**
 *
 */
AppSwitcherController.prototype.toggle = function() {
    (this.isOpen) ? this.close() : this.open();
};
