import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { useState } from "react";
import "./app.css";
import "../styles/globals.css";

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/eth" }) }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [itemList, setItemList] = useState([
    {
      image:
        "https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png",
      tier: "Gold",
      reward: 50,
      tokenId: 93,
      totalbalance: 1223.1,
      listedPrice: 1500.0,
      diff: 22.64,
    },
    {
      image:
        "https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png",
      tier: "Gold",
      reward: 50,
      tokenId: 93,
      totalbalance: 1223.1,
      listedPrice: 1500.0,
      diff: 22.64,
    },
    {
      image:
        "https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png",
      tier: "Gold",
      reward: 50,
      tokenId: 93,
      totalbalance: 1223.1,
      listedPrice: 1500.0,
      diff: 22.64,
    },
    {
      image:
        "https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png",
      tier: "Gold",
      reward: 50,
      tokenId: 93,
      totalbalance: 1223.1,
      listedPrice: 1500.0,
      diff: 22.64,
    },
  ]);
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout
          setWalletConnect={setWalletConnected}
          setAddress={setAddress}
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        >
          <Component
            {...pageProps}
            walletConnected={walletConnected}
            itemList={itemList}
            address={address}
            provider={provider}
            hamburgerOpen={hamburgerOpen}
          />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
