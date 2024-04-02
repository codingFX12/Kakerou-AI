const Button = ({label, bgColor, textColor, width, height}) => {
  return (
    <button className={`${width ? width : 'w-24'} ${height ? height :'h-10'} rounded-xl hover:scale-110 hover:ease-out hover:duration-200 transition shadow-md ${bgColor ? bgColor : 'bg-transparent border'} ${textColor ? textColor : 'text-white'} font-medium`}>
        {label}
    </button>
  )
}

export default Button