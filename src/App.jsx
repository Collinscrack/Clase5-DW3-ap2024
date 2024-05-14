import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import './App.css'
import Cabecera from './Cabecera'
import Entrada from './Entrada'
import { useEffect, useState } from 'react'


function App() {  

  const url = "https://jsonplaceholder.typicode.com/todos"

  const [data, setData] = useState([]);
  
  const [loading ,setloading] = useState(true);

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setloading(false)
    })
  },[])

  console.log(data);
  console.log(data[0]);
  return (
    <>
      {
      loading ? <h1> cargando </h1> : (
        data.map(item => (
          <div key= {item.id}>
            <h2>{item.title}</h2>
          </div>
        )
      )
      )
      }
      <div className='card text-white bg-dark mb-3 '>
        <div className='card-body'>
          <div id='cabecera'>
            <Cabecera></Cabecera>
          </div>
        
          <div className='items container'>
            <Entrada></Entrada>
          <hr />
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
