import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.jsx";
import Scroll from "./Scroll";
import './App.css'

function App(){
    let [state,setState] = useState({
        robots: [],
        filter: []
    });

    function updateSearch(event){
        let inputSearch = event.target.value.toLowerCase();
        setState((prev)=>{
            return {robots:prev.robots,filter: state.robots.filter(robo=>robo.name.toLowerCase().includes(inputSearch))}
        })
    }

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {setState({robots:data,filter:data})});
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[]);
    if(state.robots.length === 0){
        return <h1 className="tc">Loading</h1>
    } else {
        return <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchInput={updateSearch} />
        <Scroll>
            <CardList robots={state.filter}/>
        </Scroll>
    </div>
    }
}

export default App;