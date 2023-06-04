require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL =
	process.env.GOERLI_RPC_URL || 'https://eth-goerli.alchemyapi.io/v2/your-api-key';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0xkey';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'key';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
		},
		goerli: {
			chainId: 5,
			blockConfirmations: 5,
			url: GOERLI_RPC_URL,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	solidity: '0.8.18',
};
