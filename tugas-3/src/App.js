import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';


import './App.css';

import Home from './Home'
import User from './User'
import Gallery from './Gallery'
import Favorite from './Favorite'
import Profile from './Profile';
import Setting from './Setting';
import Music from './Music';
import Film from './Film';
import Food from './Food';



function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/User' element={<User/>} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Profile' element={<Profile/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/Favorite' element={<Favorite/>} />
          <Route path='/Music' element={<Music/>} />
          <Route path='/Film' element={<Film/>} />
          <Route path='/Food' element={<Food/>} />
    </Routes>
    </>
  );
}

export default App;
