import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const SignupPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("sucess")
    );
  };
  return (
    <div className="signup-page">
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
      <button onClick={createUser}>signup</button>
    </div>
  );
};
export default SignupPages;
