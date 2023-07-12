import React, {useContext, useEffect, useState } from 'react';


import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext'; 

 
 const Login=()=>{
  const [user, setUser] = useState({
    username: 'workintech',
    password: 'wecandoit'
})
const { login } = useContext(AuthContext);
const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
};

const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
};
  
    const history=useHistory();
    const goToFriendlist=()=>{
        history.push('/friends')   
    }
    const goToLogin=()=>{
        history.push('/login')   
    }
    const logout=()=>{
      history.push('/logout')   
  }
  
     
    return(
       

<div>
    
 <div class="a">
    <h1>FREINDS DATABASE</h1>
    <div class="b">
        <button onClick={goToLogin} class="c">LOGIN.</button>
        <h1 class="d">" "</h1>
        <button  onClick={goToFriendlist} class="c">FREINDLIST.</button>
        <h1 class="d">" "</h1>
        <button class="c">ADDFRIEND.</button>
        <h1 class="d">" "</h1>
        <button onClick={logout}  class="c">LOGOUT.</button>

    </div>

 </div>
 <hr/>
 <h2 class="e">LOGIN</h2>
 <form onSubmit={handleSubmit}>
    <div class="f">
      <label>USERNAME
        <br/>
        <input type="text" />
        
      </label>
      <br/>
      <label>PASSWORD
        <br/>
        <input type="text" />
        </label>
        <br/>
        <input font-size class="c" type="submit" value="Submit"/>       
         </div>

    </form>

 </div>

        )

 }

 export default Login;