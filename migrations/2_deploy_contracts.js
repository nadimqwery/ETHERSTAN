const EtherstanCitizenship = artifacts.require("EtherstanCitizenship.sol");

module.exports = function(deployer) {
    deployer.deploy(EtherstanCitizenship);
};

var KontranctToken = artifacts.require("./KontractToken.sol");

var KrowdSale = artifacts.require("./KrowdSale.sol");

module.exports = function(deployer) {
    deployer.deploy(KontranctToken, 1000000, 'Kontract Token', 'KONT', {
        from: '0x25a36976133A8cEBE748393ee18b2F47574DaC83'
    });
};