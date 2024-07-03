import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      
      <div>
        <NavBar/>
      </div>


      <div id='home' className='mb-90' >
       <Home/>
      </div>

      <div id='about'>
       <About/>
      </div>

      <div id='courses'>
       <Courses/>
      </div>

      <div id='reviews'>
       <Reviews/>
      </div>

      <div id='contact'>
       <Contact/>
      </div>

      <div >
       <Footer/>
      </div>


    </div>
  );
}

export default App;
