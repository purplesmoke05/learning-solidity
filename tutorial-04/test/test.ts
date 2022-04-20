const {
    expectRevert
} = require('@openzeppelin/test-helpers');

const TestLibrary = artifacts.require("TestLibrary");
// const truffleAssert = require('truffle-assertions');
contract("TestLibrary test", async accounts => {
    it("library", async () => {
        const instance = await TestLibrary.deployed()
        assert.equal((await instance.testIncrement(10)).toNumber(), 11)
        assert.equal((await instance.testDecrement(10)).toNumber(), 9)
        assert.equal((await instance.testIncrementByValue(10,10)).toNumber(), 20)
        assert.equal((await instance.testDecrementByValue(10,10)).toNumber(), 0)
    });
});