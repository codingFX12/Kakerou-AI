import Button from '../Components/Button'
import {benefits} from '../constants/index'

const Features = () => {
  return (
    <div className="w-full z-10 max-w-[1440px] max-lg:mt-64">
        <div className="flex flex-col items-center">
            <h1 className="text-6xl text-center leading-tight font-light max-md:text-5xl max-md:leading-snug">Chat Smarter, Not Harder <br />With Kakerou</h1>
            <div className='grid grid-cols-2 gap-6 max-lg:grid-cols-1 mt-16 relative'>
                {benefits.map((item) => (
                  <div id={item.id} className='w-full bg-gray-950 shadow-xl rounded-2xl'>
                      <img src={item.imageUrl} alt="" className='absolute opacity-5 hover:opacity-15 w-[35%] h-[25%]'/>
                      <div className='flex flex-col px-16 py-9 max-md:px-12'>
                        <h1 className='text-3xl font-semibold capitalize'>{item.title}</h1>
                        <p className='text-lg text-gray-400 mt-5 mb-12'>{item.text}</p>
                        <div className='flex '>
                          <img src={item.iconUrl} alt="" />
                          <button className='pl-5 hover:scale-110'>Read More</button>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features