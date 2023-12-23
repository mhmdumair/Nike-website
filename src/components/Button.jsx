
const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center 
    ${backgroundColor? backgroundColor:"bg-coral-red "}
    rounded-full
    ${textColor?textColor:"text-white"}
    ${borderColor?backgroundColor:"border-coral-red"} 
    ${fullWidth && "w-full"}
    px-7 py-3 gap-2 border font-montserrat text-lg leading-none shadow-2xl active:scale-105 `}>
        {label}
        
        {iconURL && (
          <img src={iconURL} alt="arrow right icon" 
          className="ml-2 rounded-full w-5 h-5"/>
        )}

    </button>
  )
}

export default Button