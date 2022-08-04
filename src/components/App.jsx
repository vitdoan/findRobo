import React, { useState } from "react";
import {robots} from "../robots.js";
import CardList from "./CardList";
import SearchBox from "./SearchBox.jsx";
import './App.css'

function App(){
    let [state,setState] = useState(robots);

    function updateSearch(event){
        let inputSearch = event.target.value.toLowerCase();
        setState(()=>{
            return robots.filter(robo=>robo.name.toLowerCase().includes(inputSearch))
        })
    }

    return <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchInput={updateSearch} />
        <CardList robots={state}/>
    </div>
}

export default App;