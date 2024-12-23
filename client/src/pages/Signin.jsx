import { useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import React from 'react'
import "./signin.css"
import { toast } from "react-toastify";
export const Signin = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const [isOpen, setIsOpen] = React.useState(true);
const [trueEmail, setTrueEmail] = React.useState(true);
const [truePassword, setTruePassword] = React.useState(true)
const navigate = useNavigate();
  const { details } = useAuth();
  // console.log(details)

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


  // let handle the submit functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset states to default at the beginning of validation
    setTrueEmail(true);
    setTruePassword(true);
  
    let isEmailValid = false;
    let isPasswordValid = false;
  
    for (let i = 0; i < details.length; i++) {
      if (details[i].email === user.email) {
        isEmailValid = true;
        if (details[i].password === user.password) {
          isPasswordValid = true;
          // Navigate to the user portal
          navigate(`/portal/${details[i]._id}/${details[i].password}`);
          return; // Exit function after successful login
        }
      }
    }
  
    // Update state values based on validation
    setTrueEmail(isEmailValid);
    setTruePassword(isPasswordValid);
  
    // Show appropriate alert messages based on validation results
    if (!isEmailValid) {
      console.log(" i am here")
      alert("Invalid Email!"); // Prioritize email validation
    } else if (!isPasswordValid) {
      alert("Wrong Password, Please try again!");
    } else {
      console.log("i am there")
      alert("Invalid Email or Password!"); // This case should not be reachable
    }
  };
  

  return (
    <>

        <div className="parent-modal">
            {isOpen && (
                <div className="modal-container">
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img src="https://liamcrest.com/assets/static/CONTACT%20US%20IMAGE-N1-01.png" alt="Illustration of people communicating" className="form-image" />
                    </div>
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",marginBlock:"10px"}} className="lets-talk">LOGIN</span>
                    <form onSubmit={handleSubmit}>
                    <div style={{marginBottom:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                      className="input-field"
                    />
                    </div>
                        <div style={{marginBottom:"10px",display:"flex", alignItems:"center", justifyContent:"center"}}>
                  
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                      className="input-field"
                    />
                          
                        </div>
    
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            )}
        </div>

    </>
  );
};