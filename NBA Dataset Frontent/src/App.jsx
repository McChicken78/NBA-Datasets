import './App.css'
import { useEffect, useState } from 'react'
import PlayerCard from './components/PlayerCard.jsx'
import StephCurry from './assets/StephCurryAnimated.png'
import Placeholder from './assets/Placeholder.png'
import playerStats from '../../data/player_stats.json';

// async: The function can pause and resume
async function fetchJSONdata(){
  try{

    // Checks for network errors: True = 200->299 | False = 404->500
    //throw sends error to catch block
    // fethc gets the file from memory location, parse(response.json()) converts the json into usable objects for javascript
    const response = await fetch('http://localhost:5000/data', {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerStats)
    })
    if (!response.ok) { throw new Error("Error fetching data: " + response.status)}

    const data = await response.json()
    console.log(data)

    return data
  }
  catch (error){
    console.error()
  }
}


// Components 
function App() {

  const[players, setPlayers] = useState([])
  const[dataIsLoaded, setDataIsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setPlayers(json)
        setDataIsLoaded(true)
      })
  }, [])

  console.log(players)

  
  if (!dataIsLoaded) {
    return <PlayerCard player ={{ name: "Anonymous", image: Placeholder }} />
  }

  return (
    <>
      <PlayerCard player ={{ name: "Steph Curry", image: StephCurry }} />
      <div>
        <h2>Player Data loaded</h2>
      </div>
    </>
  )
}

export default App
