# MintNFTDapp 🚀

![MintNFTDapp](https://img.shields.io/badge/MintNFTDapp-v1.0.0-brightgreen)

Welcome to the MintNFTDapp repository! This project is a full-stack NFT minting decentralized application (dApp) designed for the Base Network. Built using Next.js and Hardhat, it supports ERC721 tokens, integrates IPFS via Pinata, and allows wallet connections. With balance checks and a modern user interface crafted with Tailwind CSS and shadcn/ui, this dApp is fully customizable and deployable to both Base Sepolia and Mainnet.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Releases](#releases)

## Features

- **ERC721 Token Support**: Create and manage your own NFTs.
- **IPFS Integration**: Store your assets securely using Pinata.
- **Wallet Connect**: Easily connect to your preferred wallet.
- **Balance Checks**: View your token balances directly in the app.
- **Modern UI**: Enjoy a sleek interface built with Tailwind CSS and shadcn/ui.
- **Customizable**: Tailor the dApp to fit your needs.
- **Deployable**: Launch on Base Sepolia or Mainnet.

## Technologies Used

This project leverages a variety of technologies:

- **Base Network**: The blockchain network used for deployment.
- **Next.js**: Framework for building the frontend.
- **Hardhat**: Development environment for Ethereum smart contracts.
- **ERC721**: Standard for non-fungible tokens.
- **IPFS**: Protocol for storing and sharing files in a distributed file system.
- **Pinata**: Service for managing IPFS files.
- **React**: JavaScript library for building user interfaces.
- **shadcn/ui**: UI components for a modern look.
- **Solidity**: Programming language for writing smart contracts.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Web3**: JavaScript library for interacting with the Ethereum blockchain.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)
- A wallet that supports Ethereum (e.g., MetaMask)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/100rabhcyber/MintNFTDapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MintNFTDapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000`.

## Usage

Once the application is running, you can start minting NFTs. Connect your wallet and follow the on-screen instructions to create and manage your NFTs. The balance check feature allows you to monitor your token holdings directly from the app.

## Deployment

To deploy the application on Base Sepolia or Mainnet, follow these steps:

1. Update the configuration files with your network settings.
2. Compile your smart contracts:

   ```bash
   npx hardhat compile
   ```

3. Deploy your contracts:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

4. After deployment, update the frontend with the new contract address.

## Contributing

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, feel free to reach out:

- GitHub: [100rabhcyber](https://github.com/100rabhcyber)
- Email: your.email@example.com

## Releases

For the latest updates and versions, please visit our [Releases](https://github.com/100rabhcyber/MintNFTDapp/releases) section. You can download the latest version and execute it to explore the features.

To stay updated, check back regularly for new releases. 

![Releases](https://img.shields.io/badge/Check%20Releases-blue)

## Conclusion

MintNFTDapp is a powerful tool for anyone interested in creating and managing NFTs on the Base Network. With its user-friendly interface and robust features, it simplifies the minting process while providing all the necessary tools for developers and users alike. We invite you to explore the repository, contribute, and help us improve this project further.