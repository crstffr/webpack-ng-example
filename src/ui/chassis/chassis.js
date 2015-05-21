var angular = require('angular');
var router = require('angular-ui-router');

var spsui = require('spsui').name;
var sidebar = require('sidebar').name;
var viewport = require('viewport').name;
var banner = require('brand-banner').name;
var switcher = require('app-switcher').name;

// This is needed so that the Users "App" module is
// available as a dependency to the chassis. I don't
// particularly like this method of sub-application
// bootstrapping (since Angular does not support
// nested apps).

var usersApp = require('apps/users/users.app').name;

module.exports = angular
    .module('chassis', [spsui, router, usersApp])
    .directive('spsChassis', ChassisDirective)
    .config(ChassisRoutes);

/**
 *
 * @constructor
 * @ngInject
 */
function ChassisRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/users");

    $stateProvider
        .state('users', {
            url: "/users",
            template: '<users-app></users-app>'
        })
        .state('companies', {
            url: "/companies",
            template: '<companies-app></companies-app>'
        })
        .state('applications', {
            url: "/applications",
            template: '<applications-app></applications-app>'
        });

}

/**
 *
 * @returns Directive
 * @constructor
 */
function ChassisDirective() {
    return {
        restrict: 'E',
        templateUrl: require('./chassis.html')
    };
}
