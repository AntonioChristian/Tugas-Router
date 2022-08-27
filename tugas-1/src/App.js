import {Link, Route, Routes} from 'react-router-dom';


import './App.css';

import Home from './Home'
import Profile from './Profile'
import Gallery from './Gallery'
import Music from './Music'
import Film from './Film'


function App() {
  return (
    <>
    <ul>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/Profile'>Profile</Link></li>
      <li> <Link to='/Gallery'>Gallery</Link></li>
      <li> <Link to='/Music'>Music</Link></li>
      <li> <Link to='/Film'>Film</Link></li>
    </ul>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/Music' element={<Music/>} />
      <Route path='/Film' element={<Film/>} />


    </Routes>
    </>
  );
}

export default App;
