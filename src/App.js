import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Tour from './Tour';

function App() {
  const [tours, setTour] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/theNazmulH/api/main/tour.json')
      .then(res => res.json())
      .then(data => setTour(data));

  },[]);
  return (
    <div className="App">
      <h1>Available Tours</h1>
      <div className="tours">
      {
        tours.map(tour => <Tour image={tour.image} name={tour.name} price={tour.price} address={tour.address} description={tour.description }/>)
      }
    </div>
    </div>
  );
}

export default App;
