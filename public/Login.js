import React from "react";
import './login.css';
function Login(){
 return(
   <div className='loginpage'>
     <form action="">
       <h2>LOGIN</h2>
       <h4>Hey,Enter your details to create an account</h4>
       <div>
       <label htmlFor="email">Email:</label>
       <input type="email" value="Email" name="email" id="email"/>
       </div>


       <div>
       <label htmlFor="dob">Date of Birth:</label>
       <input type="date" value="dd/mm/yyyy" name="dob" id="dob"/>
       </div>

       
       <div>
       <label htmlFor="gender">Gender:</label>
       Male<input type="radio" name="gender" id="male" selected/>
       Female<input type="radio" name="gender" id="female"/>
       Others<input type="radio" name="gender" id="others"/>
       </div>
       <div>
       <label htmlFor="password">Password:</label>
       <input type="password"  id="pwd"/>
       </div>
      </form>
   </div>
 );
}
export default Login;