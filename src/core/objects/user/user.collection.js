
var UserApi = require('./user.api');
var UserModel = require('./user.model');

module.exports = require('makeSingleton')(UserCollection);

/**
 *
 * @constructor
 */
function UserCollection() {

    /**
     * Memoized Users storage object, keys are user IDs, values are
     * instances of UserModel.
     *
     * @type {{}}
     * @private
     */
    var _users = {};

    var id = Math.random();

    return {
        id: id,
        users: users,
        fetchAll: fetchAll,
        fetchById: fetchById,
        fetchByOrgId: fetchByOrgId,
        fetchByEmail: fetchByEmail
    };

    ////////////

    /**
     * Collection method, maps an array of results from calls to
     * the UsersAPI into an array of UserModels. If the UserModel
     * has already been created for a given User ID, then return
     * the previous instance, otherwise create a new one and save
     * it in the memoized _users lookup object.
     *
     * @param response
     * @returns {Array}
     * @private
     */
    function _collect(response) {

        return response.body.map(function(user) {

            // check for an existing instance of this user,
            // if one does not exist then create a new one
            // and store it in our memoized storage object.

            if (!_users[user.id]) {
                _users[user.id] = new UserModel(user);
            }

            return _users[user.id];
        });
    }

    function users() {
        return _users;
    }

    function fetchAll() {
        console.log('fetching from collection instance: ', id);
        return UserApi.fetchAll().then(_collect);
    }

    function fetchById(id) {
        return UserApi.fetchOne(id).then(_collect);
    }

    function fetchByOrgId(id) {

    }

    function fetchByEmail(email) {

    }

}
