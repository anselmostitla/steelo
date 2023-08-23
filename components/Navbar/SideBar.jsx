import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown } from 'react-icons/ti'
import { MdMusicNote } from 'react-icons/md'
import { useState } from 'react'
import discover from '../../constants/discover.json'
import help from '../../constants/help.json'
import { useRouter} from 'next/navigation'
import Link from 'next/link'



const SideBar = ({ setOpenSideMenu}) => {
  const router = useRouter()
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover)
  }

  const openHelpMenu = () => {
    setOpenHelp(!openHelp)
  }

  const closeSideBar = () => {
    setOpenSideMenu(false)
  }

  const goToCreate = () => {
    router.push('/create')
  }
  

  return(
    <div className='absolute right-5 border rounded-lg shadow-2xl bg-gray-100 px-5 py-3 mt-7 w-64 z-20'>
      <div className='flex justify-end'>
        <GrClose onClick={() => closeSideBar()}/>
      </div>
      

      <div>
        
        <div className='flex items-center py-3'>
          <MdMusicNote className="w-8 h-8"/>
          <div className='text-2xl font-bold'>Steelo</div>
        </div>
        <p className='flex flex-wrap'>Discover the most oustanding articles on all topics of NFT and your
          own stories and share them
        </p>

        <div className='flex space-x-3 py-3'>
          <div>
            <Link href="#"><TiSocialFacebook /></Link>
          </div>

          <div>
            <Link href="#"><TiSocialLinkedin /></Link>
          </div>

          <div>
            <Link href="#"><TiSocialTwitter /></Link>
          </div>

          <div>
            <Link href="#"><TiSocialYoutube /></Link>
          </div>

          <div>
            <Link href="#">< TiSocialInstagram/></Link>
          </div>          
        </div>
      </div>

      <div className='border border-gray-400 my-3'>
      </div>

      <div>
        <div>
          <div onClick={() => openDiscoverMenu()}>
            <div className='flex justify-between items-center'>
              <p>Discover</p>
              < TiArrowSortedDown/>              
            </div>

            {
              openDiscover &&
              <div className='px-3'>
                {
                  discover.map((el,i) => (
                    <div key={i}> <Link href={`${el.link}`}>{el.name}</Link></div>
                  ))
                }
              </div>
            }
          </div>
        </div>

        <div>
          <div className='py-2' onClick={() => openHelpMenu()}>
            <div className='flex justify-between'>
              <p>Help Center</p>
              <TiArrowSortedDown />              
            </div>

          </div>
          {
            openHelp && 
            <div className='px-3'>
              {help.map((el,i) => (
                <p key={i}> <Link href={`${el.link}`}>{el.name}</Link></p>
              ))
              }
            </div>
          }
        </div>
      </div>
      <div className='flex justify-between my-3'>
        {/* <button onClick={() => goToCreate()} className='bg-pink-500 rounded px-2 py-2 text-white text-sm hover:bg-pink-600'>Create</button> */}
        <Link href='/create'>
          <button className='bg-pink-500 rounded px-2 py-2 text-white text-sm hover:bg-pink-600'>Create</button>
        </Link>
        
        <button className='bg-pink-500 rounded px-2 py-2 text-white text-sm hover:bg-pink-600'>Connect Wallet</button>
        
        
      </div>
    </div>
  )
}

export default SideBar