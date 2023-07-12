import React, { useContext, useEffect,useState } from 'react';


import { Link, useHistory,history } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext'; 

 
 const FriendsList=()=>{
  const [friends, setFriends] = useState([]);
const {authInfo} = useContext(AuthContext);
  const history=useHistory();
  const goToLogin=()=>{
    history.push('/login')   
}
useEffect(() => {
  axios
      .get("http://localhost:9000/api/friends", {
          headers : {
              Authorization: authInfo.token
          }
      })
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  },[])
    
    
    return(
       

<div>
    
 <div class="a">
    <h1>FREINDS DATABASE</h1>
    <div class="b">
        <button onClick={goToLogin} class="c">LOGIN.</button>
        <h1 class="d">" "</h1>
        <button  class="c">FREINDLIST.</button>
        <h1 class="d">" "</h1>
        <button class="c">ADDFRIEND.</button>
        <h1 class="d">" "</h1>
        <button class="c">LOGOUT.</button>

    </div>

 </div>
 <hr/>
 <h2 class="e">FREINDS LIST</h2>
 
 <h1 class="f">-JOEY TRIBBIANI-JOEY@FREINDS.COM</h1>

 </div>

        )

 }

 export default FriendsList;