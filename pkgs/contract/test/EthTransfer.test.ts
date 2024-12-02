// SPDX-License-Identifier: MIT
import { ethers } from 'hardhat'
import { expect } from 'chai'
import { EthTransfer } from '../typechain-types'
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers'
import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers'

describe('EthTransfer', () => {
	const setup = async (): Promise<EthTransfer> => {
		const ethTransfer = await ethers.deployContract('EthTransfer')
		expect(ethTransfer.address).to.properAddress
		return ethTransfer as unknown as EthTransfer
	}

    type Signers = {
		owner: SignerWithAddress
		alice: SignerWithAddress
		bob: SignerWithAddress
	}

	const getSigners = async (): Promise<Signers> => {
		const [owner, alice, bob] = await ethers.getSigners()
		return {
			owner,
			alice,
			bob,
		}
	}

	describe('constructor', () => {
		it('owner is deployer', async () => {
			const ethTransfer = await loadFixture(setup)
			const { owner } = await getSigners()
            
			console.log('Owner Address:', owner.address)

			expect(await ethTransfer.owner()).to.equal(owner.address)
		})
	})
})
