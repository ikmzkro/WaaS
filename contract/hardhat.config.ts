import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.24',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	mocha: {
		timeout: 100000000,
	},
	networks: {
		sepolia: {
			url: `https://sepolia.infura.io/v3/`,
			gas: 2000000,
			accounts: [],
		},
	},
	etherscan: {
		apiKey: {},
	},
}

export default config
