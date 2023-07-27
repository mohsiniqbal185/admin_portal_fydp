import React, { useEffect, useState } from "react";

const ViewTransaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const getTokenBalance = async () => {
    try {
      const response = await fetch(`/token-balance?address=${walletAddress}`);
      const data = await response.json();
      setTokenBalance(data[0].balance);
    } catch (error) {
      console.error("Error fetching token balance:", error);
    }
  };

  return (
    <div>
      <h1>Token Balance</h1>
      <input type="text" value={walletAddress} onChange={handleInputChange} placeholder="Enter wallet address" />
      <button onClick={getTokenBalance}>Get Token Balance</button>
      {tokenBalance && <p>Token Balance: 5</p>}
    </div>
  );
};

export default ViewTransaction;
