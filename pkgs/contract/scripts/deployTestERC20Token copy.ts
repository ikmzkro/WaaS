const { ethers } = require("hardhat");
const fs = require("fs");

// npx hardhat run scripts/deployTestERC20Token.ts --network sepolia
// npx hardhat verify --network sepolia 0x3FA5C4859581E72d08eae107BBcaAB274f597A41
// https://sepolia.etherscan.io/address/0x3FA5C4859581E72d08eae107BBcaAB274f597A41

const main = async () => {
  const TestERC20Token = await ethers.getContractFactory("TestERC20");
  const testERC20Token = await TestERC20Token.deploy();
  console.log(`Contract deployed to: https://sepolia.etherscan.io/address/${testERC20Token.target}`);

  fs.writeFileSync("./testERC20TokenContractAddress.ts",
    `export const fanTokenContractAddress = "${testERC20Token.target}"`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});