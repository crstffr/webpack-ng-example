var AddressModel = require('address.model');

var testData = {
    street: '123 South Street',
    suite: 'Apt 456',
    city: 'Cityville',
    state: 'ST',
    zipcode: '00000'
};

describe("AddressModel", function () {

    it("is an object", function () {
        expect(AddressModel).not.toBe(null);
    });

    it("instantiates with no data", function () {
        var inst = new AddressModel();
        expect(inst instanceof AddressModel).toBe(true);
    });

    it("instantiates with data", function () {
        var inst = new AddressModel(testData);
        expect(inst instanceof AddressModel).toBe(true);
    });

    it("generates a single line address", function() {
        var inst = new AddressModel(testData);
        var result = "123 South Street Apt 456, Cityville ST, 00000";
        expect(inst.toOneLine()).toBe(result);
    });

    it("generates a multi line address", function() {
        var inst = new AddressModel(testData);
        var result = "Address\nin multiple\nlines...";
        expect(inst.toMultiLine()).toBe(result);
    });

});
