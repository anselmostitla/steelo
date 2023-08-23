import { MdOutlineAccountCircle} from 'react-icons/md'



const Notification = () => {
  return(
    <div className='absolute border rounded-lg shadow-2xl bg-gray-100 px-5 py-3 mt-6 space-y-2 w-72 z-20'>
      <p className='py-7'>Notification</p>
      <div className='flex items-center space-x-3'>
        <div>
          <MdOutlineAccountCircle className='w-14 h-14'/>
        </div>
        <div>
          <h4>Steve Jobs</h4>
          <p className='space-x-0.5'>Think different and break status quo...</p>
          <small>3 minutes agp</small>
        </div>
        <span></span>
      </div>
    </div>
  )
}

export default Notification