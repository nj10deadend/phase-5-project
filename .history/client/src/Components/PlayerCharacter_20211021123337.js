function PlayerCharacter() {
    return (
        <div>

            <h3>
            {eachCharacter.name}
            </h3>
            <p>LVL: {eachCharacter.lvl}</p>
            <p>EXP: {eachCharacter.current_exp}</p>
            <p>CLASS: {eachCharacter.role_data.name}</p>
            {/* <p>LAST LEVEL: {eachCharacter.scripts}</p> */}
            <button onClick={goToGame}><Link to="/game">Play</Link></button>
            {/* <button onClick={()=> {findSpecificCharacter(eachCharacter)}}>Play</button> */}

        </div>
    )
}

export default PlayerCharacter;