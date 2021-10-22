import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom'
import CharacterList from './CharacterList';

function Game ({allCharacters, yourCharacter}) {
    console.log(yourCharacter)

    let history = useHistory()

    
    
    const [allScripts, setAllScripts] = useState([])
    const [button, setButton] = useState(false)
    // console.log(allScripts)
    const [currentScript, setCurrentScript] = useState(
      
        {
          "id": 1,
          "choice": "Start",
          "prompt": "The air is cold and your vision hazy. You walk in what appears to be an endless expanse of fog amongst the plains. After what felt like hours you eventually reach the end of the seemingly endless path only to see countless bodies before you. Your family is amongst the many. This must be a dream. If you find a way to wake up it'll all be over and you'll be with them again. You approach a nearby cliff and gaze into the abyss. This must be the way.",
          "img": "https://sciencefictionbulletin.files.wordpress.com/2019/12/expanse-407.jpg?w=1200",
          "img2": "https://static.tvtropes.org/pmwiki/pub/images/89507_1003.jpg",
          "options": [
          {
            "id": 1,
            "choice_value": "Escape the dream"
          },
          {
            "id": 2,
            "choice_value": "Remain in the dream"
          }
          ]
        }
      )
    // const [currentChoice, setCurrentChoice] = useState("Start")
    // const [loading, setLoading] = useState(true)

    function getFetchAllScripts () {

        fetch('/scripts')
        .then((response) => response.json())
        .then((fetchedScripts) => {
            // console.log(fetchedScripts)
            setAllScripts(fetchedScripts)
            
        }).then(console.log("Done", allScripts))
        
    }
    // console.log(allScripts)
    // getFetchAllScripts()
    
    useEffect(getFetchAllScripts, [])

    // console.log(allScripts)

    // useEffect(findCurrentLvl, [])


    function findCurrentLvl (allScripts) {
        // yourCharacter.script_data.id_of_current_script
        let lastLvl = allScripts.find(eachScene => eachScene.id === yourCharacter.script_data.id_of_current_script)
        setCurrentScript(lastLvl)

    }

    function finder(act, allScripts) {
        // console.log(act)
        // console.log(currentScript)
        
        let nextAct = allScripts.find(eachScene => eachScene.choice === act)
        // console.log(nextAct)
        setCurrentScript(nextAct)
        console.log(yourCharacter)
        updateLvl(yourCharacter.script_data.id_for_characters_save_game_patches, nextAct)
    } 
    function act(event) {

        if (!button) {
            // console.log(event.target.textContent)
            finder(event.target.textContent, allScripts)
        }
    }

    // function updateLvl (id) {
    //     fetch(`/character_scripts/${id}`),{
    //     method: 'PATCH',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify()

    //   })
    //     .then(res => {
    //       if(res.ok) {
    //         // console.log(res)
    //       } else {
    //         res.json().then(console.log)
    //       }
    //     })
    //     }
    // }
    const updateLvl = (id, nextLvl) => {
        fetch(`/character_scripts/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({script_id: nextLvl.id})
  
        })
          .then(res => {
            if(res.ok) {
              // console.log(res)
            } else {
              res.json().then(console.log)
            }
          })
  
      }


    /////

    function renderImg() {
        if (currentScript.img === null) {
            return (
                <></>
            )
        } else if(currentScript.img === 0) {
            return (
                <></>
            )
        }
        else return (<img className='img' src={currentScript.img} alt="Current Script" />) 
    }

    function renderImg2() {
        if (currentScript.img2 === null) {
            return (
                <></>
            )
        } else if(currentScript.img2 === 0) {
            return (
                <></>
            )
        }
        else return (<img className='img' src={currentScript.image_url2} alt="Current Script" />) 
    }


    ////////////////////////////////////////////////////////////////
    function renderButton1() {
        if(currentScript.options.length === 0 ) {
            return (
                <></>
            )  
        }
        else if (currentScript.options[0] === null) {
            return (
                <></>
            )
        } else if (currentScript.options[0] === undefined) {
            return (
                <></>
            )
        } else return (
           
            <button onClick={act} className="button">{currentScript.options[0].choice_value }</button>
            
        )
    }
    function renderButton2() {
        if(currentScript.options.length === 0 ) {
            return (
                <></>
            )  
        }
        else if (currentScript.options[1] === null) {
            return (
                <></>
            )
        } else if (currentScript.options[1] === undefined) {
            return (
                <></>
            )
        } else return (
            <button onClick={act} className="button">{currentScript.options[1].choice_value }</button> 
        )
    }
    function renderButton3() {
        if(currentScript.options.length === 0 ) {
            return (
                <></>
            )  
        }
        else if (currentScript.options[2] === null) {
            return (
                <></>
            )
        } else if (currentScript.options[2] === undefined) {
            return (
                <></>
            )
        } else return (
            <button onClick={act} className="button">{currentScript.options[2].choice_value }</button> 
        )
    }

    function renderPreviousChoice () {
        if(currentScript.choice.length === 0 ) {
            return (
                <></>
            )  
        }
        else if (currentScript.choice === null) {
            return (
                <></>
            )
        } else if (currentScript.choice === undefined) {
            return (
                <></>
            )
        } else return (
            <h3>Previous Choice: {currentScript.choice}</h3>
        )

    }

    function resetGame() {
        return(

            setCurrentScript(
                {
                    "id": 1,
                    "choice": "Start",
                    "prompt": "The air is cold and your vision hazy. You walk in what appears to be an endless expanse of fog amongst the plains. After what felt like hours you eventually reach the end of the seemingly endless path only to see countless bodies before you. Your family is amongst the many. This must be a dream. If you find a way to wake up it'll all be over and you'll be with them again. You approach a nearby cliff and gaze into the abyss. This must be the way.",
                    "img": "https://sciencefictionbulletin.files.wordpress.com/2019/12/expanse-407.jpg?w=1200",
                    "img2": "https://static.tvtropes.org/pmwiki/pub/images/89507_1003.jpg",
                    "options": [
                    {
                      "id": 1,
                      "choice_value": "Escape the dream"
                    },
                    {
                      "id": 2,
                      "choice_value": "Remain in the dream"
                    }
                    ]
                }
            )
        )
       
    }

    // function playerCard () {
    //     return (
    //     // console.log(allCharacters)
    //     yourCharacter.map(eachCharacter => {
    //         // console.log(eachCharacter.name)
    //         return (
    //         <div className="playerCard">
    //           <h3>
    //             {eachCharacter.name}
    //           </h3>
    //           <ul>
    //             <li>LVL: {eachCharacter.lvl}</li>
    //             <li>EXP: {eachCharacter.current_exp}</li>
    //           {/* <li>CLASS: {eachCharacter.roles}</li> */}
    //           {/* <p>LAST LEVEL: {eachCharacter.scripts}</p> */}
    //           </ul>
              

    //         </div>
    //         )
    //     })
    //     )

    // }
    function playerCard () {
        return (
        // console.log(allCharacters)
            <div className="playerCard">
              <h3>
                {yourCharacter.name}
              </h3>
              <img className="player-image" src={yourCharacter.role_data.img} alt={yourCharacter.name}/>
              <h3>HP: {yourCharacter.role_data.hp}</h3>
              <h3>EXP TO NEXT LVL: {yourCharacter.next_lvl_exp}</h3>
              <ul>
                <li>LVL: {yourCharacter.lvl}</li>
                <li>EXP: {yourCharacter.current_exp}</li>
              {/* <li>CLASS: {eachCharacter.roles}</li> */}
              {/* <p>LAST LEVEL: {eachCharacter.scripts}</p> */}
              </ul>
              

            </div>
        )
        
        

    }

    function goBackToCharacterCreation () {
        history.push('/characters')
    }

    

    return (


        <div className="gameContainer">
            <button onClick={goBackToCharacterCreation}>Character Creation</button>
            {playerCard()}

            <div className="scriptContainer">

                {renderPreviousChoice()}
                {/* <h3>Previous Choice: {currentScript.choice}</h3> */}
                {/* <img src={currentScript.image_url} alt="Current Script"/> */}
                {renderImg()}
                {renderImg2()}
                <br></br>
                <h3>{currentScript.prompt}</h3>

                <br></br>
                <br></br>
                {renderButton1()} {renderButton2()} {renderButton3()}
                <br></br>
                <br></br>
                <button className="button" onClick={resetGame}>Reset</button>
            </div>

            <Switch>
              <Route exact path="/characters">
                <CharacterList />
              </Route>
            </Switch>

        </div>
    )
}
export default Game;