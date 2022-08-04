import React from "react";

function Scroll(props){
    return <div style={{overflow:'scroll',border:'3px solid #0096FF', height:'350px'}}>
        {props.children}
    </div>
}

export default Scroll;