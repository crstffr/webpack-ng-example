var check = require('check-types');
var AddressModel = require('address.model');

module.exports = UserModel;

/**
 *
 * @param data
 * @constructor
 */
function UserModel(data) {

    data = check.object(data) ? data : {};

    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.username = data.username || '';
    this.company = data.company || {};
    this.address = data.address || {};
    this.phone = data.phone || '';

    this.address = new AddressModel(this.address);

    //////////////////////////////////

}
