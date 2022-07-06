// import './sass/app.scss';
import "./sass/app.scss";
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Divisor from './components/Divisor';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Nav />
      <Inicio />

      <div className='start'>
        {/* Seccion Sobre Mi */}
        <div className='mb-4'>
          <Divisor porcentaje="0" />
          <div className='contenedor apartado'>
            <h2>About Me</h2>
          </div>
        </div>

        {/* Seccion Habilidades */}
        <div className='mb-4'>
          <Divisor porcentaje="25" />
          <div className='contenedor apartado'>
            <h2>Skills</h2>
          </div>
        </div>

        {/* Seccion Proyectos */}
        <div className='mb-4'>
          <Divisor porcentaje="75" />
          <div className='contenedor apartado'>
            <h2>Projects</h2>
          </div>
        </div>

        {/* Seccion Contacto */}
        <div className='mb-4'> 
          <Divisor porcentaje="100" />
          <div className='contenedor apartado'>
            <h2>Contact Me</h2>
            <Contacto />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
