import Image from "next/image"; 
import { useEffect, useState } from "react";
import Hero2Obj from '../../constants/Hero2Obj.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


const Hero2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      changeElement("right")
    },4000)
  },)

  const changeElement = (letfOrRight) => {
    if(letfOrRight = "left"){
      if(currentImage-1 >= 0 ){
        setCurrentImage(currentImage-1)
      }else setCurrentImage(Hero2Obj.length-1)
    }else if(letfOrRight = "right"){
      if(currentImage+1 < Hero2Obj.length ){
        setCurrentImage(currentImage+1)
      }else setCurrentImage(0)
    }

  }

  return (
    <div>
      <div className="flex flex-col space-y-5">
        {Hero2Obj.map((el,i) => (
          i == currentImage &&
          <div key={i} className="w-full bg-pink-100 h-96 flex justify-between items-center overflow-hidden">
            <div onClick={() => changeElement("left")} className="z-10 text-white">
              <MdKeyboardArrowLeft className="w-20 h-20"/>
            </div>
            <div className="text-7xl font-bold px-32 align-text-top h-48">
              {el.name}
            </div>
            <div className="rotate-12 -mr-10">
              <Image src={el.url} width={600} height={600} alt="a1"/>
            </div>
            <div onClick={() => changeElement("right")} className="z-10">
            < MdKeyboardArrowRight className="w-20 h-20 text-white"/>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
