var users = require('users.collection');

module.exports = UsersListController;

/**
 *
 * @constructor
 * @ngInject
 */
function UsersListController($scope, users, UsersCollection) {

    var _this = this;

    // This comes from a RESOLVE in the ui-router, which uses a
    // version of the users.collection that is required into the
    // app without Angular's DI.

    _this.users = users;

    // This comes from an Angular injected service.

    UsersCollection.fetchAll().then(function(moreusers) {

        _this.moreusers = moreusers;

        console.log('more users', moreusers);

        $scope.$apply();


    });

}
