import './App.css';


// COMPONENTS
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Nav />
      <div className='center-content'>
        <FrontPage />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
