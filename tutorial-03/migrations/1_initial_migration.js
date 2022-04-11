const Migrations = artifacts.require("MyFirstContract")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
