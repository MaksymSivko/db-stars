import React from 'react';

import './style.css';

export const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                StarDB
                {/* <a>StarDB</a> */}
            </h3>
            <ul className="d-flex">
                <li>People{/* <a>People</a> */}</li>
                <li>Planets{/* <a>Planets</a> */}</li>
                <li>Starships{/* <a>Starships</a> */}</li>
            </ul>
        </div>
    );
};
