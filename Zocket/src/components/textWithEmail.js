import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useState} from "react";
import validator from 'validator';
import emailjs from 'emailjs-com';
const Button = styled.button`
  background: #0F6EFF;
  color: white;
  cursor: pointer;
  height: 40px;
  width: 155px;
  font-size: 0.85em;
  border: none;
  border-radius: 0px 6px 6px 0px;
  font: poppins;
  font-weight: 630;
  text-align: center;
  letter-spacing: 0.4px;
`;
const TextField= styled.input`
    outline: none;
    color: ${props => props.inputColor || "grey"};
    background: #F4F5F4;;
    border: none;
    padding-left:20px;
    border-radius: 3px;
    height: 40px;
    width: 337px;
    border-radius: 6px 0px 0px 6px;
    // font-family: oboto;
    font-style: normal;
    // font-weight: normal;
    font-size: 14px;
    font-color: #D3D3D3;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #737B7D;
`;

const TextWithEmail = (props) => {
        const [email, setEmail] = useState("");
        function handleTextChange(e) {
            e.preventDefault();
            const curEmail = e.target.value;
            setEmail(curEmail);
            console.log("s");
        };
        function handleSubmit(event) {
            event.preventDefault();
            console.log(email);
            if(validator.isEmail(email)){
                axios.post("http://localhost:3001/api/insertEmail", { curEmail : email}).then((response) => {
                    console.log(response);
                    if(response.data === true){
                        alert("Thanks for subscribing");
                        emailjs.sendForm('service_mledt4d', 'template_9g8a7s5', event.target, 'user_o0AXYAUfccNqNpBzDlCe4')
                        .then((result) => {
                            window.location.reload(); 
                        }, (error) => {
                             console.log(error.text);
                        });
                    }else{
                        alert("You are already subscribed");
                    }
                });
            }else{
                alert("Enter Valid Email");
            }
        };
        return (
           <div id="container"> 
            <form onSubmit={handleSubmit}>
                    <TextField  onChange={handleTextChange} type="text" placeholder="Your email address" name="email"/>                    
                    <Button >Get Early Access</Button>
            </form>
            </div>
        );
}

export default TextWithEmail;