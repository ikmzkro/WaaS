# WaaS
Wallet as a Service

# BIP-39

# EIP-1559

## SeploiaToken
- `ethers.js`でSeploiaTokenを送金する
- https://recruit.gmo.jp/engineer/jisedai/blog/eip-1559-research/

## TestERC20Token
- `TestERC20.sol`でテストネット用のERC20トークン（TestERC20Token）を作成する
- `SafeTransfer.sol`の`transferTestERC20Token`でTestERC20Tokenを送金する
- 送金時は`viem`を利用せずに`EIP1559`を利用する

# EIP-2771

# EIP-4337