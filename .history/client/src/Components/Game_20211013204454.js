import {useState, useEffect} from 'react';

function Game () {

    
    
    const [allScripts, setAllScripts] = useState([])
    const [button, setButton] = useState(false)
    // console.log(allScripts)
    const [currentScript, setCurrentScript] = useState(
        
        {
            "id": 1,
            "choice": "Start",
            "prompt": "You awaken in a dark cave with nothing but the clothes on your back. You see an opening farther down the cave revealing that it is nightime. Exit the cave?",
            "image_url": "https://cdn.mos.cms.futurecdn.net/cefc9df137ac1497ea222433b217786a.png",
            "image_url2": null,
            "options": [
            {
                "id": 1,
                "choice_value": "Yes"
            },
            {
                "id": 2,
                "choice_value": "No"
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
        if (currentScript.image_url === null) {
            return (
                <></>
            )
        } else if(currentScript.image_url == 0) {
            return (
                <></>
            )
        }
        else return (<img className='img' src={currentScript.image_url} alt="Current Script" />) 
    }

    function renderImg2() {
        if (currentScript.image_url2 === null) {
            return (
                <></>
            )
        } else if(currentScript.image_url2 == 0) {
            return (
                <></>
            )
        }
        else return (<img className='img' src={currentScript.image_url2} alt="Current Script" />) 
    }


    ////////////////////////////////////////////////////////////////
    function renderButton1() {
        if(currentScript.options.length == 0 ) {
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
        if(currentScript.options.length == 0 ) {
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
                    "prompt": "You awaken in a dark cave with nothing but the clothes on your back. You see an opening farther down the cave revealing that it is nightime. Exit the cave?",
                    "image_url": "https://cdn.mos.cms.futurecdn.net/cefc9df137ac1497ea222433b217786a.png",
                    "image_url2": null,
                    "options": [
                    {
                        "id": 1,
                        "choice_value": "Yes"
                    },
                    {
                        "id": 2,
                        "choice_value": "No"
                    }
                    ]
                }
            )
        )
       
    }

    

    return (



        <div className="gameContainer">

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
    )
}
export default Game;