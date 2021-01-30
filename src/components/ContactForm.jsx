import React, { useState } from "react"
import styled from 'styled-components'
import axios from 'axios'

import contactBg from "../../assets/images/email-pattern.png";
import contactImage from "../../assets/ContactForm-img.svg";

const ScreenHeight = styled.div`
  height: 93vh;
  background-image: url(${contactBg});
`;
const Heading1 = styled.h1`
    position: absolute;
    width: 603px;
    height: 0px;
    left: 660px;
    top: 150px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 32px; 
    line-height: 39px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #000000;
`;
const FormLayout = styled.div`
    position: absolute;
    width: 604px;
    height: 770px;
    left: 658px;
    top: 213px;

    background: #FFFFFF;
    border-radius: 30px;
`;
const FormImg = styled.img`
    padding: 0px 20px;
`;

//form styling
const FormStyled = styled.div`
  margin: 0px 20px 0px 0px;
`;

const InputStyled = styled.input`
  font-weight: normal;
  font-size: 1em;
  font-family: Montserrat, Arial, sans-serif;
  width: 70%;
  padding: 8px 10px;
  margin: 2px 0;
  float: right;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const TextAreaStyled = styled.textarea`
  font-weight: 400;
  font-family: Montserrat, Arial, sans-serif;
  width: 100%;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  height: 100px;
  font-size: 17px;
  resize: none;
`;
const RowS = styled.div`
  width: 100%;
  padding: 1.5em 0;
  margin-top: 10px;
  margin-left: 10px;
`;

const LabelStyled = styled.label`
font-family: Montserrat, Arial, sans-serif;
font-weight: regular;
letter-spacing: 0.15em;
 width: 28%;
 text-align: justify;
 float: left;
`; 

const ButtonStyled = styled.button`
   margin: 0px 210px;
   font-weight: normal;
   font-size: 27px;
   font-family: Montserrat, Arial, sans-serif;
   padding: 0.4em 1.8em;
   border: solid 2px;
   border-color: #0078E7;
   border-radius: 8px;
   background: transparent;
   color: #0078E7;
   transition: all 0.5s ease;
   &:hover{
     background: #0078E7;
     color: white;
     cursor: pointer;
   }
   text-decoration: none;
    outline: none;
`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    
      const updateFormData = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }
      
      const addComment = e => {
        if(firstName !== undefined && email !== undefined && message !== undefined){
          axios.post('https://send.pageclip.co/BrCu96VVf5v3pgpYN4Coe8oRSORoVQDZ/Contact_Form', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
          })
          toggle()
          setTimeout(() => {setToggleState("hidden")}, 3000)
          clearFields()
        }
        else{
          toggleFail()
          setTimeout(() => {setToggleFailState("hidden")}, 4000)
        }
      }
      const submitHandler = e => {
        e.preventDefault()
        addComment()
      }
      const clearFields = () => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
      const [ toggleState, setToggleState] = useState("hidden");
      function toggle() {
        setToggleState(toggleState === "hidden" ? "visible" : "hidden");
      }
      const [ toggleFailState, setToggleFailState] = useState("hidden");
      function toggleFail() {
        setToggleFailState(toggleFailState === "hidden" ? "visible" : "hidden");
      }
    
      const { firstName, lastName, email, message} = formData;

    return(
        <ScreenHeight>
            <Heading1>We would love to hear it from you </Heading1>
            <FormLayout>
                <FormImg src={contactImage} alt="contactImage" />
                <FormStyled>
                <form onSubmit={submitHandler}>
                    <RowS>       
                    <LabelStyled for="firstName" >First Name: </LabelStyled>
                    <InputStyled value={firstName}
                    onChange={e => updateFormData(e)}
                    type="text"
                    name="firstName"
                    required
                    />
                    </RowS>
                    <RowS>
                    <LabelStyled for="lastName">Last Name: </LabelStyled>
                    <InputStyled value={lastName}
                    onChange={e => updateFormData(e)}
                    type="text"
                    name="lastName"
                    />
                    </RowS>
                    <RowS>
                    <LabelStyled for="email" >Email: </LabelStyled>
                    <InputStyled value={email}
                    onChange={e => updateFormData(e)}
                    type="email"
                    name="email"
                    required
                    />
                    </RowS>
                    <RowS>
                    <TextAreaStyled value={message}
                    onChange={e => updateFormData(e)}
                    placeholder="Your message"
                    type="textarea"
                    name="message"
                    required
                    />
                    </RowS>
                    <ButtonStyled type="submit">Submit</ButtonStyled>
                </form>
                <span className = {`${toggleState}`} style={{
                        color: "green",
                        float: "right",
                        fontSize: "1em",
                        fontFamily: "Verdana, Arial, sans-serif",
                        padding: `5px`,
                        marginBottom: `10px`}}> Succesfully sent </span>
                    <span className = {`${toggleFailState}`} style={{
                        color: "red",
                        float: "right",
                        fontSize: "1em",
                        fontFamily: "Verdana, Arial, sans-serif",
                        padding: `5px`,
                        marginBottom: `10px`}}> Fill the form and try again </span>
                </FormStyled>
            </FormLayout>
        </ScreenHeight>
        )
};

export default ContactForm