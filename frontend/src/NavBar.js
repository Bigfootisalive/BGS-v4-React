import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from './hooks/useUser';


const NavBar = () => {

    const {user} = useUser();
    const navigate = useNavigate();
    return (
<nav class="navbar">

        <Link class="navlink" to="/">Home</Link>
        <Link class="navlink" to="/about">About</Link>
        <Link class="navlink" to="/articles">Articles</Link>
    <div className='nav-right'>
        
        {user 
        ? <button class="login-log-out" onClick={() =>{
            signOut(getAuth());
        }}>Log Out</button>

        : <button class="login-log-out" onClick={() => {
            navigate('/login');
        }}>Login</button>}
    </div>
</nav>
    )
}
export default NavBar;