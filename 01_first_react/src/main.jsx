import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

//every element converted to this type of key-value pairs for react after parsing
//this is custom format
// const reactElement= {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com/',
//       target: '_blank'
//   },
//   children: 'chlick me to visit google'
// }



//using react std format
// React.createElement() is the traditional way of creating React elements before JSX was introduced.
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)


// using jsx format
const anotherElement = (  
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


// createRoot() is creating a virtual dom with root element
// then rendering App and MyApp react components inside it
createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <MyApp/>
  </>
)
