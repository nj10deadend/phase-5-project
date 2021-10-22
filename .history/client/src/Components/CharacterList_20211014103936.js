import Game from "./Game";

function CharacterList () {
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