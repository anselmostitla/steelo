import Image from 'next/image'
// import img from '../../assets/nft1.png'
// import img from '../../img'



const Hero = () => {
  return(
    <div className=" bg-gradient-to-b from-green-500 to-white">
      <div className="flex ">
        <div className="flex flex-col my-20 py-20 mx-20">
          <h1 className="text-7xl font-bold">Buy and Sell <br /> Digital Arts,  <br /> 
          <span className="text-gray-700 font-extrabold"> NFTs </span> Collections
          </h1>
          <p className="text-gray-500 font-semibold text-xl mt-3">Mint and collect the hottest NFTs around.</p>
          <button className="bg-pink-500 rounded-md text-white px-5 py-3 hover:bg-pink-600 my-5">Connect Wallet</button>
        </div>

        <div className='flex items-center mx-auto'>
          {/* <Image src={img} alt="nft-commerce" width={700} height={700} className=''/>    */}
        </div>
      </div>
    </div>
  )
}

export default Hero