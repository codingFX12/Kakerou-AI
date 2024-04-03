import Navbar from './Components/Navbar'
import { Hero, Features } from "./Sections/index"

const App = () => {
  return (
    <main className='relative bg-gradient-to-br from-black via-black to-indigo-950 text-white'>
      <Navbar />
      <section className='px-20 py-24 max-sm:px-16'>
        <Hero />
      </section>
      <section className='px-20 py-24'>
        <Features />
      </section>
    </main>
  )
}

export default App;