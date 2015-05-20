var angular = require('angular');
var router = require('angular-ui-router');

var users = require('users.collection').getInstance();
var listView = require('./views/list/users.list.html');
var detailView = require('./views/detail/users.detail.html');

module.exports = angular
    .module('users.app', [router])
    .directive('usersApp', UsersAppDirective)
    .config(UsersAppRoutes);

function UsersAppDirective() {
    return {
        restrict: 'E',
        template: '<div ui-view></div>',
        controller: UsersAppController
    };
}

/**
 *
 * @param $state
 * @constructor
 * @ngInject
 */
function UsersAppController($state) {
    if ($state.current.name == 'users') {
        $state.go('users.list');
    }
}

/**
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @constructor
 * @ngInject
 */
function UsersAppRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('users.list', {
            url: "/list",
            controllerAs: 'cont',
            templateUrl: listView,
            resolve: {users: users.fetchAll},
            controller: require('./views/list/users.list')
        })
        .state('users.detail', {
            url: "/detail/:id",
            template: detailView,
            controller: require('./views/detail/users.detail')
        });

}

