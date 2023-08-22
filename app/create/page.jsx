'use client'
import React, { useState } from 'react';
import NavBar from '@/components/Navbar/NavBar';
import { UseAccount } from '@/context/account';

const page = () => {
  const { account, network, contractProvider, contractSigner, connectWallet, isWalletConnected, getContract } = UseAccount()
  console.log("account: ", account)
  console.log("network: ", network)
  console.log("contractProvider: ", contractProvider)
  console.log("contractSigner: ", contractSigner)

  const [url, setUrl] = useState();
  const [price, setPrice] = useState();

  const createNFT = async() => {
    await contractSigner.createNFT(url.toString(), price.toString(), {value:price.toString()})
  }

  return (
    <div className=' bg-white h-screen'>
      <NavBar />
      <div className='w-[80%] mx-auto'>
        <div className='text-5xl font-bold py-20'>Create New NFT</div>

        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col'>
            <label htmlFor="">Image URL</label>
            <input className='px-5 py-3 outline-none  rounded-lg  border-2 border-dotted' placeholder='https://...' 
            onChange={(e) => setUrl(e.target.value)}/>            
          </div>
          {url}

          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <label htmlFor="">Price </label>
              <span className='text-xs'>0.000000000000000001</span>
            </div>
            
            <input className='px-5 py-3 outline-none  rounded-lg  border-2 border-dotted' placeholder='e.g. 4.5' type="number" step='any' 
            onChange={(e) => setPrice(e.target.value *10**18)}/>            
          </div>
          {price}

          <button className='bg-green-500 px-5 py-4 rounded-lg text-white font-semibold hover:bg-green-600'
          onClick={() => createNFT()}>
            Create NFT
          </button>

        </div>
      </div>
      

    </div>
  );
}

export default page;
