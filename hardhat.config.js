require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey= fs.readFileSync(".secret").toString()
module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mainnet:{
      url:"https://polygon-mainnet.infura.io/v3/658f8066719648b1a2fe38473346daa6",
      accounts:[privateKey]
    },
    mumbai:{
      url: "https://polygon-mumbai.infura.io/v3/658f8066719648b1a2fe38473346daa6",
      accounts:[privateKey]
    },
  },
  solidity: "0.8.4",
};