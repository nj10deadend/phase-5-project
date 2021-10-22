function PlayerCharacter({eachCharacter, setCharFunc}) {
    function clickHandler (event) {
        // setRoleChosen(true)
        // console.log(event)
        setCharFunc(eachCharacter)
        // setClassChoice(event.target)

    }
    
    return (
        <div>

            <h3>
            {eachCharacter.name}
            </h3>
            <p>LVL: {eachCharacter.lvl}</p>
            <p>CLASS: {eachCharacter.role_data.name}</p>
            <p></p>
            <p>EXP: {eachCharacter.current_exp}</p>
            {/* <p>LAST LEVEL: {eachCharacter.script_data}</p> */}
            <button onClick={clickHandler}>Play</button>
            {/* <button onClick={goToGame}><Link to="/game">Play</Link></button> */}
            {/* <button onClick={()=> {findSpecificCharacter(eachCharacter)}}>Play</button> */}

        </div>
    )
}

export default PlayerCharacter;