
const ShoeCard = ({imageURL,setBigShoeImage,bigShoeImage}) => {

    const handleClick = ()=>{
        if(imageURL.bigShoe !== bigShoeImage){
            setBigShoeImage(imageURL.bigShoe)
        }
    }

    return (
    <div className={`border-2 rounded-xl 
        ${imageURL.bigShoe===bigShoeImage? "border-coral-red":"border-transparent"}  
        cursor-pointer max-sm:flex-1`}
        onClick={()=>{handleClick()}}>

        <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4">
            <img src={imageURL.thumbnail} alt="Shoe Collection" width={127} height={100} className="object-contain " />
        </div>

    </div>
  )
}

export default ShoeCard