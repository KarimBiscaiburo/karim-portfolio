import './App.css';


// COMPONENTS
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';

function App() {

  return (
    <>
      <Nav />
      <div className='center-content'>
        <FrontPage />
      </div>
    </>
  )
}

export default App
