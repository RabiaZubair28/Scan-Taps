import { useState} from "react";
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
    // console.log(user);

    for(let i=0; i < details.length; i++)
      {
        if(details[i].email == user.email)
        {
          setTrueEmail(false)
        }
        if(details[i].password == user.password)
          {
            setTruePassword(false)
          }
      // const companyDescription = details[i].description;
        if(details[i].email == user.email && details[i].password == user.password )
        {
            // console.log("ok")
            // console.log(details[i]._id)
            
            // window.location.href(`/client/${details[i]._id}`)
            // console.log(details[i]._id)
            // console.log("login done")
            navigate(`/portal/${details[i]._id}/${details[i].password}`)
        }
      }

      if(trueEmail && truePassword)
        {
          alert("Invalid Email & Password!")
        }
      else if(trueEmail)
      {
        alert("Invalid Email!")
      }
      else if(truePassword)
      {
          
        alert("Wrong Password, Please try again!")
      }
      else{
        console.log("login successful")
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