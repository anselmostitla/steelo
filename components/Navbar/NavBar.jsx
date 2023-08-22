import Image from "next/image"

import { MdNotifications, MdMusicNote, MdOutlineAccountCircle } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

import Discover from "./Discover"
import HelpCenter from "./HelpCenter"
import Notification from "./Notification"
import Profile from "./Profile"
import SideBar from "./SideBar"

import { useEffect, useState } from "react"
import { UseAccount } from "@/context/account"
import Link from 'next/link'


const NavBar = () => {
  const {account, network, connectWallet} = UseAccount()

  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const showMenu = (element) => {
    setDiscover(false)
    setHelp(false)
    setNotification(false)
    setProfile(false)
    setOpenSideMenu(false)
    if(element == "Discover") setDiscover(!discover)
    else if(element == "Help Center") setHelp(!help)
    else if(element == "Notification") setNotification(!notification)
    else if(element == "Profile") setProfile(!profile)
    else if(element == "openSideBar") setOpenSideMenu(!openSideMenu)
  }


  return(

    <div className="bg-gradient-to-b from-green-600 to-green-500">
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <Link href="/"> <MdMusicNote className="w-12 h-12 hover:cursor-pointer"/> </Link>
            <Link href="/" className="text-4xl font-extrabold hover:cursor-pointer">Steelo</Link>
          </div>

        </div>

        <div className="flex grow justify-center my-2 mx-5">
          <div className="flex flex-1 bg-white items-center rounded-lg justify-between">
            <input placeholder="Search NFT" className="flex flex-1 outline-none px-5 py-3 rounded-s-lg"/>
            <BsSearch className="w-10   flex  hover:cursor-pointer" onClick={()=>{}}/>
          </div>
        </div>

        <div className="flex items-center space-x-7">
          
          {/* DISCOVER COMPONENT */}
          <div className="">
            <p className="hover:cursor-pointer" onClick={() => showMenu("Discover")}>Discover</p>
            { discover &&
              <div><Discover /></div>
            }
          </div>
          
          {/* HELP CENTER COMPONENT */}
          <div>
            <p className="hover:cursor-pointer" onClick={() => showMenu("Help Center")}> Help Center </p>
              { help &&
                <div><HelpCenter /></div>
              }
          </div>

          {/* NOTIFICATION COMPONENT */}
          <div>
            <MdNotifications className="my-2 w-6 h-6 hover:cursor-pointer" onClick={() => showMenu("Notification")}/>
            { notification && <Notification />}
          </div>

          <div>
            <button className="bg-pink-500 text-white rounded-xl px-5 py-3 hover:bg-pink-600" 
            onClick={() => connectWallet()}>
              {account? <div className="flex space-x-2"> <div>{ network?.name }</div> <span> | </span> <div>  </div> {account?.slice(0,4) + '...' + account?.slice(-3)}</div>    : 'Connect Wallet'}
            </button>
          </div>

          {/* USER PROFILE */}
          <div>
              <div>
                <MdOutlineAccountCircle className="w-10 h-10 hover:cursor-pointer" onClick={() => showMenu("Profile")}/>
                {profile && <Profile />}
              </div>
          </div>

          {/* MENU BUTTON */}
          <div>
              <CgMenuRight className="hover:cursor-pointer" onClick={() => showMenu("openSideBar")}/>
          </div>

          {/* SIDEBAR COMPONENT */}
          <div>
              {openSideMenu && 
                <div className="my-4"> <SideBar setOpenSideMenu={setOpenSideMenu}/> </div>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

// https://youtu.be/S3jJtGYI18E?t=16247