'use client'
import React, {useState, useEffect, createContext, useContext } from 'react';
import { ethers } from 'ethers'
import NFTMarketplace from '../constants/NFTMarketplace.json'

const AccountContext = createContext()
export const useAccount = () => {
  return useContext(AccountContext)
}

const AccountContextProvider = ({children}) => {

  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [contractProvider, setContractProvider] = useState();
  const [contractSigner, setContractSigner] = useState();
  const [runCounter, setRunCounter] = useState(0);

  useEffect(() => {
    isWalletConnected()
    getNetwork()
    getContract("provider")
  },[])

  useEffect(() => {
    getContractSigner()
  },[runCounter, account])
  
  const connectWallet = async () => {  
    if(!window.ethereum) return
    if(typeof window.ethereum != undefined && typeof window.ethereum.request != undefined){
      const accounts = await window.ethereum.request({method : "eth_requestAccounts"})
      setAccount(accounts[0])   
      setRunCounter(0)
    }
  }

  const isWalletConnected = async () => {
    if(!window.ethereum) return
    if(typeof window.ethereum != undefined && typeof window.ethereum.request != undefined){
      const accounts = await window.ethereum.request({method: "eth_accounts"})
      setAccount(accounts[0])
    }
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload()
    })
    window.ethereum.on("accountsChanged", async() => {
      await isWalletConnected()
    })
  }

  const getNetwork = async() => {
    if(!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const network = await provider.getNetwork()
    setNetwork(network)
  }

  const getContract = (signerOrProvider) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    let contract
    if (signerOrProvider == "provider"){
      contract = new ethers.Contract(NFTMarketplace.address, NFTMarketplace.abi, provider)
      setContractProvider(contract)
    }
    else if(signerOrProvider == "signer"){
      contract = new ethers.Contract(NFTMarketplace.address, NFTMarketplace.abi, signer)
      setContractSigner(contract)   
    }   
  }

  const getContractSigner = () => {
    setTimeout(()=>{
      if(runCounter < 15)
        if(account) getContract("signer")  
        else setRunCounter(runCounter+1)
    },500)
  }


  const data = {account, network, contractProvider, contractSigner, connectWallet, isWalletConnected, getContract}

  return (
    <AccountContext.Provider value = { data }>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContextProvider;
