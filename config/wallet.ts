import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, bsc } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, bsc],
  ssr: true,
});

export default config;
