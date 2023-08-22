import { useEffect, useState } from "react";
import statistics from '../constants/statistics.json'
import Image from "next/image";





const Top = () => {
  const [top, setTop] = useState(true);
  const [trending, setTrending] = useState(false);


  const order = (variable) => {
    statistics.sort((a,b) => a[variable] - b[variable])
    return statistics.reverse()
  }

  const setFeatures = (feature) => {
    setTop(false) 
    setTrending(false)
    if(feature == "top") setTop(true)
    else if(feature == "trending") setTrending(true) 
  }


  return (
    <div className="my-10 w-[80%] mx-auto ">
      <div className="flex flex-none justify-start my-10">
        <div className="bg-gray-200 p-1 rounded-xl">
          <button className={`${top? 'bg-white ' : 'border '} rounded-2xl w-40 py-3 `} onClick={() => setFeatures("top")}>Top</button>
          <button className={`${trending ? 'bg-white' : 'border ' } rounded-2xl w-40 py-3 `} onClick={() => setFeatures("trending")}>Trending</button> 
        </div>
      </div>      
      
      <div className="">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500">
              <th>NUM</th>
              <th>COLLECTION</th>
              <th> <div className="flex justify-end">FLOOR PRICE</div> </th>
              <th> <div className="flex justify-end">FLOOR CHANGE</div> </th>
              <th> <div className="flex justify-end">VOLUME</div></th>
              <th> <div className="flex justify-end">VOLUME CHANGE</div> </th>
              <th> <div className="flex justify-end">ITEMS</div> </th>
              <th> <div className="flex justify-end">OWNERS</div> </th>
            </tr>
          </thead>
          <tbody>
            {order(top? "volume": "volumeChange").map((el,i) => (
               i<10 &&
                <tr key={i}>
                  <th>{i+1}</th>
                  <th className="flex items-center space-x-5"><Image src={el.url} width={50} height={50} alt={el.name}/> <div> {el.name} </div> </th>
                  <th> <div className="flex justify-end"> <span>{el.floorPrice}</span> <span className="pl-1">ETH</span> </div></th>
                  <th> <div className="flex justify-end"> <span>{el.floorChange}</span> <span className="pl-1 pr-5">%</span> </div></th>
                  {/* <th>{el.floorChange} <span className="pl-1">%</span> </th> */}
                  <th> <div className="flex justify-end"> <span>{el.volume}</span> <span className="pl-1">ETH</span> </div></th>
                  {/* <th>{el.volume} <span className="pl-1">ETH</span> </th> */}
                  <th> <div className="flex justify-end"> <span>{el.volumeChange}</span> <span className="pl-1">%</span> </div></th>
                  {/* <th>{el.volumeChange}</th> */}
                  <th> <div className="flex justify-end"> <span>{el.items}</span> <span className="pl-1">K</span> </div></th>
                  {/* <th>{el.items}</th> */}
                  <th> <div className="flex justify-end"> <span>{el.owners}</span> <span className="pl-1">K</span> </div></th>
                  {/* <th>{el.owners}</th> */}
                </tr>                  
            )) }
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Top;
