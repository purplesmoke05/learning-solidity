const MyFirstToken = artifacts.require("MyFirstToken")
const ERC20 = artifacts.require("ERC20")

module.exports = function (deployer) {
  // deployer.deploy(ERC20);
  // deployer.link(ERC20, MyFirstToken)
  deployer.deploy(MyFirstToken);
};