import { FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa'
import { MdHelpCenter, MdOutlineAccountCircle} from 'react-icons/md'
import { TbDownloadOff, TbDownload } from 'react-icons/tb'
import Link from 'next/link'





const Profile = () => {
  
  return(
    <div className='absolute right-5 border rounded-lg shadow-2xl bg-gray-100 px-5 py-3 mt-6 space-y-2 z-20'>
      <div className='flex items-center space-x-2'>
        <MdOutlineAccountCircle />
        <div className='flex flex-col'>
          <p>Bill Gates</p>
          <small>0xkdjd7395hjdjfh37fj383</small>
        </div>
      </div>
      <div>
        <div>
          <div className='flex items-center space-x-2'>
            <FaUserAlt />
            <p><Link href={`/myprofile`}> My Profile </Link> </p>
          </div>

          <div className='flex items-center space-x-2'>
            <FaRegImage />
            <p><Link href={`/my-items`}> My Items </Link> </p>
          </div>

          <div className='flex items-center space-x-2'>
            <FaUserEdit />
            <p><Link href={`/edit-profile`}> Edit Profile </Link> </p>
          </div>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <MdHelpCenter />
            <p><Link href="/hep"> Help </Link></p>
          </div>

          <div className='flex items-center space-x-2'>
            <TbDownload />
            <p><Link href="/disconnect"> Disconnect </Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile