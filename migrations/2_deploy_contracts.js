const config = require("../truffle-config");
const ESP = artifacts.require('ESP');

module.exports = async (deployer, network, accounts) => {
  console.log(`...network = ${network}`)
  global.network = network;
  const [owner, admin, other] = accounts;
  const networkConfig = config.networks[network]

  // deploy wwan
  await deployer.deploy(ESP);
  const wwan = await ESP.deployed();
  console.log("wwan: " + wwan.address);
};
