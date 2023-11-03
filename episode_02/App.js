import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', {}, [
    React.createElement('div', {id: 'child1'},[
        React.createElement('h1', {}, 'This is an h1 tag'),
        React.createElement('h2', {}, 'This is an h2 tag'),
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'This is an h1 tag'),
        React.createElement('h2', {}, 'This is an h2 tag'),
    ]),
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
