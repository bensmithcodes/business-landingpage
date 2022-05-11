import React from "react";
import './Suscribe.css'


const Suscribe =()=>{
    return (



        <div className="subscribe">

        <div className="content">
        <h2>Join The Team!</h2>
        <form action="https://getform.io/f/d6492a0a-13af-40a3-b013-7f09b57ca086" method="POST">
        <div className="form-container display-col">
            <input type="email" name='email' placeholder="enter your email"/>
            <button className="btn">Sign Up</button>
        </div>
        <div className="form-container">
            <input type="checkbox"/><p>I understand and accept to receive emails...</p>
        </div>
        </form>
        </div>

        </div>
    )
}
export default Suscribe;