const Migrations = artifacts.require("MyFirstContractBank");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
