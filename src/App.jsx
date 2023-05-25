// import "./"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App