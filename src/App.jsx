// import "./"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import PopularFoods from './components/popular-foods/popular-foods';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <PopularFoods />
    </div>
  )
}

export default App