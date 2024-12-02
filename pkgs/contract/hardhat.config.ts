import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'
import * as dotenv from "dotenv";

dotenv.config();

const {
	PRIVATE_KEY,
	ETHERSCAN_API_KEY,
	ALCHEMY_API_KEY,
	COINMARKETCAP_API_KEY,
	GAS_REPORT,
} = process.env;


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
		hardhat: {
			allowUnlimitedContractSize: true,
		},
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		holesky: {
			url: `https://eth-holesky.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
	},
	etherscan: {
		apiKey: {
			sepolia: ETHERSCAN_API_KEY!,
			holesky: ETHERSCAN_API_KEY!,
		},
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
		token: "ETH",
		coinmarketcap: COINMARKETCAP_API_KEY,
		gasPriceApi:
			"https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
	},
}

export default config
