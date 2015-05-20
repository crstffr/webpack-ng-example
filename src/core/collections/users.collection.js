
var UserModel = require('user.model');
var UserApi = require('user.api').getInstance();

module.exports = require('serviceFactory')(UsersCollection);

/**
 *
 * @constructor
 */
function UsersCollection() {

    /**
     * Memoized storage object of Users, stored with user id as key.
     *
     * @type {{}}
     * @private
     */
    var _users = {};

    return {
        fetchAll: fetchAll,
        fetchById: fetchById,
        fetchByOrgId: fetchByOrgId,
        fetchByEmail: fetchByEmail
    };

    ////////////

    function _collect(results) {

        return results.body.map(function(user) {

            // check for an existing instance of this user,
            // if one does not exist then create a new one
            // and store it in our memoized storage object.

            if (!_users[user.id]) {
                _users[user.id] = new UserModel(user);
                console.log('new User:', _users[user.id]);
            }

            return _users[user.id];
        });

    }

    function fetchAll() {
        return UserApi.fetchAll().then(_collect);
    }

    function fetchById(id) {

    }

    function fetchByOrgId(id) {

    }

    function fetchByEmail(email) {

    }

}
