var angular = require('angular');
var router = require('angular-ui-router');

// Here I am pulling in the UserCollection instance, which will
// be used both in and out of the context of Angular, but will
// access the same instance of the class regardless of how it
// is used.  This is important because our internal SPSUI modules
// will probably use Webpack Require, but other app developers
// are likely to use a more normal Angular developement style.

var UsersCollection = require('objects/user').collection;

var templates = {
    list:   require('./views/list/users.list.html'),
    detail: require('./views/detail/users.detail.html')
};

module.exports = angular
    .module('users.app', [router])
    .directive('usersApp', UsersAppDirective)

    // Here I am setting UsersCollection as a service for this app,
    // but since it's already been instantiated, we won't use the
    // .service() method to register it.  Instead we register it
    // using .value(), which allows us to dependency inject our
    // instance using normal Angular notation.

    // The downside of this is that UsersCollection cannot have
    // any of it's own Angular dependencies.  This should be okay
    // for our base objects and their collection methods, because
    // they will mostly be API calls and mapping to models.

    // See here for more:
    // https://docs.angularjs.org/guide/providers

    .value('UsersCollectionService', UsersCollection)
    .config(UsersAppRoutes);

/**
 * Directive for loading ui-view into an <users-app> tag,
 * effectively bootstrapping this as a pseudo-sub-application.
 * Not ideal, and would like to evaluate other options.
 *
 * @returns Directive
 * @constructor
 */
function UsersAppDirective() {
    return {
        restrict: 'E',
        template: '<div ui-view></div>',
        controller: UsersAppController
    };
}

/**
 * When the controller first executes, load a default state
 *
 * @param $rootScope
 * @param $state
 * @constructor
 * @ngInject
 */
function UsersAppController($rootScope, $state) {
    if ($state.current.name == 'users') {
        $state.go('users.list');
    }
}

/**
 * Setup our UsersApp specific routes.  Notice how the URLs are
 * actually relative to the parent chassis router. This is cool
 * because this application is dumb to what it's own path is.
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
            controller: require('./views/list/users.list'),
            resolve: {

                // This RESOLVE block is important here because this showcases
                // how we can use a vanilla JS collection class (with it's own
                // associated vanilla JS API) to fetch data and then inject it
                // into the controller of a route.

                users: UsersCollection.fetchAll,

                // This RESOLVE block showcases how you would normally use a
                // service (via Angular DI) to fetch data and then inject it
                // into the controller of a route.

                evenmore: function(UsersCollectionService) {
                    return UsersCollectionService.fetchAll();
                }

                // Note, those two examples are redundant, only one method is
                // needed to accomplish the same goal.

            }

        })
        .state('users.detail', {
            url: "/detail/:id",
            template: templates.detail,
            controller: require('./views/detail/users.detail')
        });

}

