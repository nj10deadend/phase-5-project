import { useHistory, Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
// import {useState} from 'react';
import Game from "./Game";

function CharacterList () {


    const getFetchAllCharacters = () => {
        fetch('/characters')
    }
    return (
        <div>
            <h2>Create a new Character</h2>
            

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