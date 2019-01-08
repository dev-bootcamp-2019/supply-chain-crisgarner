var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts();
  await deployer.deploy(SupplyChain, accounts[0]);
};
