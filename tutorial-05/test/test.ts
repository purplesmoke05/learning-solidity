const {
    expectRevert,
    expectEvent,
} = require('@openzeppelin/test-helpers');

const Transaction = artifacts.require("Transaction");
// const truffleAssert = require('truffle-assertions');
contract("Transaction test", async accounts => {
    const [owner, A, B, T] = accounts;
    it("library", async () => {
        const instance = await Transaction.deployed()
        await expectRevert(instance.test(),"x")
        await expectRevert(instance.test({
            value: web3.utils.toWei("10", "ether"),
            from:A
        }),"x")
        await expectEvent(
            await instance.test({
                value: web3.utils.toWei("10", "ether"),
                from:owner
            }),
            "SenderLogger"
        )
        await expectEvent(
            await instance.test({
                value: web3.utils.toWei("10", "ether"),
                from:owner
            }),
            "ValueLogger"
        )
    });
});