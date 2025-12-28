# Privex 3.0 - Blockchain-Based Secure Data Sharing Platform

A decentralized file sharing platform built with React, Ethereum smart contracts, and IPFS storage. This project demonstrates blockchain-based access control and secure file management.

---

## 🏗️ Architecture

**Frontend**: React.js (deployed on Vercel)  
**Smart Contracts**: Solidity (Ethereum)  
**Storage**: IPFS via Pinata  
**Development**: Hardhat  
**Wallet**: MetaMask

---

## 🎯 How Web3 Apps Are Typically Deployed

### Traditional Web3 Deployment:

1. **Frontend** → Deployed to hosting (Vercel, Netlify, IPFS)
2. **Smart Contracts** → Deployed to public blockchain (Ethereum Mainnet, Polygon, etc.)
3. **Users** → Connect via MetaMask to the public blockchain
4. **Cost** → Gas fees for every transaction (real money)

**Example Flow:**
```
User → Vercel Frontend → MetaMask → Ethereum Mainnet → Smart Contract
                                    (Costs real ETH)
```

---

## 🚀 How This Project Works (Hybrid Approach)

### Our Setup (Best for Demos & Development):

1. **Frontend** → Deployed on Vercel (live URL, accessible anywhere)
2. **Smart Contracts** → Running on LOCAL Hardhat blockchain (your computer)
3. **Users** → Connect MetaMask to your local blockchain
4. **Cost** → FREE (local test network)

**Example Flow:**
```
User → Vercel Frontend → MetaMask → Local Hardhat (localhost:8545) → Smart Contract
                                    (FREE - no real money)
```

### Why This Approach?

✅ **Professional Demo**: Live website URL to share  
✅ **Zero Cost**: No gas fees, unlimited testing  
✅ **Full Control**: Complete blockchain on your machine  
✅ **Fast Iteration**: Instant contract redeployment  
✅ **Academic Perfect**: Great for presentations and testing  

---

## 📦 Project Structure

```
Privex_3.0.1/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contracts/     # Contract ABI (auto-generated)
│   │   └── App.js         # Main app with dynamic contract loading
│   └── package.json
├── contracts/             # Solidity smart contracts
│   └── Upload.sol         # Main contract for file management
├── scripts/               # Deployment scripts
│   └── deploy.js          # Contract deployment
├── hardhat.config.js      # Hardhat configuration
└── README.md
```

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16+)
- MetaMask browser extension
- Git

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd Privex_3.0.1

# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

---

## 💻 Running Locally (Full Stack)

### Terminal 1: Start Local Blockchain

```bash
npx hardhat node
```

This starts a local Ethereum blockchain at `http://127.0.0.1:8545`

**Note the accounts** - you'll get 10 test accounts with 10,000 ETH each!

### Terminal 2: Deploy Smart Contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

**Copy the contract address** that appears!

### Terminal 3: Run Frontend

```bash
cd client

# Create .env file
echo REACT_APP_CONTRACT_ADDRESS=<YOUR_CONTRACT_ADDRESS> > .env

# Start React app
npm start
```

Open `http://localhost:3000`

---

## 🌐 Deploying to Vercel (Frontend Only)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. **Important**: Set **Root Directory** to `client`
4. Click Deploy

### Step 3: Configure MetaMask for Local Blockchain

1. Open MetaMask
2. Add Network:
   - **Network Name**: Hardhat Local
   - **RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `31337`
   - **Currency**: ETH

