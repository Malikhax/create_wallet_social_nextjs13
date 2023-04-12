'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
    ConnectButton,
    connectorsForWallets ,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    injectedWallet,
    rainbowWallet,
    metaMaskWallet,
    coinbaseWallet,
    walletConnectWallet,
  } from '@rainbow-me/rainbowkit/wallets';
  import { 
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
  } from '@zerodevapp/wagmi/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const defaultProjectId ="3314850a-247d-4956-81f7-35725bc181f1"
const {chains,provider} = configureChains(
    [mainnet],
    [publicProvider()]
);
// const {connectors} = getDefaultWallets ({
//     appName:'rainbowkit Demo',
//     chains,
// })
const connectors = connectorsForWallets([
    {
        groupName: 'Social',
        wallets: [
          googleWallet({options: { projectId: defaultProjectId }}),
          facebookWallet({options: { projectId: defaultProjectId }}),
          githubWallet({options: { projectId: defaultProjectId }}),
          discordWallet({options: { projectId: defaultProjectId }}),
          twitchWallet({options: { projectId: defaultProjectId }}),
          twitterWallet({options: { projectId: defaultProjectId }})
        ],
      },
      {
        groupName: 'Popular',
        wallets: [
          injectedWallet({ chains }),
          rainbowWallet({ chains }),
          metaMaskWallet({ chains }),
          coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
          walletConnectWallet({ chains }),
        ],
      },
  ]);

const wagmiClient=createClient({
    connectors,
    provider
})
const Rainbow = () =>{
    return(
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
            <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>
    )
}
export default Rainbow