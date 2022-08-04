import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.jsx";
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

    return <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchInput={updateSearch} />
        <CardList robots={state.filter}/>
    </div>
}

export default App;