3. Import Account:
   - Copy private key from Hardhat terminal (Account #0)
   - MetaMask → Import Account → Paste key

### Step 4: Use Your App

1. Run local blockchain: `npx hardhat node`
2. Deploy contract: `npx hardhat run scripts/deploy.js --network localhost`
3. Open your Vercel URL
4. Connect MetaMask (Hardhat Local network)
5. Upload and share files!

---

## 🎓 For Academic Demos & Presentations

### What Your Audience Sees:

✅ Professional live website (Vercel URL)  
✅ Real blockchain transactions (visible in Hardhat terminal)  
✅ MetaMask wallet integration  
✅ File upload with IPFS  
✅ Smart contract-based access control  

### Demo Script:

1. **Show Vercel URL** - "This is deployed and accessible online"
2. **Show Hardhat Terminal** - "This is our local blockchain"
3. **Connect MetaMask** - "Connecting to local Ethereum network"
4. **Upload File** - "Storing on IPFS, recording on blockchain"
5. **Share Access** - "Smart contract manages permissions"
6. **Show Transaction** - "Here's the blockchain transaction"

---

## 🔄 Alternative: Deploy to Public Testnet (Sepolia)

If you want a persistent blockchain instead of local:

### 1. Get Sepolia Test ETH

- Visit: https://sepoliafaucet.com
- Enter your MetaMask address
- Get free test ETH

### 2. Configure Environment

Create `.env` in root:

```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR-ALCHEMY-KEY
PRIVATE_KEY=your_metamask_private_key
```

### 3. Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Update Vercel

Add environment variable in Vercel dashboard:
- `REACT_APP_CONTRACT_ADDRESS` = your Sepolia contract address

### 5. Use App

- Switch MetaMask to Sepolia network
- Open Vercel URL
- Connect and use!

**Difference**: Sepolia is a public testnet - your contract stays deployed even after you close your computer.

---

## 📊 Comparison Table

| Feature | Local Hardhat | Sepolia Testnet | Mainnet |
|---------|--------------|-----------------|---------|
| **Cost** | FREE | FREE (test ETH) | REAL ETH $$$ |
| **Speed** | Instant | ~15 seconds | ~15 seconds |
| **Persistence** | Lost on restart | Permanent | Permanent |
| **Best For** | Development, Demos | Testing, Sharing | Production |
| **Setup** | 2 minutes | 10 minutes | Complex |

---

## 🎯 Key Features

- **Decentralized File Storage**: Files stored on IPFS
- **Blockchain Access Control**: Smart contract manages permissions
- **Group Sharing**: Share files with multiple users at once
- **MetaMask Integration**: Secure wallet connection
- **File Management**: Upload, view, and manage files
- **Access Management**: Grant/revoke access to specific files

---

## 🔧 Smart Contract Functions

- `add()` - Upload file metadata to blockchain
- `allow()` - Grant access to specific files
- `disallow()` - Revoke access
- `display()` - View accessible files
- `createGroup()` - Create user groups
- `allowGroup()` - Share files with groups

---

## 🐛 Troubleshooting

### "Contract not found"
- Make sure you deployed the contract
- Check `REACT_APP_CONTRACT_ADDRESS` is set correctly

### "Wrong network"
- Switch MetaMask to Hardhat Local (Chain ID: 31337)
- Or Sepolia if using testnet

### "Insufficient funds"
- Use Account #0 from Hardhat (has 10,000 ETH)
- Or get test ETH from Sepolia faucet

### "Build failed on Vercel"
- Ensure Root Directory is set to `client`
- Check all dependencies are in `client/package.json`

---

## 📚 Tech Stack

**Frontend:**
- React 18
- Ethers.js v5
- React Router
- React Dropzone

**Blockchain:**
- Solidity ^0.8.19
- Hardhat
- Ethers.js

**Storage:**
- IPFS (Pinata)

**Deployment:**
- Vercel (Frontend)
- Hardhat (Local Blockchain)
- Sepolia (Optional Public Testnet)

---

## 🤝 Contributing

This is an academic project. Feel free to fork and experiment!

---

## 📄 License

MIT License - feel free to use for learning and development.

---

## 🎓 Educational Purpose

This project demonstrates:
- Web3 application architecture
- Smart contract development
- Decentralized storage (IPFS)
- Blockchain-based access control
- Hybrid deployment strategies
- MetaMask integration

**Perfect for**: Academic projects, hackathons, learning Web3 development

---

## 💡 Key Takeaway

**Traditional Web3**: Everything on public blockchain (expensive, slow to iterate)  
**Our Approach**: Frontend on Vercel + Blockchain on localhost (free, fast, professional demo)  
**Best of Both Worlds**: Live website + full blockchain control + zero cost!

---

**Questions?** Check the Hardhat terminal for transaction logs or open an issue on GitHub.
