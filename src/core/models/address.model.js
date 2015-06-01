var check = require('check-types');

module.exports = AddressModel;

/**
 *
 * @param data
 * @constructor
 */
function AddressModel(data) {

    data = (check.object(data)) ? data : {};

    this.street = data.street || '';
    this.suite = data.suite || '';
    this.city = data.city || '';
    this.state = data.state || '';
    this.zipcode = data.zipcode || '';

}

/**
 *
 * @returns {string}
 */
AddressModel.prototype.toOneLine = function() {

    return [
        this.street, ' ',
        this.suite, ', ',
        this.city, ' ',
        this.state, ', ',
        this.zipcode
    ].join('');

};

/**
 *
 * @returns {string}
 */
AddressModel.prototype.toMultiLine = function() {

    return 'Address\nin multiple\nlines...';

};
