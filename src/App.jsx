import './App.css';


// COMPONENTS
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Nav />
      <div className='center-content'>
        <FrontPage />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Technologies />
        <Contact />
      </div>
    </>
  )
}

export default App
