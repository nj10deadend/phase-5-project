import { useHistory, Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
// import {useState} from 'react';
import Game from "./Game";

function CharacterList () {


    const [allCharacters, setAllCharacters] = useState([])


    function getFetchAllCharacters () {

        fetch('/characters')
        .then((response) => response.json())
        .then((fetchedCharacters) => {
            // console.log(fetchedScripts)
            setAllCharacters(fetchedCharacters)
        })
    }
    
    useEffect(getFetchAllCharacters, [])

    // function mappedCharacters () {
    //     return (
    //         console.log(allCharacters)
    //         allCharacters.map(eachCharacter => {
    //         console.log(eachCharacter.name)
    //         return (
    //         <h3>
    //             {eachCharacter.name}
    //         </h3>
    //         )
    //     })
    //     )

        
        

    // }
    function mappedCharacters () {
        console.log(allCharacters)
        allCharacters.map(eachCharacter => {
            console.log(eachCharacter.name)
            return (
            <h3>
                {eachCharacter.name}
            </h3>
            )
        })

    }

    // const mappedCharacters = () => {
    //     return (
    //     allCharacters.map(eachCharacter => {
    //         console.log(eachCharacter.name)
    //         return (
    //         <h3>
    //             {eachCharacter.name}
    //         </h3>
    //         )
    //     }))
    // }



    return (
        <div>
            <h2>Create a new Character</h2>

            {mappedCharacters()}
            

            <button><Link to="/game">Play</Link></button>
            <Switch>
                <Route exact path="/game">
                    <Game />
                </Route>
            </Switch>

        </div>
    )
}

export default CharacterList;