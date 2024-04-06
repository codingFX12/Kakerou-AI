import Button from "../Components/Button"

const Hero = () => {
  return (
    <div className="max-w-[1440px] w-full text-white mt-6 max-sm:mt-3">
      <div className="flex max-lg:flex-col items-start max-lg:items-center justify-between gap-12">
        <div className="flex flex-col items-start max-lg:items-center mt-8">
          <p className="text-sm bg-gray-800 py-2 px-5 rounded-md text-gray-400"> <span className="pr-1 text-indigo-400">X </span> <span className="text-white">30% </span> Discount For <span className="text-white">First time</span> Purchase</p>
          <h1 className="text-7xl font-sans font-bold shadow-lg max-lg:text-6xl max-lg:text-center max-sm:mt-4 leading-[1.1] max-sm:leading-snug mt-3">DISCOVER <br />OUR<span className="text-blue-400"> Monster</span> AI</h1>
          <p className="md:w-[80%] text-sm opacity-70
           max-lg:text-center mt-7 mb-9 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias dolorum consequatur eos dolor quos, iusto accusantium praesentium impedit! Amet, recusandae dolor repellat incidunt sit quam nostrum quae quos odit!</p>
          <Button label={"Get Started"} width={"w-[7rem]"}/>
        </div>
        <img src="src\assets\Images\ai.png" alt="robot" width={560} height={80} className="object-contain items-center"/>
      </div>

      <div className="flex justify-between mt-12 max-lg:flex-wrap max-lg:gap-12">
        <img src="src\assets\Images\yourLogo.svg" alt="" />
        <img src="src\assets\Images\yourLogo.svg" alt="" />
        <img src="src\assets\Images\yourLogo.svg" alt="" />
        <img src="src\assets\Images\yourLogo.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero