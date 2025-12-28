# ⚡ Quick Start - Deploy in 5 Minutes

For detailed instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🎯 Super Quick Setup

### 1️⃣ Get Test ETH (1 min)
- Switch MetaMask to **Sepolia** network
- Visit: https://sepoliafaucet.com
- Get free test ETH

### 2️⃣ Get API Keys (3 mins)
- **Alchemy**: https://dashboard.alchemy.com (Create Sepolia app)
- **Pinata**: https://app.pinata.cloud (Create API key)

### 3️⃣ Deploy Contract (2 mins)
```bash
# Create .env file
SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR-KEY"
PRIVATE_KEY="your_metamask_private_key"

# Install & Deploy
npm install dotenv
npx hardhat run scripts/deploy.js --network sepolia
```

**Copy the contract address!**

### 4️⃣ Deploy to Vercel (3 mins)
1. Go to https://vercel.com
2. Import GitHub repo
3. Set **Root Directory**: `client`
4. Add environment variables:
   - `REACT_APP_CONTRACT_ADDRESS` = your contract address
   - `REACT_APP_PINATA_API_KEY` = your Pinata key
   - `REACT_APP_PINATA_SECRET_API_KEY` = your Pinata secret
   - `REACT_APP_NETWORK_ID` = `11155111`
   - `REACT_APP_NETWORK_NAME` = `sepolia`
5. Click Deploy!

### 5️⃣ Done! 🎉
Your app is live at: `https://your-project.vercel.app`

---

## 🔄 Auto-Deploy Updates
```bash
git add .
git commit -m "updates"
git push origin main
```
Vercel auto-deploys in 2-3 minutes!

---

## 📚 Full Documentation
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for:
- Detailed step-by-step instructions
- Troubleshooting guide
- Demo presentation tips
- Network configuration details
