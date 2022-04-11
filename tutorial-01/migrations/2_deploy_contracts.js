var MyFirstContract=artifacts.require ("./contracts/MyFirstContract.sol");
module.exports = function(deployer) {
    deployer.deploy(MyFirstContract);
}