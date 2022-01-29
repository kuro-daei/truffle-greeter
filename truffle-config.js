module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {
    development: {
      host: "172.22.112.1",
      port: 7545,
      network_id: "*",
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.11", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
