import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Personaje from './Personaje';

function ConsultaBB() {
  const [nombre, setNombre] = useState('')
  const [personajes, setPersonajes] = useState([])

  const consulta = async () => {
    const data = await axios.get('https://breakingbadapi.com/api/characters')
    setPersonajes(data.data)
  }
  return (
    <>
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
    </>
  );
}

export default ConsultaBB;
