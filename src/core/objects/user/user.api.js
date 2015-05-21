var check = require('check-types');
var request = require('superagent-promise');
var constants = require('./user.constants');

module.exports = new UserAPI();

/**
 *
 * @constructor
 */
function UserAPI() {

    var server = constants.API_URL;

    this.fetchAll = function() {
        return request('GET', server + 'users').end();
    };

    this.fetchOne = function(id) {
        id = check.string(id) ? id : '';
        return request('GET', server + 'user/' + id).end();
    };

}
