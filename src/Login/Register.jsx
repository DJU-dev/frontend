import React, {useState} from 'react'
import styled from 'styled-components'
import Axios from "axios";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        reset();
    }

    const reset = () => {
        setInputs({
            username: "",
            email: "",
            password1: "",
            password2: "",
        });
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <Background>
            <LoginScreen onSubmit={onSubmit}>
                <Name>Register</Name>
                <Inputbox>
                    <Nameinput placeholder='Your Name' name="username" onChange={onChange} value={inputs.username}/>
                </Inputbox>
                <Inputbox>
                    <Idinput placeholder='Email' name="email" onChange={onChange} value={inputs.email}/>
                </Inputbox>
                <Inputbox>
                    <Passwordinput placeholder='Password' name="password1" type="password" onChange={onChange} value={inputs.password1}/>
                </Inputbox>
                <Inputbox>
                    <RPasswordinput placeholder='Repeat Password' name="password2" type="password" onChange={onChange} value={inputs.password2}/>
                </Inputbox>

                <LoginButton type="submit" value="Sign Up" />
            </LoginScreen>
        </Background>
    )
}

const Background = styled.div `
    width : 100vw;
    height : 100vw;
    background : black;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding-top: 5rem;
`
const LoginScreen = styled.form` 
    width : 30vw;
    height : 50vw;
    display : flex;
    flex-direction : column;
`

const Name = styled.div`
    color : white;
    font-size: 4em;
`
const Inputbox = styled.div`
    position: relative; 
    width: 100%;
`

const Idinput = styled.input`
    width : 100%;
    padding: 15px;
    margin-top : 2rem;
    border : 1px solid #18181c;
    outline: none;
    border-radius: 5px;
    background: #18181c;
    color : #fff;
    font-size: 1em;
`

const Passwordinput = styled.input`
    width : 100%;
    padding : 15px;
    margin-top : 2rem;
    border : 1px solid #18181c;
    outline: none;
    border-radius: 5px;
    background: #18181c;
    color : #fff;
    font-size: 1em;
`

const Nameinput = styled.input`
    width : 100%;
    padding : 15px;
    margin-top : 2rem;
    border : 1px solid #18181c;
    outline: none;
    border-radius: 5px;
    background: #18181c;
    color : #fff;
    font-size: 1em;
    
`

const RPasswordinput = styled.input`
    width : 100%;
    padding : 15px;
    margin-top : 2rem;
    border : 1px solid #18181c;
    outline: none;
    border-radius: 5px;
    background: #18181c;
    color : #fff;
    font-size: 1em;
`

const LoginButton = styled.input`
    width: 10rem;
    height: 3rem;
    background-image: linear-gradient(to right,#f9a432, #862ef7);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    font-size: 1rem;
    margin-top: 3rem;
    color : white;
    border-radius: 10px;
    cursor: pointer;
`

