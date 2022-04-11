var MyFirstContract=artifacts.require ("MyFirstContractBank");
module.exports = function(deployer) {
    deployer.deploy(MyFirstContract);
}