import React from "react";

function Icon(props) {
    return <img className="icon" src={props.source} alt={props.alt} />;
}

export default Icon;