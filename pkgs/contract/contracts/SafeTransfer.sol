// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SafeTransfer is Ownable, ReentrancyGuard {
	IERC20 public testERC20Token;

	constructor(address _testERC20TokenAddress) Ownable(_msgSender()) {
		testERC20Token = IERC20(_testERC20TokenAddress);
	}

	function transferTestERC20Token(address recipient, uint256 amount) external onlyOwner nonReentrant {
		require(testERC20Token.balanceOf(address(this)) >= amount, "Insufficient token balance");
		require(recipient != address(0), "Invalid recipient address");

		bool success = testERC20Token.transfer(recipient, amount);
		require(success, "Transfer failed");
	}
}
