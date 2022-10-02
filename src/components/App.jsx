import React from "react";
import Icon from "./Icon.jsx";
import Range from "./Range.jsx";

function App () {
    return (
    <div className="main-container">
        <div className="first-container">
        
            <img className="logo" src="logo.svg" alt="logo" />
            <div className="file-type">
                <Icon source="icon-document.svg" alt="document icon" />
                <Icon source="icon-folder.svg" alt="folder icon" />
                <Icon source="icon-upload.svg" alt="upload icon" />
            </div>

        </div>

        <div className="second-container">

            <p className="info">You’ve used <span className="boldtext">815 GB</span> of your storage</p>
            <p className="rate"><span>185</span> GB Left</p>

            <div>
                <Range />
                <div className="range">
                    <span> 0 GB </span>
                    <span> 1000 GB</span>
                </div>

            </div>

        </div>
  </div>)
}

export default App;