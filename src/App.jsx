import './App.css';


// COMPONENTS
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import About from './components/About';

function App() {

  return (
    <>
      <Nav />
      <div className='center-content'>
        <FrontPage />
        <About />
      </div>
    </>
  )
}

export default App
