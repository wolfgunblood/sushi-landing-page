// import "./"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import PopularFoods from './components/popular-foods/popular-foods';
import TrendingFoods from './components/TrendingFoods/TrendingFoods';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <PopularFoods />
      <TrendingFoods />
    </div>
  )
}

export default App