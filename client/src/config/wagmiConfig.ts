import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
    arbitrum,
    base,
    baseSepolia,
    hardhat,
    mainnet,
    polygon,
    scroll,
    sepolia,
} from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "@wagmi/core";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
    throw new Error("Project ID is not defined");
}

export const networks = [
    mainnet,
    arbitrum,
    sepolia,
    base,
    baseSepolia,
    scroll,
    polygon,
    hardhat,
];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    projectId,
    networks,
});

export const config = wagmiAdapter.wagmiConfig;
