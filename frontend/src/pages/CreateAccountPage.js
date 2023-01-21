import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassoword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

   const createAccount = async () => {
        try {
        if (password !== confirmPassword){
            setError('Passwords Do not Match!');
            return;
        }
        await createUserWithEmailAndPassword(getAuth(),email, password);
        navigate('/articles');
    }
    catch (e){
        setError(e.message);
    }
   }

    return (
        <>
        <h1>Create an Account</h1>
        {error && <p className="error">{error}</p>}
        <input placeholder="Email"value={email} onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}type="password"/>
        <input placeholder="Re-Enter Your Password" value={confirmPassword} onChange={e => setConfirmPassoword(e.target.value)}type="password"/>

        <button onClick={createAccount}>Create Account</button>
        <br/>
        <Link to="/login">Already have an account? Login Here</Link>
        </>
    );
}

export default CreateAccountPage;