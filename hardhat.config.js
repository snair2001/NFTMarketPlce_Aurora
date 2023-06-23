require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const { AURORA_TESTNET_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.1",
 networks: {
   hardhat: {},
   aurora_testnet: {
    url: 'https://aurora-testnet.infura.io/v3/8c698cf7a21a45df9dbe0cfa11a3d905',
    accounts: [`0xd180f1781f91a5daeea1714f43cbb722bb39b14872affa4fb01d0bba36e628ff`],
    chainId: 1313161555
  }
 },
};
