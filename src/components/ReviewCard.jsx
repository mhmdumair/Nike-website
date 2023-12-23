import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt= {customerName}
        className="rounded-full object-cover w-[100px] h-[100px]" />

        <p className="text-center mt-6 max-w-sm text-slate-gray font-montserrat">
            {feedback}</p>

        <div className="flex gap-2 text-slate-gray mt-4 font-montserrat">
            <img src={star} alt="star" 
            height={20} width={20}
            className="object-contain"/>
            <p>({rating})</p>
        </div>

        <h2 className="font-palanquin font-bold mt-5 text-xl">
            {customerName}</h2>

    </div>
  )
}

export default ReviewCard