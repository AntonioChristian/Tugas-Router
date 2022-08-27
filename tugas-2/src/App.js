import {Link, Route, Routes} from "react-router-dom"
import './App.css';

import Post from './Artis/Artis';

function App() {
  return (
    <>
    <ul>
      <li> <Link to ='/Artis/1'>Nagita Slavina</Link></li>
      <li> <Link to ='/Artis/2'>Raffi Ahmad</Link></li>
      <li> <Link to ='/Artis/3'>Ruben Onsu</Link></li>
      <li> <Link to ='/Artis/4'>Sarwenda</Link></li>
      <li> <Link to ='/Artis/5'>Hotman Paris</Link></li>
      <li> <Link to ='/Artis/6'>Ariel Noah</Link></li>
      <li> <Link to ='/Artis/7'>Tasya Farasyah</Link></li>
      <li> <Link to ='/Artis/8'>Anya Geraldine</Link></li>
      <li> <Link to ='/Artis/9'>Nunung</Link></li>
      <li> <Link to ='/Artis/10'>Pita Handerson</Link></li>
      <li> <Link to ='/Artis/11'>Maudy Ayunda</Link></li>
      <li> <Link to ='/Artis/12'>Pevita Pearch</Link></li>
      <li> <Link to ='/Artis/13'>Prily</Link></li>
      <li> <Link to ='/Artis/14'>Mikha Tambahyong</Link></li>
      <li> <Link to ='/Artis/15'>Natasya Wilona</Link></li>
    </ul>
    <Routes>
      <Route path = '/Artis/:nama_artis'element ={<Post/>}/>
    </Routes>
    </>
   
   
  );
}

export default App;