import { useHistory, Link } from 'react-router-dom'
// import {useState} from 'react';
import Game from "./Game";

function CharacterList () {


    // const getFetchAllRoles = () => {
    //     fetch('/roles')
    // }
    return (
        <div>
            

            <button><Link to="/game">Play</Link></button>
            <Switch>
                <Route path="/game">
                <Game />
                </Route>
            </Switch>

        </div>
    )
}

export default CharacterList;