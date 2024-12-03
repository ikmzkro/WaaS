// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20 {
	constructor() ERC20("TestERC20", "TEST") {
		_mint(msg.sender, 10000_000_000_000_000_000_000);
	}
}
