import {useState} from 'react';

function RoleCards ({eachRole}) {

    const [roleChosen, setRoleChosen] = useState(false)
    const [classChoice, setClassChoice] = useState({})

    function clickHandler (event) {
        return (
            console.log(event)

        )
    }

    return (
        <div onClick={clickHandler} className="hvr-pulse">
            {/* <div className="class_cards"></div> */}
              <img className="class_imgs" src={eachRole.img} alt={eachRole.name} />
              <h4>{eachRole.name}</h4>
              <h5>hp: {eachRole.hp}</h5>
              <p>{eachRole.bio}</p>
            </div>

    )
}
export default RoleCards;