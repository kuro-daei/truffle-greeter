const Greeter = artifacts.require("Greeter");
module.exports = function(_deployer) {
  _deployer.deploy(Greeter);
};
