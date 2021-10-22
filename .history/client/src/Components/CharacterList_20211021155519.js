import { useHistory, Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
// import {useState} from 'react';
import Game from "./Game";
import RoleCard from './RoleCard'
import PlayerCharacter from './PlayerCharacter';

function CharacterList ({characterToPlay}) {

  let history = useHistory()

  // const history = history.push('/game')
  function goToGame () {
    history.push('/game')

  }


  const [allCharacters, setAllCharacters] = useState([])
  // console.log(allCharacters)

  const [newCharacterName, setNewCharacterName] = useState("")

  // const [characterChoice, setCharacterChoice] = useState({})

  const [yourCharacter, setYourCharacter] = useState([])
  // console.log(yourCharacter)

  const [classChoice, setClassChoice] = useState({})

  const [lvl, setLvl] = useState(
      
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
    // console.log(classChoice)
    
    // const [roleChosen, setRoleChosen] = useState(false)

    const [allRoles, setAllRoles] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/characters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newCharacterName,
            role: classChoice,
            // script: lvl
          })
        })
          .then(res => {
            if (res.ok) {
              res.json().then(newCharacter => {
                  // setNewCharacterName(newCharacter)
                  console.log(newCharacter)
                // setCurrentUser(user)
                // history.push('/characters')
              })
            } else {
            //   history.push('/characters')
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }


    function getFetchAllCharactersAndRoles () {

      function fetchAllCharacters () {

        fetch('/characters')
        .then((response) => response.json())
        .then((fetchedCharacters) => {
            
          const copyOfFetchedCharacters = [...fetchedCharacters]
          setAllCharacters(copyOfFetchedCharacters)
        })
      }
      fetchAllCharacters()

      function getFetchAllRoles () {
  
        fetch('/roles')
        .then((response) => response.json())
        .then((fetchedRoles) => {
            // console.log(fetchedScripts)
          setAllRoles(fetchedRoles)
        })
      }
      getFetchAllRoles()
    }
    
    useEffect(getFetchAllCharactersAndRoles, [])

    /////////// GET FETCH TO ID FOR SPECIFIC CHARACTER //////////

    // function fetchYourCharacter (id) {
    //   fetch(`/characters/${id}`, {
    //     credentials: 'include'
    //   })
    //   .then(response => response.json())
    //   .then((fetchedCharacter) => {
    //     setYourCharacter(fetchedCharacter);
    //     characterToPlay(fetchedCharacter);
    //   })
    // }
    // useEffect(fetchYourCharacter, [])

    /////////////////////////////

    // function findSpecificCharacter (foundCharacter) {
    //   allCharacters.filter(eachCharacter => {
    //     if (eachCharacter.id === foundCharacter.id) {
    //       setYourCharacter(foundCharacter)
    //       history.push('/game')
    //     } else return(<></>)
    //   })
    // }

        
        

    // }
    function mappedCharacters () {
        return (
        // console.log(allCharacters)
        allCharacters.map(eachCharacter => {
            // console.log(eachCharacter.name)
            return (
              <PlayerCharacter eachCharacter={eachCharacter} key={eachCharacter.id} setCharFunc={setYourCharacter}/>

            )
        })
        )

    }
    console.log(yourCharacter)
    
    function mappedRoles () {
      
      return (
        
        allRoles.map(eachRole => {
          return (
            
            <RoleCard eachRole={eachRole} key={eachRole.id} setClassfunc={setClassChoice}/>
            
          )
        })

      )
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

    function placeholderClass () {
      if (classChoice.name === undefined || "")
      return (
        <p></p>
      )
      else return (
        <p>You chose the {classChoice.name} class!</p>
      )
    }



    return (
        <div className="character-component-container">
          {/* <p>You chose the {classChoice.name} class!</p> */}
          {placeholderClass()}
          <h1>Create a new Character</h1>
          <h2>1. Create a name</h2>
          <form onSubmit={handleSubmit}>
            <p>
            <label 
              htmlFor="Insert Character Name"
            >
              Name
            </label>
            <input
              type="text"
              name="Character Name"
              value={newCharacterName}
              placeholder="Insert Character Name"
              onChange={(e) => setNewCharacterName(e.target.value)}
            />
            </p>

            <h2>2. Select a class</h2>
            <div>
              {mappedRoles()}
            </div>

            <h2>3. Click Create!</h2>

            <p><button type="submit">Create</button></p>

          </form>

          <h2>Saved Games</h2>

          {mappedCharacters()}
          

          {/* <button><Link to="/game">Play</Link></button> */}
          <Switch>
              <Route exact path="/game">
                <Game allCharacters={allCharacters} key={allCharacters.id} />
                {/* <Game yourCharacter={yourCharacter} key={yourCharacter.id} /> */}
              </Route>
          </Switch>

        </div>
    )
}

export default CharacterList;