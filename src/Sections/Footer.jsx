const Footer = () => {
  return (
    <div className="border-t-2 border-gray-800 w-full px-20 py-7 max-sm:px-10 bg-black">
      <div className="text-gray-500 flex items-center justify-between">
        <h1>© 2024. All rights reserved.</h1>
        <div className="flex gap-10">
          <img src="src\assets\Images\discord.svg" alt=""  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"/>
          <img src="src\assets\Images\telegram.svg" alt=""  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"/>
          <img src="src\assets\Images\twitter.svg" alt=""  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"/>
        </div>
      </div>
    </div>
  )
}

export default Footer