import Navbar from './Components/Navbar'
import { Hero, Features, Footer, Review } from "./Sections/index"

const App = () => {
  return (
    <main className='relative bg-gradient-to-br from-black via-black to-indigo-950 text-white'>
      <Navbar />
      <section className='px-20 py-24 max-sm:px-10'>
        <Hero />
      </section>
      <section className='px-20 py-24 max-md:px-10'>
        <Features />
      </section>
      <section className='px-20 py-24 max-md:px-10'>
        <Review />
      </section>
        <Footer />
    </main>
  )
}

export default App;