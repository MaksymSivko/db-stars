// import React from 'react';
// import ReactDOM from 'react-dom';
// const app = <div>dddd</div>;

// ReactDOM.render(app, document.getElementById('root'));

const getResource = async url => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
};

getResource('https://swapi.co/api/planets/1/').then(body =>
    console.log(body.name)
);
