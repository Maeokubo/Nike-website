{/*
//Pass some additinal props to it
const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    //dynamic className then appy thoese color the regular one
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
     ${ backgroundColor 
     ? `${backgroundColor} ${textColor} ${borderColor}`
     : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && w-full}`} >
      {label}

      {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Button
*/}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth // New prop
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}
      rounded-full ${fullWidth ? 'w-full' : ''}`} > {/* Fix: Ensure 'w-full' is a string */}
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

Button.defaultProps = { // Provide default values for props
  backgroundColor: null,
  textColor: null,
  borderColor: null,
  fullWidth: false // Default value for fullWidth
};

export default Button;
