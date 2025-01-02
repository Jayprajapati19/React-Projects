import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
return (
    <div>
        <h1>Custom App!</h1>
    </div>
)
}

// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.org",
//       target: "_blank",
//     },
//     children: "Click me to visit google",
//   };

const anotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
  )


const anotherUser = "  | Chai our ReactJS"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com ', target: "_blank"},
    "Click me to visit google ",
    anotherUser



)

createRoot(document.getElementById('root')).render(
    // <App/>
    reactElement
);
