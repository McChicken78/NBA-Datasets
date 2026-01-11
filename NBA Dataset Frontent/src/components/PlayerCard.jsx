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
            </div>
        </div>
    )
}