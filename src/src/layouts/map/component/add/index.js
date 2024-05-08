import React from 'react';
import { useState } from "react";

// Link
import { Link } from 'react-router-dom';


function AddBtn() {
    const [active, setActive] = useState(false);
    return (
        <div id="mapAddBtn" className={active ? "active" : ""}>
            <div className='popup'>
                <a className='popuptext'>Add Route</a>
                <Link to="/profile" className='popuptext'>Use Route</Link>
            </div>
            <button onClick={() => setActive(!active)}>
                <ion-icon name="add-outline"></ion-icon>
            </button>
        </div>
    )
}

export default AddBtn;