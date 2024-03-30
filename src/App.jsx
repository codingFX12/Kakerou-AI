import Navbar from './Components/Navbar'
import Hero from './Sections/Hero';

const App = () => {
  return (
    <main className='relative bg-black'>
      <Navbar />
      <section>
        <Hero />
      </section>
    </main>
  )
}

export default App;