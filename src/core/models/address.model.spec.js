var AddressModel = require('address.model');

var testData1 = {
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
        var inst = new AddressModel(testData1);
        expect(inst instanceof AddressModel).toBe(true);
    });

    it("generates a single line address", function() {
        var inst = new AddressModel(testData1);
        var result = "123 South Street Apt 456, Cityville ST, 00000";
        expect(inst.toOneLine()).toBe(result);
    });

});
