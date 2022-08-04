import React from "react";
import Card from "./Card";

function CardList({robots}){
    return <div className="cards">{robots.map(robo => (<Card key={robo.id} id = {robo.id} name = {robo.name} email={robo.email}/>))}</div>
}

export default CardList;