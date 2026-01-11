import './App.css'
import PlayerCard from './components/PlayerCard.jsx'
import StephCurry from './assets/StephCurryAnimated.png'

// Components 
function App() {
  return (
    <>
          <PlayerCard player ={{ name: "Steph Curry", image: StephCurry }} />
    </>
  )
}


export default App
