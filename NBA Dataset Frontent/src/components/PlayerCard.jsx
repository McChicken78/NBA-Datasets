import './PlayerCard.css';
import { useState } from 'react';


function PlayerCard({ player, img }) {

    const [stat, setStat] = useState("PTS")
    console.log(player?.PTS)

    if(!player){return <div>Loading... 1</div>}
    if(!player.Games){return <div>Loading...</div>}

    const data = player.Games.map(game => game[stat])
    // Get the nearest 5th for max value and to graph height
    const max = Math.ceil(Math.max(...data) / 5) * 5;
    const average = data.reduce((a, b) => a + b, 0) / data.length
    const averagePct = (average / max) * 100 

    return(
        <div className="player-card">
            <div className="player-name">
                <h1>{player.Player_Name}</h1>
            </div>
            <div className="player-image">
                <img src={img} alt={player.name} />
                <div className='image-line'></div>
            </div>

            <div className='box'>
                <div className='graph' id='graph'></div>
            </div>
            

            {/* Added a key to the chart ul to trigger the animation when new stat is chosen */}
            <div className="graph-container">
                <ul key = {stat} className="chart" style={{ "--avg": `${averagePct}%` }}>
                    <div className='graph-line'></div>
                    <div className='avg-line'>
                        <div className='avg-label'>Avg: {Math.round(average)}</div>
                    </div>     

                    {data.map((value, index) => {
                    const percent = (value / max) * 100
                    console.log(averagePct * max / 100)
                    const barShort = percent < 10

                    return (
                        <li key={index}>
                        <span
                            className = {`bar ${value >= average ? 'above-avg' : 'below-avg'} ${barShort ? 'bar-short' : ''}`}
                            style={{ height: `${percent}%` }}
                            title={value}
                        />
                        <div className="bar-label">vs LAL</div>
                        </li>
                    )
                    })}
                </ul>
            </div>


            <div className='player-stat-btns'>
                <button onClick = {() => setStat("PTS")} className={`btn pts-btn ${stat === "PTS" ? "active" : ""}`}>PTS</button>
                <button onClick = {() => setStat("AST")} className={`btn ast-btn ${stat === "AST" ? "active" : ""}`}>AST</button>
                <button onClick = {() => setStat("TRB")} className={`btn reb-btn ${stat === "TRB" ? "active" : ""}`}>REB</button>
            </div>
        </div>
    )
}

export default PlayerCard;