import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Action from "./Filtros/Action.jsx";
import Comedy from './filtros/Comedy.jsx';
import Drama from './filtros/Drama.jsx';
import Fiction from './filtros/Fiction.jsx';
import Horror from './filtros/Horror.jsx';
import Adventure from './filtros/Adventure.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<Movie/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='action' element={<Action/>}/>
      <Route path='comedy' element={<Comedy/>}/>
      <Route path='drama' element={<Drama/>}/>
      <Route path='fiction' element={<Fiction/>}/>
      <Route path='horror' element={<Horror/>}/>
      <Route path='adventure' element={<Adventure/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
