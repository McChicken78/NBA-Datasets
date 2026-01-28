import './App.css'
import { useEffect, useState } from 'react'
import PlayerCard from './components/PlayerCard.jsx'
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

  // ---- For testing without backend ----
  // const player = {
  //   name: "Stephen Curry",
  //   image: StephCurry,
  //   pts: [10, 5, 14, 21, 28],
  //   ast: [3, 6, 8, 2, 12],
  //   reb: [4, 6, 14, 13, 0]
  // }

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setPlayers(json)
        setDataIsLoaded(true)
      })
  }, [])

  players.map(player => console.log(`./assets/${player.Player_Name.replace(/\s+/g, "")}Animated.png`))


  return (
    <>
    <div className='app-header'>
      <div className='header-line'></div>
      <h1>NBA Player Stats Dashboard</h1>
      <p>This app is intended to make finding recent player trends easier. 
        It has been created using a combination of programming languages incluing Python and JupyterNotebook for the backend and React-Vite/Javascript for the frontend.</p>
      <div className='header-line'></div>
    </div>
    <div className='players-grid'>
      {players.map(player => <PlayerCard key={player.Player_Name} player ={ player } img={ `./assets/${player.Player_Name.replace(/\s+/g, "")}Animated.png` } />)}
    </div>
    </>

    
  )
}

export default App
