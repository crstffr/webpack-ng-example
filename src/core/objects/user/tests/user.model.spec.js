var UserModel = require('../user.model.js');
var AddressModel = require('address.model');

var testData = {
    id: 1,
    name: 'Test Tester',
    email: 'test@email.com',
    username: 'tester'
};

describe("UserModel", function () {

    it("is an object", function () {
        expect(UserModel).not.toBe(null);
    });

    it("instantiates with no data", function () {
        var inst = new UserModel();
        expect(inst instanceof UserModel).toBe(true);
    });

    it("instantiates with data", function () {
        var inst = new UserModel(testData);
        expect(inst instanceof UserModel).toBe(true);
        expect(inst.id).toBe(1);
    });

    it("address is an instance of AddressModel", function () {
        var inst = new UserModel(testData);
        expect(inst.address instanceof AddressModel).toBe(true);
    });

    it("says hello", function () {
        var inst = new UserModel(testData);
        expect(inst.sayHello()).toBe('Hello Test Tester');
    });


});
