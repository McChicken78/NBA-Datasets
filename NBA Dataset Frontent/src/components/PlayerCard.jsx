import './PlayerCard.css';

function PlayerCard({ player }) {
    return(
        <div className="player-card">
            <div className="player-name">
                <h1>{player.name}</h1>
            </div>
            <div className="player-image">
                <img src={player.image} alt={player.name} />
                <div className='image-line'></div>
            </div>
            <div className="player-game-stats">

                {/* // However I get the stats section will be here  */}
                Stats will go here


            </div>
            <div className='player-stat-btns'>
                <button className="btn pts-btn">PTS</button>
                <button className="btn ast-btn">AST</button>
                <button className="btn reb-btn">REB</button>
            </div>
        </div>

    )
}

export default PlayerCard;