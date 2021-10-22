import {useState, useEffect} from 'react';

function Game ({allCharacters}) {

    
    
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
        })
    }
    // console.log(allScripts)
    // getFetchAllScripts()
    
    useEffect(getFetchAllScripts, [])

    // console.log(allScripts)

    function finder(act, allScripts) {
        // console.log(act)
        // console.log(currentScript)
        
        let nextAct = allScripts.find(eachScene => eachScene.choice === act)
        // console.log(nextAct)
        setCurrentScript(nextAct)
    } 
    function act(event) {

        if (!button) {
            // console.log(event.target.textContent)
            finder(event.target.textContent, allScripts)
        }
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
        } else return (
            <button onClick={act} className="button">{currentScript.options[1].choice_value }</button> 
        )
    }
    // function renderButton3() {
    //     if(currentScript.options.length == 0 ) {
    //         return (
    //             <></>
    //         )  
    //     }
    //     else if (currentScript.options[2] === null) {
    //         return (
    //             <></>
    //         )
    //     } else return (
    //         <button onClick={act} className="button">{currentScript.options[2].choice_value }</button> 
    //     )
    // }

    // function buttonThreeConditional() {
    //     if (currentScript.options[2] === null) {
    //         return (
    //             <></>
    //         )
    //     } else return (<button onClick={act} id="two" className="button">{currentScript.options[2]}</button>) 
    // }


    // console.log(allScripts)
    // console.log(currentScript)

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

    

    return (



        <div className="gameContainer">
            <div className="playerCard">


            </div>

            <div>

                <h3>Previous Choice: {currentScript.choice}</h3>
                {/* <img src={currentScript.image_url} alt="Current Script"/> */}
                {renderImg()}
                {renderImg2()}
                <br></br>
                <h2>{currentScript.prompt}</h2>

                <br></br>
                <br></br>
                {renderButton1()} {renderButton2()} 
                <br></br>
                <br></br>
                <button className="button" onClick={resetGame}>Reset</button>
            </div>

        </div>
    )
}
export default Game;