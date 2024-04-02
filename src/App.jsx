import Navbar from './Components/Navbar'
import Hero from './Sections/Hero';

const App = () => {
  return (
    <main className='relative bg-gradient-to-br from-black via-black to-indigo-950'>
      <Navbar />
      <section className='px-20 py-24'>
        <Hero />
      </section>
    </main>
  )
}

export default App;