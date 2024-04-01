const Hero = () => {
  return (
    <div className="h-[100vh] w-full text-white pt-16">
      {/* <h1 className="text-3xl">HERO</h1> */}
      <div className="flex flex-col items-center justify-between gap-24">
        <div>
          <h1>WOW</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas iste obcaecati?</p>
          <button>yes</button>
        </div>
        <img src="src\assets\Images\Hero.png" alt="robot" width={720} height={80} className="object-contain rounded-full border-red-950 border-2 p-2"/>
      </div>
    </div>
  )
}

export default Hero