import React from "react";

function Card(props){
    return <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 roboCards">
        <img className="roboImg" src={`https://robohash.org/${props.id}`} alt="robot"></img>
        <div className="">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
    </div>
}

export default Card;