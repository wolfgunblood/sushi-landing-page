// import "./"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import PopularFoods from './components/popular-foods/popular-foods';
import TrendingFoods from './components/TrendingFoods/TrendingFoods';
import SubscriptionBox from './components/SubscriptionBox/SubscriptionBox';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <PopularFoods />
      <TrendingFoods />
      <SubscriptionBox />
      <Footer />
    </div>
  )
}

export default App