import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/articles')
        }
        catch (e) {
            setError(e.message);
        }
    }
    return (
        <>
        {error && <p className="error">{error}</p>}
        <h1>Login to your Account</h1>
        <input placeholder="Email"value={email} onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}type="password"/>
        <button onClick={login}>Log In</button>
        <br/>
        <Link to="/create-account">Don't Have an Account? Create an Account Here!</Link>
        </>
    );
}

export default LoginPage;