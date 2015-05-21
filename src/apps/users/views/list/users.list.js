
module.exports = UsersListController;

/**
 *
 * @constructor
 * @ngInject
 */
function UsersListController($scope, users, evenmore, UsersCollectionService) {

    var _this = this;

    // This comes from a RESOLVE in the ui-router, which uses a
    // version of the users.collection that is required into the
    // app without Angular's DI.

    _this.users = users;

    // This comes from a RESOLVE in the ui-router, which uses a
    // version of the UserCollection that is dependency injected
    // into the module config stage.

    _this.evenmore = evenmore;

    // This comes from an Angular injected service.  The data
    // should be the same because the first instance populated
    // the collection, the subsequent calls are just returning the
    // existing UserModel instances.

    UsersCollectionService.fetchAll().then(function(moreusers) {

        _this.moreusers = moreusers;
        console.log('more users', moreusers);
        $scope.$apply();

    });

}
