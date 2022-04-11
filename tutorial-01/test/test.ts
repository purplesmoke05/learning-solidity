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
});