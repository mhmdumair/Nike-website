import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import {statistics,shoes, navLinks} from "../constans"
import {bigShoe1} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = ({menu,setMenu}) => {

  const [bigShoeImage,setBigShoeImage] = useState(bigShoe1)

  return (
    <section id="hero" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">

      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28 ">

        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="text-8xl	mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span> <br />
          <span className="text-coral-red inline-block mt-3">
            Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-12 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life
        </p>

        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
            {statistics.map(stat=>(
              <div key={stat.label}>
                <p className="text-4xl font-bold font-palanquin">
                  {stat.value}</p>
                <p className="font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
        </div>

      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary">
        <img src={bigShoeImage} 
          alt="Shoe collection " 
          width={550} height={500} className="object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {shoes.map(shoe=>(
            <div key={shoe.thumbnail}>
                <ShoeCard 
                  imageURL={shoe}
                  setBigShoeImage={setBigShoeImage}
                  bigShoeImage={bigShoeImage}/>
            </div>
          ))}
        </div>
      </div>

      {menu && (
        <ul id="mobile" className=" bg-coral-red shadow-3xl absolute top-[30px] right-4  flex flex-col justify-center items-center py-10 z-20 cursor-pointer  border-4 gap-3 border-coral-red">
        <span className="absolute top-0 right-6 text-white text-4xl z-30"
        onClick={()=>{setMenu(false)}}>
        &times;</span>
        {navLinks.map(link=>(
          <li key={link.label} className=" text-2xl text-white hover:underline w-full text-center px-14 py-2 mt-2">
            <a href={link.href}
          onClick={()=>{setMenu(false)}}>
            {link.label}
          </a>
          </li>
        ))}
    </ul>

      )}
    </section>
  )
}

export default Hero