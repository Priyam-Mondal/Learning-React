import Chai from "./Chai"


function App() {
  const username = " | chai aur code"
  return (

    //we can return only one app
    //to return more than one app, enclose it with empty tags <> </>
    <>
    <Chai/>
    <h3>Chai aur code {username}</h3>
    </>
    
  )
}

export default App
