var angular = require('angular');
var router = require('angular-ui-router');

var UsersCollection = require('users.collection').getInstance();

var templates = {
    list:   require('./views/list/users.list.html'),
    detail: require('./views/detail/users.detail.html')
};

module.exports = angular
    .module('users.app', [router])
    .directive('usersApp', UsersAppDirective)
    .value('UsersCollection', UsersCollection)
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
            templateUrl: templates.list,
            resolve: {users: UsersCollection.fetchAll},
            controller: require('./views/list/users.list')
        })
        .state('users.detail', {
            url: "/detail/:id",
            template: templates.detail,
            controller: require('./views/detail/users.detail')
        });

}

