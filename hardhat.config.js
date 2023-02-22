require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.25",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // blockGasLimit: 100000000429720, // whatever you want here
    },
  },
};
