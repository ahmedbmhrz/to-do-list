import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getDocs,addDoc,collection,where,query} from "firebase/firestore"
import {db} from '../assets/firebase'

const Login = () => {
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const login = async () =>{
    const dbref = collection(db,'user')

    try {
        const emailMath = query(dbref,where('Email','==',email))
        const passwordMath = query(dbref,where('Password','==',password))
        const emailSnapshot = await getDocs(emailMath)
        const emailArray =  emailSnapshot.docs.map((doc) => doc.data)
        const passwordSnapshot = await getDocs(passwordMath)
        const passwordArray =  passwordSnapshot.docs.map((doc) => doc.data)
        if (emailArray.length > 0 &&  passwordArray.length > 0 ) {
            navigate("/ToDoListPage")
        } else {
            alert("Check your email and password")
        }
        
    } catch (error) {
        alert(error)
        
    }
  }


  const navigate = useNavigate();
  return (
    <div className="SignInWrapper">
      <div className="SignInForm">
        <h2>Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => SetEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)}/>
        <button onClick={login}>Login</button>
        <button onClick={() => navigate("/SignInPage")}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
