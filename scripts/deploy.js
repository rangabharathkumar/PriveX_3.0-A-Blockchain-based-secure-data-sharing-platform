const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying Upload contract to Sepolia testnet...");

  // Get the contract factory
  const Upload = await hre.ethers.getContractFactory("Upload");

  // Deploy the contract
  console.log("⏳ Deploying contract...");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();

  const contractAddress = await upload.getAddress();

  console.log("✅ Upload contract deployed successfully!");
  console.log("📍 Contract Address:", contractAddress);
  console.log("\n📝 Next Steps:");
  console.log("1. Copy the contract address above");
  console.log("2. Update your .env file:");
  console.log(`   REACT_APP_CONTRACT_ADDRESS="${contractAddress}"`);
  console.log("3. Update Vercel environment variables with this address");
  console.log("\n🔗 View on Etherscan:");
  console.log(`   https://sepolia.etherscan.io/address/${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });