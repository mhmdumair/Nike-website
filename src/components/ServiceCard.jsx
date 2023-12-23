
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] max-sm:w-[350px] rounded-[20px] w-full px-10 py-10 shadow-3xl">

        <div className="w-11 h-11 bg-coral-red flex justify-center items-center rounded-full">
            <img src={imgURL} alt={label} 
            width={24} height={24}/>
        </div>

        <h2 className="mt-5 text-3xl font-palanquin leading-normal font-bold">
            {label}</h2>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {subtext}</p>
        
    </div>
  )
}

export default ServiceCard