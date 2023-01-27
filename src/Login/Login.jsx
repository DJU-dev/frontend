import React, {useState} from 'react'
import styled from 'styled-components'
import { useAlert } from 'react-alert'
import {useNavigate} from "react-router-dom";
import Axios from "axios";
import {useLocalStorage} from "@/utils/customHooks.jsx";
import { Link } from 'react-router-dom';

export default function Login() {
    const alert = useAlert();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});
    const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFieldErrors({});

        try {
            const response = await Axios.post("http://127.0.0.1:8000/accounts/login/", inputs);
            const {data: {access_token, user}} = response;
            console.log(access_token)
            setJwtToken(access_token);
            navigate('/');
            alert.success(`${user.username} 님 환영합니다.`);
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
                alert.error('로그인을 실패했습니다');
            }
        }
        setLoading(false);
        reset();
    }

    const reset = () => {
        const {username} = inputs;
        setInputs({
            username: username,
            password: ""
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
                <Name>Login</Name>
                <Inputbox>
                    <Idinput placeholder='Your Name' name="username" onChange={onChange} value={inputs.username}/>
                    <ErrorMessage>{fieldErrors.non_field_errors ? fieldErrors.non_field_errors.help : ""}</ErrorMessage>
                </Inputbox>
                <Inputbox>
                    <Passwordinput type="password" placeholder='Password' name="password" onChange={onChange} value={inputs.password}/>
                    <ErrorMessage>{fieldErrors.password ? fieldErrors.password.help : ""}</ErrorMessage>
                </Inputbox>

                <ButtonTab>                
                <LoginButton>{loading ? "loading.." : "Login"}</LoginButton>
                
                    <Link to="/frontend/signup">
                        <SignUpButton>Sign up</SignUpButton>
                    </Link>
                </ButtonTab>
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
    height : 30vw;
    display : flex;
    flex-direction : column;
    background-color: black;
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

const LoginButton = styled.button`
    width: 10rem;
    height: 3rem;
    background-image: linear-gradient(to right,#f9a432 ,#862ef7);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    font-size: 1rem;
    margin-top: 3rem;
    color : white;
    border-radius: 10px;
    cursor: pointer;
`

const SignUpButton = styled.button`
    width: 10rem;
    height: 3rem;
    background-image: linear-gradient(to right,#f9a432 ,#862ef7);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    font-size: 1rem;
    margin-top: 3rem;
    color : white;
    border-radius: 10px;
    cursor: pointer;
    
`

const ButtonTab = styled.div`
  display: flex;
  justify-content: space-between;  
  width: 25rem;
`;

const ErrorMessage = styled.p`
  color: red;
`

