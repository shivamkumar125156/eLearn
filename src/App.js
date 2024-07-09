import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
function App(){
  return(
    <div className='text-black bg-richblack-800'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <TechStack/>
      <Projects/>
    </div>
  );
}
export default App;
