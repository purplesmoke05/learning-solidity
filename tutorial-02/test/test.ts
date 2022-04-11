const {
    expectRevert
} = require('@openzeppelin/test-helpers');

const MyFirstContract = artifacts.require("MyFirstContract");
const truffleAssert = require('truffle-assertions');
contract("MyFirstContract test", async accounts => {
    it("age", async () => {
        const instance = await MyFirstContract.deployed()
        assert.equal((await instance.getAge()).toNumber(), 0, "initial age")
        await instance.setAge(100)
        assert.equal((await instance.getAge()).toNumber(), 100, "set age")
    });
    it("name", async () => {
        const instance = await MyFirstContract.deployed()
        assert.equal(await instance.getName(), "", "initial name")
        await instance.setName("hoge")
        assert.equal(await instance.getName(), "hoge", "set name")
    });
    it("bank", async () => {
        const instance = await MyFirstContract.deployed()
        assert.equal((await instance.balance()).toNumber(), 10, "initial balance")
        await instance.withdraw(100)
        assert.equal((await instance.balance()).toNumber(), 10, "initial balance")
        assert.equal(await instance.checkValue(15), false, "withdrawal limit is less than 15")
        await instance.deposit(100)
        assert.equal(await instance.checkValue(105), true, "withdrawal limit 105")
        await instance.withdraw(105)
        assert.equal((await instance.balance()).toNumber(), 5, "balance")
    });
});