//https://eth-ropsten.alchemyapi.io/v2/k5zwqVV6BbcJDs1YPVGDK6NI3LEgXERF
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/k5zwqVV6BbcJDs1YPVGDK6NI3LEgXERF',
      accounts: ['6363fabc82c7085c5ced83448c8dd6ac83738ae4f85703c8bbeb38e9f7b92de2'],
    },
  },
};