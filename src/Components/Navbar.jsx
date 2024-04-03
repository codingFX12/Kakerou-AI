import { useState } from 'react';
import { hamburger } from '../assets/Icons'
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function Toggle(){
    setIsOpen(!isOpen);
  }

  return (
    <section className="px-8 sm:px-20 py-8 z-10 w-full absolute bg-black text-white">
      <nav className='flex justify-between max-w-[1440px] items-center gap-12'>
        <h1 className='font-[arial] font-bold text-5xl'>
          <a href="#">KaKerou<span className='text-[0.5rem] border-2 border-white p-1 opacity-70 rounded-full'>AI</span></a>
        </h1>
        
        <ul className="flex max-lg:hidden justify-center items-center text-lg gap-24 font-[arial]">
          <li><a href="#" className='hover:border-b-2 py-3 hover:duration-100'>About Us</a></li>
          <li><a href="#" className='hover:border-b-2 py-3 hover:duration-100'>Features</a></li>
          <li><a href="#" className='hover:border-b-2 py-3 hover:duration-100'>Reviews</a></li>
        </ul>
        <div className="flex max-lg:hidden gap-6 items-center justify-center text-lg font-[arial]">
          <Button label={'Login'}/>
          <Button label={'Sign Up'} bgColor={'bg-gray-100'} textColor={'text-black'}/>
        </div>

        {/* hamburger */}
        <button className="bg-white lg:hidden text-black text-xl p-4 rounded-2xl hover:bg-gray-200 shadow-xl z-20" onClick={Toggle}>
          <div className='absolute top-7 right-16 bg-black p-2 z-10 rounded-md'></div>
          <img src={hamburger} alt="hamburger" width={15} height={15}/>
        </button>
      </nav>

      {/* hamburger section when it's click */}
      <div className={`h-[100vh] z-20 mt-10 lg:hidden ${isOpen ? 'block' : 'hidden'} `}>
        <ul className='flex flex-col text-center justify-center items-center gap-16 py-12 text-2xl'>
          <li className='border-b-2 py-3 hover:opacity-60'><a href="#">About Us</a></li>
          <li className='border-b-2 py-3 hover:opacity-60'><a href="#">Reviews</a></li>
          <li className='border-b-2 py-3 hover:opacity-60'><a href="#">Contacts</a></li>
          <li className='border-b-2 py-3 hover:opacity-60'><a href="#">Sign Up</a></li>
          <li className='border-b-2 py-3 hover:opacity-60'><a href="#">Login</a></li>
        </ul>
        <div className='top-48 left-16 absolute p-2 bg-gradient-to-r from-green-500 to-indigo-500 rounded-full'></div>
        <div className='top-96 left-36 absolute p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
        <div className='top-96 right-36 absolute p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
        <div className='bottom-48 right-16 absolute p-2 bg-green-300 rounded-full'></div>
        <div className='bottom-24 left-16 absolute p-2 bg-white rounded-full'></div>
      </div>
    </section>
  )
}

export default Navbar;