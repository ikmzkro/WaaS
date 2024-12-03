const { ethers } = require("hardhat");
const fs = require("fs");

// npx hardhat run scripts/deploySafeTransfer.ts --network sepolia
// npx hardhat verify --network sepolia 0x88033e21aF785ECA7D57c7D055cA0F3aE05D7F7b 0x3FA5C4859581E72d08eae107BBcaAB274f597A41
// https://sepolia.etherscan.io/address/0x3FA5C4859581E72d08eae107BBcaAB274f597A41

const main = async () => {
  const testERC20Token = "0x3FA5C4859581E72d08eae107BBcaAB274f597A41"
  const SafeTransfer = await ethers.getContractFactory("SafeTransfer");
  const safeTransfer = await SafeTransfer.deploy(testERC20Token);
  console.log(`Contract deployed to: https://sepolia.etherscan.io/address/${safeTransfer.target}`);

  fs.writeFileSync("./testERC20TokenContractAddress.ts",
    `export const fanTokenContractAddress = "${safeTransfer.target}"`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});