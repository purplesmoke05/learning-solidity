const {
    expectRevert
} = require('@openzeppelin/test-helpers');

const MyFirstToken = artifacts.require("MyFirstToken");
// const truffleAssert = require('truffle-assertions');
contract("MyFirstToken test", async accounts => {
    it("library", async () => {
        const instance = await MyFirstToken.deployed()

        assert.equal((await instance.symbol()), "MFT")
        assert.equal((await instance.name()), "My First Token")
        assert.equal((await instance.totalSupply.call()).toNumber(), 1000)
        assert.equal((await instance.balanceOf.call(accounts[0])).toNumber(), 1000)
        await instance.transfer.sendTransaction(accounts[1], 500)
        assert.equal((await instance.balanceOf.call(accounts[1])).toNumber(), 500)
        await instance.approve.sendTransaction(accounts[1], 1000, {from: accounts[0]})
        assert.equal((await instance.allowance.call(accounts[0], accounts[1])).toNumber(), 1000)
        await instance.transferFrom.sendTransaction(accounts[0], accounts[2], 500, {from: accounts[1]})
        assert.equal((await instance.balanceOf.call(accounts[2])).toNumber(), 500)

        await instance
    });
});