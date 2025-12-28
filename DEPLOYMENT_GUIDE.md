# 🚀 Complete Deployment Guide - Privex on Vercel + Sepolia Testnet

This guide will help you deploy your blockchain-based secure data sharing platform to production in **under 15 minutes**.

---

## 📋 Prerequisites

Before starting, make sure you have:

- ✅ GitHub account
- ✅ Vercel account (free) - [Sign up here](https://vercel.com)
- ✅ MetaMask wallet installed
- ✅ Alchemy account (free) - [Sign up here](https://www.alchemy.com)
- ✅ Pinata account (free) - [Sign up here](https://www.pinata.cloud)

---

## 🎯 Part 1: Get Free Test ETH (Sepolia)

1. **Switch MetaMask to Sepolia Network**
   - Open MetaMask
   - Click network dropdown → Show test networks → Select "Sepolia"

2. **Get Free Test ETH**
   - Visit: https://sepoliafaucet.com
   - OR: https://www.alchemy.com/faucets/ethereum-sepolia
   - Enter your wallet address
   - Wait 1-2 minutes for test ETH

---

## 🔧 Part 2: Setup API Keys

### A. Get Alchemy API Key (for blockchain connection)

1. Go to [Alchemy Dashboard](https://dashboard.alchemy.com)
2. Click "Create New App"
3. Settings:
   - **Chain**: Ethereum
   - **Network**: Sepolia
   - **Name**: Privex-Sepolia
4. Click "Create App"
5. Click "View Key" → Copy **HTTPS URL**
   - Example: `https://eth-sepolia.g.alchemy.com/v2/abc123xyz`

### B. Get Pinata API Keys (for IPFS file storage)

1. Go to [Pinata Dashboard](https://app.pinata.cloud)
2. Click "API Keys" → "New Key"
3. Enable all permissions
4. Name it "Privex"
5. Copy both:
   - **API Key**
   - **API Secret**

### C. Get MetaMask Private Key

⚠️ **IMPORTANT**: Only use a test wallet! Never use your main wallet!

1. Open MetaMask
2. Click three dots → Account Details
3. Click "Show Private Key"
4. Enter password → Copy private key

---

## 🏗️ Part 3: Deploy Smart Contract to Sepolia

1. **Create .env file in project root**

```bash
cd d:\hackthon\Privex_3.0.1
```

Create `.env` file with:

```env
SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR-ALCHEMY-KEY"
PRIVATE_KEY="your_metamask_private_key_here"
```

2. **Install dependencies**

```bash
npm install dotenv
```

3. **Deploy the contract**

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

4. **Save the Contract Address**
   - Copy the contract address from terminal output
   - Example: `0x1234567890abcdef1234567890abcdef12345678`

5. **Verify on Etherscan** (optional but recommended)
   - Visit: `https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS`
   - You should see your deployed contract!

---

## 🌐 Part 4: Deploy Frontend to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### Step 2: Deploy on Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Click "Add New" → "Project"**

3. **Import your GitHub repository**
   - Find: `Blockchain-based-secure-data-sharing-platform-B2B`
   - Click "Import"

4. **Configure Project**
   - **Framework Preset**: Create React App
   - **Root Directory**: `client` ← **IMPORTANT!**
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. **Add Environment Variables**

Click "Environment Variables" and add:

| Name | Value |
|------|-------|
| `REACT_APP_PINATA_API_KEY` | Your Pinata API Key |
| `REACT_APP_PINATA_SECRET_API_KEY` | Your Pinata Secret Key |
| `REACT_APP_CONTRACT_ADDRESS` | Your deployed contract address |
| `REACT_APP_NETWORK_ID` | `11155111` |
| `REACT_APP_NETWORK_NAME` | `sepolia` |

6. **Click "Deploy"**
   - Wait 2-3 minutes
   - Your app will be live! 🎉

---

## ✅ Part 5: Test Your Deployment

1. **Visit your Vercel URL**
   - Example: `https://your-project.vercel.app`

2. **Connect MetaMask**
   - Make sure you're on **Sepolia network**
   - Click "Connect Wallet"

3. **Test Upload**
   - Upload a test file
   - It should be stored on IPFS
   - Transaction recorded on Sepolia blockchain

4. **Check Transaction**
   - Visit: `https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS`
   - You should see your transactions!

---

## 🔄 Auto-Deploy on Updates

**Good news!** Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will automatically:
- ✅ Pull latest code
- ✅ Rebuild the app
- ✅ Deploy to production
- ✅ Keep same URL

---

## 🎓 For Academic Demo

### What You Have Now:

✅ **Fully functional blockchain app**  
✅ **Live on the internet** (shareable URL)  
✅ **Real blockchain** (Sepolia testnet)  
✅ **Decentralized storage** (IPFS via Pinata)  
✅ **Auto-deploys** on code updates  
✅ **Free hosting** (no credit card needed)  

### Demo Script:

1. **Show the live URL** - "This is deployed on Vercel"
2. **Connect MetaMask** - "Using Sepolia testnet"
3. **Upload a file** - "Stored on IPFS, recorded on blockchain"
4. **Show Etherscan** - "Here's the transaction proof"
5. **Share access** - "Blockchain-based access control"

---

## 🐛 Troubleshooting

### Issue: "Insufficient funds"
**Solution**: Get more test ETH from faucet

### Issue: "Network mismatch"
**Solution**: Switch MetaMask to Sepolia network

### Issue: "Build failed on Vercel"
**Solution**: 
- Check Root Directory is set to `client`
- Verify all environment variables are set

### Issue: "Contract not found"
**Solution**: 
- Verify contract address in environment variables
- Check you're on Sepolia network

---

## 📞 Quick Reference

### Important URLs:
- **Sepolia Faucet**: https://sepoliafaucet.com
- **Alchemy Dashboard**: https://dashboard.alchemy.com
- **Pinata Dashboard**: https://app.pinata.cloud
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Sepolia Explorer**: https://sepolia.etherscan.io

### Network Details:
- **Network Name**: Sepolia
- **Chain ID**: 11155111
- **Currency**: SepoliaETH (test ETH)
- **RPC URL**: From Alchemy

---

## 🎉 You're Done!

Your blockchain app is now:
- ✅ Live on the internet
- ✅ Connected to Ethereum testnet
- ✅ Using decentralized storage
- ✅ Auto-deploying on updates
- ✅ Ready for academic presentation

**Share your live URL with anyone!** They just need MetaMask + Sepolia test ETH to use it.

---

## 💡 Pro Tips

1. **For Presentations**: 
   - Have test ETH ready in multiple wallets
   - Prepare demo files in advance
   - Show Etherscan transactions for proof

2. **Cost**: 
   - Everything is FREE (testnet + free tiers)
   - No real money involved

3. **Updates**: 
   - Just push to GitHub
   - Vercel auto-deploys in 2-3 minutes

---

**Need help?** Check the troubleshooting section or review the error messages in Vercel deployment logs.
