# Privex 3.0 - Frontend

Blockchain-based secure data sharing platform frontend built with React.

## 🚀 Quick Deploy to Vercel

### 1. Import to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Add New" → "Project"
- Import your GitHub repository

### 2. Configure Settings
- **Root Directory**: `client` ⚠️ **IMPORTANT**
- **Framework**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`

### 3. Deploy
Click "Deploy" - that's it! Your frontend will be live in 2-3 minutes.

## 🔧 Environment Variables (Optional)

Add these in Vercel dashboard when you want to connect blockchain:

```
REACT_APP_CONTRACT_ADDRESS=your_contract_address
REACT_APP_PINATA_API_KEY=your_pinata_key
REACT_APP_PINATA_SECRET_API_KEY=your_pinata_secret
REACT_APP_NETWORK_ID=11155111
REACT_APP_NETWORK_NAME=sepolia
```

**Note**: The app will work without these - you can add them later!

## 💻 Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## 🎯 Features

- ✅ Secure file upload and sharing
- ✅ Blockchain-based access control
- ✅ MetaMask integration
- ✅ Group management
- ✅ IPFS storage integration
- ✅ Responsive design

## 🔗 Tech Stack

- React 18
- Ethers.js
- React Router
- React Dropzone
- Web3 / MetaMask

---

**For full deployment guide, see [VERCEL_DEPLOY.md](../VERCEL_DEPLOY.md) in the root directory.**
