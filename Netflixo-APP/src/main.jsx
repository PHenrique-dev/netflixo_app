import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Action from "./filtros/Action.jsx";
import Comedy from './filtros/Comedy.jsx';
import Drama from './filtros/Drama.jsx';
import Fiction from './filtros/Fiction.jsx';
import Horror from './filtros/Horror.jsx';
import Adventure from './filtros/Adventure.jsx';
import Animation from './filtros/Animation.jsx';
import Crime from './filtros/Crime.jsx';
import Documentary from './filtros/Documentary.jsx';
import Family from './filtros/Family.jsx';
import Fantasy from './filtros/Fantasy.jsx';
import History from './filtros/History.jsx';
import Music from './filtros/Music.jsx';
import Mystery from './filtros/Mystery.jsx';
import Romance from './filtros/Romance.jsx';
import Thriller from './filtros/Thriller.jsx';
import TvMovie from './filtros/TvMovie.jsx';
import War from './filtros/War.jsx';
import Western from './filtros/Western.jsx';


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
      <Route path='animation' element={<Animation/>}/>
      <Route path='crime' element={<Crime/>}/>
      <Route path='documentary' element={<Documentary/>}/>
      <Route path='family' element={<Family/>}/>
      <Route path='fantasy' element={<Fantasy/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='music' element={<Music/>}/>
      <Route path='mystery' element={<Mystery/>}/>
      <Route path='romance' element={<Romance/>}/>
      <Route path='thriller' element={<Thriller/>}/>
      <Route path='tv-movie' element={<TvMovie/>}/>
      <Route path='war' element={<War/>}/>
      <Route path='western' element={<Western/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
