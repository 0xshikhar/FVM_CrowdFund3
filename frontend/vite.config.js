// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     global: "globalThis",
//     "process.env": {},
//   },
//   optimizeDeps: {
//     exclude: [
//       '@thirdweb-dev',
//       '@thirdweb-dev/wallets',
//       '@thirdweb-dev/wallets/dist/thirdweb-dev-wallets.browser.esm.js',
//     ]
//   },
//   define: {
//     global: "globalThis",
//     "process.env": {},
//   },
//   resolve: {
//     alias: {
//       web3: 'web3/dist/web3.min.js',
//     },
//   },
// });

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      web3: "web3/dist/web3.min.js",
      "@safe-globalThis/safe-ethers-adapters":
        "node_modules/@thirdweb-dev/wallets/dist/thirdweb-dev-wallets.browser.esm.js",
      "@safe-globalThis/safe-core-sdk":
        "node_modules/@thirdweb-dev/wallets/dist/thirdweb-dev-wallets.browser.esm.js",
      "@safe-globalThis/safe-ethers-lib":
        "node_modules/@thirdweb-dev/wallets/dist/thirdweb-dev-wallets.browser.esm.js",
    },
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
