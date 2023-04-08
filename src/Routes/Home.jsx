import { React, useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCards(data);
        setIsLoading(false);
      })
      .catch(() => console.log("Algo falló"));
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {cards.map(card => {
          return(
            <Card name={card.name} username={card.username} id={card.id} />
          )
        })}
        
      </div>
    </main>
  )
}

export default Home