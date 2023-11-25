import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import HotGigs from './components/HotGigs'
import LoginPage from './components/LoginPage'

function App() {
  const [authenticated, setIsauthenticated] = useState(false)

useEffect(() => {



}, [authenticated])


console.log("authenticated",authenticated);
  return (
    <>
      <div>

        {!authenticated ? <LoginPage setIsauthenticated={setIsauthenticated} />:
        <>
        <Dashboard />
        <HotGigs /></>}
      </div>
    </>
  )
}

export default App
