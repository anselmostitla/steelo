import Image from 'next/image';
import React, { useState } from 'react';
import Hero3Obj from '../../constants/Hero3Obj.json'

const Hero3 = () => {

  const [edge, setEdge] = useState(false);
  const [images, setImages] = useState(Hero3Obj);

  const doEdge = (numEl) => {
    const array = [...images]
    array[numEl].border = true
    setImages(array)
  }
  const unDoEdge = (numEl) => {
    const array = [...images]
    array[numEl].border = false
    setImages(array)
  }
  
  return (
    <div className='mx-5 my-10 h-92 flex justify-between flex-nowrap space-x-5 '>
      {/* <div className='text-5xl font-bold py-10'>
        Recent Collections
      </div> */}

      <div className={`w-1/3 h-92 my-1 ${images[0].border? 'border-yellow-600 border-4': 'border'} z-10`} onMouseOver={() => doEdge(0)} onMouseLeave={() => unDoEdge(0)}>
        <div className='w-full h-2/3 flex items-center overflow-hidden'>
          <Image src={Hero3Obj[0].url} width={400} height={400} alt={Hero3Obj[0].name}/>
        </div>    

        <div className='flex flex-col justify-between h-1/3 px-5 py-2'>
          <div className='flex'>
            {Hero3Obj[0].name}
          </div>
          <div className='flex justify-between'>
            <div>
              <div>Floor price</div>
              <div>0.56 ETH</div>
            </div>
            <div>
              <div>Total volume</div>
              <div>6.2 ETH</div>
            </div>
          </div>
        </div>    
      </div>

      <div className={`w-1/3 h-92 my-1 ${images[1].border? 'border-yellow-600 border-4': 'border'} z-10`} onMouseOver={() => doEdge(1)} onMouseLeave={() => unDoEdge(1)}>
        <div className='w-full h-2/3 flex items-center overflow-hidden'>
          <Image src={Hero3Obj[1].url} width={400} height={400} alt={Hero3Obj[1].name}/>
        </div>    

        <div className='flex flex-col justify-between h-1/3 px-5 py-2'>
          <div className='flex'>
            {Hero3Obj[1].name}
          </div>
          <div className='flex justify-between'>
            <div>
              <div>Floor price</div>
              <div>0.62 ETH</div>
            </div>
            <div>
              <div>Total volume</div>
              <div>3.7 ETH</div>
            </div>
          </div>
        </div>    
      </div>

      <div className='flex flex-wrap w-1/3 m-1 '>
        {images.map((el,i) => (
          (i>=2 && i<=5) &&
          <div key={i} className={`w-1/2 h-1/2  ${el.border? 'border-yellow-600 border-2': 'border'} z-10`} onMouseOver={() => doEdge(i)} onMouseLeave={() => unDoEdge(i)}>
            <div className='w-full h-2/3 flex items-center overflow-hidden'>
              <Image src={el.url} width={400} height={400} alt={el.name}/>
            </div>    

            <div className='flex flex-col justify-between h-1/3 px-2 py-2'>
              <div className='flex text-sm'>
                {el.name}
              </div>
              <div className='flex justify-between text-xs'>
                <div>
                  <div>Floor price</div>
                  <div>0.62 ETH</div>
                </div>
                <div>
                  <div>Total volume</div>
                  <div>3.7 ETH</div>
                </div>
              </div>
            </div>    
          </div>        
        ))}        
      </div>




    </div>
  );
}

export default Hero3;
