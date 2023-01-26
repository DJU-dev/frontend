import React, {useState} from 'react'
import styled from 'styled-components'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import {useLocalStorage} from "@/utils/customHooks.jsx";

export default function Register() {
    const alert = useAlert();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});
    const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFieldErrors({});

        try {
            const response = await Axios.post("http://127.0.0.1:8000/accounts/registration/", inputs);
            const {data: {access_token}} = response;
            setJwtToken(access_token);
            navigate('/');
            alert.success('회원가입을 환영합니다');
        }
        catch (error) {
            if (error.response) {
                const {data: fieldsErrorMessages} = error.response;
                setFieldErrors(Object.entries(fieldsErrorMessages).reduce(
                    (acc, [fieldName, errors]) => {
                        acc[fieldName] = {
                            validateStatus: 'error',
                            help: errors.join(" ")
                        };
                        return acc;
                    }, {})
                )
                console.log(fieldsErrorMessages);
                alert.error('회원가입을 실패했습니다');
            }
        }
        setLoading(false);
        reset();
    }

    const reset = () => {
        const {username, email} = inputs;
        setInputs({
            username: username,
            email: email,
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
                    <ErrorMessage>{fieldErrors.username ? fieldErrors.username.help : ""}</ErrorMessage>
                </Inputbox>
                <Inputbox>
                    <Idinput placeholder='Email' name="email" onChange={onChange} value={inputs.email}/>
                    <ErrorMessage>{fieldErrors.email ? fieldErrors.email.help : ""}</ErrorMessage>
                </Inputbox>
                <Inputbox>
                    <Passwordinput placeholder='Password' name="password1" type="password" onChange={onChange} value={inputs.password1}/>
                    <ErrorMessage>{fieldErrors.password1 ? fieldErrors.password1.help : ""}</ErrorMessage>
                </Inputbox>
                <Inputbox>
                    <RPasswordinput placeholder='Repeat Password' name="password2" type="password" onChange={onChange} value={inputs.password2}/>
                    <ErrorMessage>{fieldErrors.password2 ? fieldErrors.password2.help : ""}</ErrorMessage>
                    <ErrorMessage>{fieldErrors.non_field_errors ? fieldErrors.non_field_errors.help : ""}</ErrorMessage>
                </Inputbox>

                <LoginButton type="submit" value={loading ? "loading.." : "Sign Up"} />
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

const ErrorMessage = styled.p`
  color: red;
`

