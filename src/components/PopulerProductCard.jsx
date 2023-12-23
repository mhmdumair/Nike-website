import { star } from "../assets/icons"

const PopulerProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className="flex- flex-col flex-1 w-full max-sm:w-full border py-3 px-3 rounded-2xl shadow-2xl">
        <img src={imgURL} 
            alt={name} 
            className="w-[260px] h-[260px]"/>

        <div className="mt-5 flex justify-start gap-2.5">
            <img src={star} 
                width={24} height={24}/>
            <span className="text-slate-gray font-montserrat text-xl leading-normal">({rating})</span>
        </div>

        <h3 className="mt-1 font-semibold leading-normal font-palanquin text-2xl">
          {name}</h3>
        <p className="mt-1 font-semibold font-montserrat text-coral-red text-xl leading-normal">
          {price}</p>

    </div>
  )
}

export default PopulerProductCard