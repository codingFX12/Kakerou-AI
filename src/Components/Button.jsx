const Button = ({label, bgColor, textColor}) => {
  return (
    <button className={`w-24 h-10 rounded-xl hover:scale-110 hover:ease-out hover:duration-200 transition shadow-md ${bgColor ? bgColor : 'bg-transparent border'} ${textColor ? textColor : 'text-white'}`}>
        {label}
    </button>
  )
}

export default Button