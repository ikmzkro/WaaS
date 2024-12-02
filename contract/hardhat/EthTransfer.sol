// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EthTransfer is Ownable, ReentrancyGuard {
	IERC20 public sepoliaToken;

	constructor(address _sepoliaTokenAddress) Ownable(_msgSender()) {
		sepoliaToken = IERC20(_sepoliaTokenAddress);
	}

	// Sepoliaのテストネットトークンを送金する関数
	function transferSepoliaToken(address recipient, uint256 amount) external onlyOwner nonReentrant {
		require(sepoliaToken.balanceOf(address(this)) >= amount, "Insufficient token balance");
		require(recipient != address(0), "Invalid recipient address");

		bool success = sepoliaToken.transfer(recipient, amount);
		require(success, "Transfer failed");
	}
}
