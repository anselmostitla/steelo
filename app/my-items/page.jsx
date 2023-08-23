"use client";
import NavBar from "@/components/Navbar/NavBar";
import { AccountContext } from "@/context/account";
import React, { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import Image from "next/image";

const page = () => {
  const {
    contractProvider,
  } = AccountContext();
  const [currentId, setCurrentId] = useState();
  const [stepTime, setStepTime] = useState(500);
  const [runningTimes, setRunningTimes] = useState(0);
  const [items, setItems] = useState();
  const [uris, setUris] = useState([]);

  useEffect(() => {
    getNFTs();
  }, [runningTimes]);

  const getNFTs = () => {
    setTimeout(async () => {
      if (contractProvider) {
        const currentIdOBJ = await contractProvider._tokenIds();
        const currentId = BigNumber.from(currentIdOBJ["_hex"]).toString();
        console.log("currentId: ", currentId);
        setCurrentId(currentId);

        const items = await contractProvider.fetchMarketItem();
        console.log("items: ", items);

        // const items = []
        // for (let i = 0; i < currentId; i++) {
        //   const item =  await contractProvider.fetchMyNFT()
        //   console.log("item: ", item)
        //   items.push(item)
        // }
        setItems(items);

        const tempItems = [...items];
        const uris = [];
        for (let i = 0; i < items.length; i++) {
          const element = items[i];
          const id = element.tokenId;
          const uri = await contractProvider?.tokenURI(id);
          console.log("uri for: ", uri);
          uris[i] = uri;
        }

        setUris(uris);
      } else {
        setRunningTimes(runningTimes + 1);
      }
    }, stepTime);
  };

  const getURI = async (id) => {
    return await contractProvider?.tokenURI(id);
  };

  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className=" flex flex-col w-[80%] min-h-screen bg-green-100 mx-auto py-20">
        <div className="text-4xl ">Your NFTs</div>
        <div>
          {items?.map((el, i) => (
            <div className="border-2 p-3 m-5" key={i}>
              <div>Id: {BigNumber.from(el.tokenId["_hex"]).toString()}</div>
              <div>Seller: {el.seller}</div>
              <div>Owner: {el.owner}</div>
              <div>
                uri: {uris[BigNumber.from(el.tokenId["_hex"]).toString()]}
              </div>
              {/* <Image src={uris[BigNumber.from(el.tokenId["_hex"]).toString()]} width={500} height={500} alt='none'/> */}
              {/* <Image src='https://gateway.pinata.cloud/ipfs/QmTdhSCdyxoyTWwfEZ4f6oqjMJ8jixLbAPHiTQgSLPzTx4' width={500} height={500} alt='pinata'/> */}
              <Image
                src={uris[BigNumber.from(el.tokenId["_hex"]).toString()]}
                width={100}
                height={100}
                alt="none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
