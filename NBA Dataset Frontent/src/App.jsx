import './App.css'
import PlayerCard from './components/PlayerCard.jsx'
import StephCurry from './assets/StephCurryAnimated.png'
import Placeholder from './assets/Placeholder.png'

// Components 
function App() {
  return (
    <>
          <PlayerCard player ={{ name: "Steph Curry", image: StephCurry }} />
          <PlayerCard player ={{ name: "Anonymous", image: Placeholder }} />
    </>
  )
}

export default App
