import Game from "./Game";

function CharacterList () {
    return (
        <div>
            <Switch>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>

        </div>
    )
}

export default CharacterList;