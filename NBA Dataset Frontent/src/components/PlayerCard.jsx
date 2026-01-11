function PlayerCard({ player }) {
    return(
        <div className="player-card">
            <div className="player-name">
                <h1>{player.name}</h1>
            </div>
            <div className="player-image">
                <img src={player.image} alt={player.name} />
            </div>
            <div className="player-stats">

                {/* // However I get the stats section will be here  */}

                <button className="pts-btn">PTS</button>
                <button className="ast-btn">AST</button>
                <button className="reb-btn">REB</button>
            </div>
        </div>
    )
}

export default PlayerCard;