import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/User'>User</Link></li>
                <ul>
                    <li> <Link to='/User/Setting'>Setting</Link></li>
                    <li> <Link to='/User/Profile'>Profile</Link></li>
                </ul>
            <li> <Link to='/Gallery'>Gallery</Link></li>
            <li> <Link to='/Favorite'>Favorite</Link></li>
                <ul>
                    <li> <Link to='/Favorite/Music'>Music</Link></li>
                    <li> <Link to='/Favorite/Film'>Film</Link></li>
                    <li> <Link to='/Favorite/Food'>Food</Link></li>
                </ul>
        </ul>
    )
}

export default Navbar;