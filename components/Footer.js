import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import Image from 'next/image'
import { MdSend} from 'react-icons/md'
import Discover from './Navbar/Discover'
import HelpCenter from './Navbar/HelpCenter'
import { MdMusicNote } from 'react-icons/md'
import discover from '../constants/discover.json'
import help from '../constants/help.json'
import Link from 'next/link'



const Footer = () => {
  return(
    <div>
      <div className='flex '>

        <div className='w-2/6 m-10 space-y-4'>
          <div className='flex space-x-1'>
            <MdMusicNote className='w-8 h-8'/>
            <p className='text-xl font-bold'>Steelo</p>
          </div>
          
          <p >
            The world first and largest digital marketplace for crypto collectibles
            and non-fungible-tokens(NFTs). Buy, sell and discover digital items.
          </p>

          <div className='flex justify-between px-3'>
            <div><a href="#"><TiSocialFacebook className='w-7 h-7' /></a></div>
            <div><a href="#"><TiSocialLinkedin className='w-7 h-7' /></a></div>
            <div><a href="#"><TiSocialTwitter className='w-7 h-7' /></a></div>
            <div><a href="#"><TiSocialYoutube className='w-7 h-7' /></a></div>
            <div><a href="#"><TiSocialInstagram className='w-7 h-7' /></a></div>            
          </div>

        </div>

        <div className='w-1/6 m-10'>
          <h3 className='font-bold'>Discover</h3>
          <div className='flex flex-col px-3 py-3 space-y-1'>
            {
              discover.map((el,i) => (
                <Link href={`/${el.link}`} key={i}>
                  {el.name}
                </Link>
              ))
            }            
          </div>


        </div>

        <div className='w-1/6 m-10'>
          <h3 className='font-bold'>Help Center</h3>
          <div className='flex flex-col px-3 py-3 space-y-1'>
            {
              help.map((el,i) => (
                <Link href={`/${el.link}`} key={i}>
                  {el.name}
                </Link>
              ))
            }            
          </div>
        </div>

        <div  className='w-2/6 m-10'>
          <h3 className='font-bold'>Subscribe</h3>
          <div className='flex px-3 py-2 rounded bg-gray-200 justify-between items-center my-3'>
            <input className='bg-transparent outline-none' placeholder='Enter your email *' />
            <MdSend className='w-6 h-6'/>
          </div>

          <div>
            <p>
              Discover, collect and sell extraordinary NFTs.
            </p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Footer