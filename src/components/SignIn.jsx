import React, { useState } from "react";
import { db } from "../assets/firebase.js";
import {getDocs,addDoc,collection,where,query} from "firebase/firestore"

const SignIn = () => {
    const[name,SetName] = useState('')
    const[email,SetEmail] = useState('')
    const[password,SetPassword] = useState('')
    const[metch,setMetch] = useState([])
    const dbref = collection(db,'user')
    
    const SignUp = async () => {

        const matchEmail = query(dbref, where("Email" , "==" , email))
        try{
            const snapshot = await getDocs(matchEmail)
            const emailMatchingArray = snapshot.docs.map((doc) => doc.data)

        if (emailMatchingArray.length > 0) {
        alert("this email address Already exsist")

        }
        else{
        await addDoc(dbref,{Name:name,Email:email,Password:password})
        alert("sign Up Seccessfully")
        }

        }
        catch(error){
            alert(error)

        }
    }
    

  return (
    <div className="SignInWrapper">
      <div className="SignInForm">
        <h2>Sign in</h2>
        <input type="text" placeholder="Username" onChange={(e) => SetName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
        <button onClick={SignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
