var request = require('superagent-promise');

module.exports = require('serviceFactory')(UserAPI);

/**
 *
 * @constructor
 */
function UserAPI() {

    var apiUrl = 'http://jsonplaceholder.typicode.com/users';

    this.fetchAll = function() {
        console.log('Making an API request');
        return request('GET', apiUrl).end();
    }

}
