import React from 'react';
import ReactDOM from 'react-dom/client'


import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     Children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"
// ye format use krna hota
const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blanck'},
    'click me to visit ',
    anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
        ReactElement
    
);