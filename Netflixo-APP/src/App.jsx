import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <h1>netflixo</h1>
        <Outlet/>
      </div>
      
    </>
  )
}

export default App
