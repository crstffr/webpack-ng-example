var check = require('check-types');
var request = require('superagent-promise');

module.exports = new UserAPI();

/**
 *
 * @constructor
 */
function UserAPI() {

    var server = 'http://jsonplaceholder.typicode.com/';

    this.fetchAll = function() {
        return request('GET', server + 'users').end();
    };

    this.fetchOne = function(id) {
        id = check.string(id) ? id : '';
        return request('GET', server + 'user/' + id).end();
    };

}
