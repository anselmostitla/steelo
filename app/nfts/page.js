"use client";
import NavBar from "@/components/Navbar/NavBar";
import { AccountContext } from "@/context/account";
import React, { useEffect, useState } from "react";

const page = () => {
  const {
    contractProvider,
  } = AccountContext();
  const [runCounter, setRunCounter] = useState(0);
  const [uris, setUris] = useState([]);
  const [items, setItems] = useState();

  useEffect(() => {
    getSmartContractNFTs();
  }, [runCounter]);

  const getSmartContractNFTs = () => {
    setTimeout(async () => {
      if (contractProvider) {
        console.log("runCounter: ", runCounter);
        const items = await contractProvider.fetchMarketItem();
        setItems(items);
        console.log("items smart contract nfts: ", items);

        const uris = [];
        for (let i = 0; i < items.length; i++) {
          const element = items[i];
          const id = element.tokenId;
          const uri = await contractProvider?.tokenURI(id);
          uris[i] = uri;
        }
        setUris(uris);
      } else {
        setRunCounter(runCounter + 1);
      }
    }, 500);
  };

  return (
    <div className="bg-white">
      <NavBar />
      <div className="min-h-screen w-[80%] mx-auto">
        <div className="flex py-20">Smart Contract NFTs</div>

        <div>
          {items?.map((el, i) => (
            <div key={i}>
              <div>seller: {el.seller}</div>
              <div>owner: {el.owner}</div>
              <div>uri: {uris[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
