import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/')
      .then(res => {
        setCars(res.data);
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      {cars.map(car => {
        return (<div>
          <p>{car.model}</p>
          <p>{car.make}</p>
          <p>{car.mileage}</p>

        </div>)
      })}
    </div>
  );
}

export default App;
