import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory } from "react-router-dom";
import {auth} from "./firebase"
function Login(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (event) =>{
        event.preventDefault(); // this stop refresh
        // do the login logic...

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //loggin, redirect to homepage...
            history.push("/");
        })
        .catch(e => alert(e.message));
    }
    const register = (event)=>{
        event.preventDefault(); // this stop refresh
        // do the login logic...
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //create user and logged in
            history.push("/");
        })
        .catch(e => alert(e.message));
    }
    return(
    <div className="login">
        <Link to="/">
            <img
             className="login_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
             alt=""
            />
        </Link>
        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} className="login_signinButton">Sign In</button>
            </form>
            <p>
                By signing in you agree to Amazon's Terms and Conditions
            </p>
            <button onClick={register} className="registerButton">Create your Amazon Account</button>
        </div>
    </div>
    )
}
export default Login;