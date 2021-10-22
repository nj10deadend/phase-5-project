function RoleCards ({eachRole}) {
    return (
        <div className="hvr-pulse">
            {/* <div className="class_cards"></div> */}
              <img className="class_imgs" src={eachRole.img} alt={eachRole.name} />
              <h4>{eachRole.name}</h4>
              <h5>hp: {eachRole.hp}</h5>
              <p>{eachRole.bio}</p>
            </div>

    )
}
export default RoleCards;