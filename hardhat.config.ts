import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv";

const config: HardhatUserConfig = {
  defaultNetwork: "m1",
  networks: {
    hardhat: {
    },
    m1: {
      url: "https://mevm.devnet.m1.movementlabs.xyz",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 336
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

export default config;
