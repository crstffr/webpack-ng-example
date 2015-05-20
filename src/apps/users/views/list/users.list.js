var users = require('users.collection');


module.exports = UsersListController;

/**
 *
 * @constructor
 * @ngInject
 */
function UsersListController(users) {

    this.publicString = "This is a sample string from the controller";

    this.users = users;

}
