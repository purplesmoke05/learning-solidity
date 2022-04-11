const IntExtended = artifacts.require("IntExtended")
const TestLibrary = artifacts.require("TestLibrary")

module.exports = function (deployer) {
  deployer.deploy(IntExtended);
  deployer.link(IntExtended, TestLibrary)
  deployer.deploy(TestLibrary);
};