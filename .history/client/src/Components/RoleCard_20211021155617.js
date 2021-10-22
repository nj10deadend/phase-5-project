// import {useState} from 'react';

function RoleCard ({eachRole, setClassfunc}) {

    // const [roleChosen, setRoleChosen] = useState(false)
    // const [classChoice, setClassChoice] = useState({})
    // console.log(classChoice)

    function clickHandler (event) {
        // setRoleChosen(true)
        // console.log(event)
        setClassfunc(eachRole)
        // setClassChoice(event.target)

    }
    

    return (
        <div >
            <div onClick={clickHandler} className="hvr-pulse">
                {/* <div className="class_cards"></div> */}
                <img className="class_imgs" src={eachRole.img} alt={eachRole.name} />
                <h4>{eachRole.name}</h4>
                <h5>hp: {eachRole.hp}</h5>
                <p>{eachRole.bio}</p>
            </div>
        </div>
    )
}
export default RoleCard;