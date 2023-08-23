import React, { useEffect, useState } from 'react';
import statistics from '../constants/statistics.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image';


const Recent = () => {

  const [arrow, setArrow] = useState(false);
  const [posicion, setPosicion] = useState(0);
  const [numElements, setNumElements] = useState(4);
  const [filtered, setFiltered] = useState(statistics.filter(el => el.spotlight == true));
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    getSlice(true)
  },[])


  const getSlice = (left) => {
    let k = posicion
    if(left == true){
      if(k - numElements >= 0) k = k - numElements
      else k = 0
    } else{
      if((k + numElements)*2 < filtered.length) k = k + numElements
      else k = filtered.length - numElements
    }
    setPosicion(k)
    const reversed = filtered?.reverse()
    const slice = reversed?.slice(k,k+numElements)
    setSlice(slice)
  }

  return (
    <div className='w-[80%] mx-auto my-20 ' onMouseOver={() => setArrow(true)} onMouseLeave={() => setArrow(false)}>
      <div className='text-5xl font-bold text-gray-700 flex justify-start'>
        Recent
      </div>

      <div className='flex items-center'>
        <div onClick={() => getSlice(true)} className={`z-20 p-2 -mr-5 rounded-full border bg-slate-100 ${arrow? 'flex': 'invisible'}`}>
          <MdKeyboardArrowLeft className='w-10 h-10'/>
        </div>

        <div className='flex space-x-5 my-10 z-10'>
          {slice?.map((el,i) => (
            <div className='flex' key={i}>
              <div className='w-60 h-72 border rounded-2xl overflow-hidden'>
                <div className='h-36 overflow-hidden'>
                  <Image src={el.url} width={300} height={300} alt='capsule'/>
                </div>
                <div className='p-3 flex flex-col h-36 justify-between'>
                  <div>{el.name}</div>
                  <div className='flex justify-between'>
                    <div>
                      <div>Floor</div>
                      <div className='flex'>{el.floorPrice}<span className='pl-1'> ETH</span></div>                      
                    </div>
                    <div>
                      <div>Total Volume</div>
                      <div className='text-right'>{el.volume}<span className='pl-1'> ETH</span></div>
                    </div>

                  </div>
                  
                </div>
                
                
              </div>
            </div>
          ))}
        </div>   

        <div onClick={() => getSlice(false)} className={`z-20 p-2 -ml-5 rounded-full border bg-slate-100 ${arrow? 'flex': 'invisible'}`}>
          <MdKeyboardArrowRight className='w-10 h-10'/>
        </div>     
      </div>


    </div>
  );
}

export default Recent;