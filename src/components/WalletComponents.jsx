import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } catch (err) {
      console.error("Wallet connect error:", err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md text-center">
      {walletAddress ? (
        <p className="text-green-600 dark:text-green-400">
          Connected: {walletAddress}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}