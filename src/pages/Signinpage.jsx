import React, { useState } from "react";
import {getAuth,signInWithCredential, signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../firebase';
const auth = getAuth(app);
const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const siginUser = ()=>{
        signInWithEmailAndPassword(auth, email, password).then((value)=>console.log("sigin sucess")).catch((err)=> console.log(err));


    };
    return(
        <div className = 'Signin-Page'>
            <h1>Signin page</h1>
            <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="Email"
        required
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your pswrd here"
      />
      <button onClick={siginUser}>Sigin me in </button>
            </div>
    );
};
export default SigninPage;