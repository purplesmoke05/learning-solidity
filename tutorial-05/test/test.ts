const {
    expectRevert,
    expectEvent,
} = require('@openzeppelin/test-helpers');

const Transaction = artifacts.require("Transaction");
// const truffleAssert = require('truffle-assertions');
contract("Transaction test", async accounts => {
    const [owner, A, B, T] = accounts;
    it("library", async () => {
        expectRevert(await Transaction.deployed().then(i=>{
            return i.test({from: A})
        }))
    });
});