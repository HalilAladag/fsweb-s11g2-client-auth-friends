import React, {useContext, useEffect} from 'react';


import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext';

 
 const Logout=()=>{
  
    const history=useHistory();
    const goToFriendlist=()=>{
        history.push('/friends')   
    }
    const goToLogin=()=>{
        history.push('/login')   
    }
    const { authInfo, logout }= useContext(AuthContext)

    useEffect(() => {
        const config = {
            method: "post", 
            url:"http://localhost:9000/api/logout",
            headers : {
                Authorization: authInfo.token,
                "Content-Type": "application/json"
            }
        }
       axios(config)
            .then(res => logout())
            .catch(err => console.log(err))
        },[authInfo.token])
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
        <button class="c">LOGOUT.</button>

    </div>

 </div>
 <hr/>
 <h2 class="e">LOGIN</h2>
 <form>
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

 export default Logout;