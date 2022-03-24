import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Personaje from './components/Personaje';

function App() {
  const [nombre, setNombre] = useState('')
  const [personajes, setPersonajes] = useState([])

  const consulta = async () => {
    const data = await axios.get('https://breakingbadapi.com/api/characters')
    setPersonajes(data.data)
  }
  return (
    <div className="App">

      {/* //navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* //navbar */}

      <div>
        <form>

          <div>
            <label htmlFor='name'>Nombre</label>
            <input
              id='name'
              type="text"
              name=""
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='bb'>Click para ver los personajes de Breaking Bad</label>
            <input type="button" name="bb" onClick={consulta} />
          </div>
          <div>
            {personajes.map(personaje => <Personaje
              key={personaje.char_id}
              personaje={personaje}
            />)}
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
