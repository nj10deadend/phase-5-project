// import { useHistory, Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
// import {useState} from 'react';
import Game from "./Game";
import RoleCard from './RoleCard'

function CharacterList () {


    const [allCharacters, setAllCharacters] = useState([])

    const [newCharacterName, setNewCharacterName] = useState("")

    const [classChoice, setClassChoice] = useState({})

    const [lvl, setLvl] = useState([])
    console.log(classChoice)
    
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
            role: classChoice
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
            // console.log(fetchedScripts)
          setAllCharacters(fetchedCharacters)
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
        return (
        // console.log(allCharacters)
        allCharacters.map(eachCharacter => {
            // console.log(eachCharacter.name)
            return (
            <div>
                <h3>
                    {eachCharacter.name}
                </h3>

            </div>
            )
        })
        )

    }
    // function mappedRoles () {
      
    //   return (
        
    //     allRoles.map(eachRole => {
    //       return (
    //         <div className="hvr-pulse">
    //         {/* <div className="class_cards"></div> */}
    //           <img className="class_imgs" src={eachRole.img} alt={eachRole.name} />
    //           <h4>{eachRole.name}</h4>
    //           <h5>hp: {eachRole.hp}</h5>
    //           <p>{eachRole.bio}</p>
    //         </div>
    //       )
    //     })

    //   )
    // }
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
        <div>
          {/* <p>You chose the {classChoice.name} class!</p> */}
          {placeholderClass()}
          <h2>Create a new Character</h2>
          <h3>1. Create a name</h3>
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

            <h3>2. Select a class</h3>
            {mappedRoles()}

            <p><button type="submit">Create</button></p>

          </form>

          <h2>Saved Games</h2>

          {mappedCharacters()}
          

          {/* <button><Link to="/game">Play</Link></button> */}
          <Switch>
              <Route exact path="/game">
                  <Game />
              </Route>
          </Switch>

        </div>
    )
}

export default CharacterList;