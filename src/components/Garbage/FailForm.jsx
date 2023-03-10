import styled, { keyframes } from "styled-components";
import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const animate = keyframes`    
    0%{
        transform: translateX(1.4%);
    }
    20%{
        transform: translateX(0.3%);
    }
    30%{
        transform: translateX(0.5%);
    }
    40%{
        transform: translateX(0.2%);
    }
    50%{
        transform: translateX(0.3%);
    }
    100%{
        transform: translateY(0%); 
    }            
`;

const Container = styled.div`
    position: relative;
    display:${props=>props.hidden?"none":"flex"} ;
    width:100%;
    height:55rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: none;
    z-index: 1;    
    &:hover {
        pointer-events: none;
    }    
`;

const Formground = styled.form`
    position: relative;
    display: block;
    width:40rem;
    height:90%;
    border-radius: 0.5rem;
    justify-content: center;
    overflow: wrap;
    background-color: #434343;
`;

const Title = styled.input`
    position: relative;    
    height: 2rem;
    width: 85%;
    margin-top: 3rem;
    margin-left: 7%;
    border: 0px none;
    border-radius: 0.5rem;    
    border-color: none;
    color: #434343;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem;   
    background-color: #8A8A8A;
    animation: ${animate} 1.5s;
    transition: ease-out;
    &:hover {
        pointer-events: auto;
    }
     
`;

const ContentFile = styled.input`
    position: relative;    
    height: 80%;
    width: 85%;
    margin-top: 2rem;
    margin-left: 7%;
    border: 0px none;
    border-radius: 0.5rem;
    border-color: none;
    font-size: 0.5rem;
    overflow:hidden;
    white-space:pre-line;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem;
    cursor: pointer;

    background-color: #8A8A8A;
    animation: ${animate} 1.5s;
    transition: ease-out;
    &:hover {
        pointer-events: auto;
    }
`;

const LocationBox = styled.div`
    position: relative;
    display: ${props => props.hidden ? "flex" : "none"};
    align-items: center;
    height: 4.5%;
    width: 85%;
    margin-top: 2.4rem;
    background-color: none;
    margin-left: 7%;
`;

const ImgBox = styled.div`
    display: ${props => props.hidden ? "flex" : "none"};
    height: 40%;
    width: 85%;
    margin-top: 1rem;
    margin-left: 7%;
    background-color:wheat;
    border-radius:1.4rem;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem;
    animation: ${animate} 1.5s;
    transition: ease-out;
`;

const ContentText = styled.div`
    display: ${props => props.hidden ? "flex" : "none"};
    height: 40%;
    width: 85%;
    margin-top: 1rem;
    margin-left: 7%;
    background-color:#8A8A8A;
    border-radius:1.4rem;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem;
    animation: ${animate} 1.5s;
    transition: ease-out;
`;


const MapIcon = styled.div`
    position: relative;    
    height: 2rem;
    width: 1.5rem;
    margin-right: 0.5rem;
    background: url(${props=>props.url}) center center / cover; 
    cursor: pointer;
    &:hover{
        pointer-events: auto;
    }
`;

const Map = styled.div`
    position:relative;
    margin-right: 0.5rem;
    background: white;
    border-radius: 0.3rem;
    font-weight:800;
    padding: 0.4rem 0.3rem 0.5rem 0.5rem;
    &::after{
        content: "  \\00d7";
        cursor: pointer;        
        padding-right: 0.3rem;
        padding-bottom: 0.2rem;
        
        margin-left: 0.7rem;
        margin-bottom: 0.4rem;

        color:white;
        font-weight:800;
        background-color: #8f8f8f;
        border-radius: 50%;
        
        &:hover{
            pointer-events: auto;
        }
    }
`;

const Prev = styled.a`
    position:absolute;
    color:white;    
    top:0;

    margin-top: 3.5rem;
    margin-right: 36rem;
    
    cursor: pointer;
    z-index: 4;
    &:hover{
        pointer-events: auto;
    }
`;

const Next = styled.a`
    position:absolute;
    color:white;
    top:0;

    margin-top: 3.5rem;
    margin-left: 36rem;    
    
    cursor: pointer;  
    z-index: 4;
    &:hover{
        pointer-events: auto;
    }
`;

function Form_In(){
    const [NumForm, setNumForm] = useState(1);

    useEffect(() => {
        if(NumForm <= 0) window.history.back();
        if(NumForm >= 3) {<Link to="/"></Link>}
    },[NumForm]);

    const PrevNum = () => {
        setNumForm((NumForm) => NumForm - 1);        
    }
    const NextNum = () => {
        setNumForm((NumForm) => NumForm + 1);  
    }

    return (
    <Container hidden={NumForm >= 3}>        
        <Prev onClick={PrevNum}>??????</Prev>
        <Next onClick={NextNum} href={NumForm >=3? "/" : null}>{NumForm>=2?"??????":"??????"}</Next>        
        <Formground>            
            <Title 
                type={NumForm == 1? "text" : "hidden"}
                placeholder="????????? ???????????????"
            />
            <ContentFile 
                type={NumForm == 1? "file" : "hidden"}
                placeholder="???????????? ????????? ??????????????? ??????????????? ??????????????????."
            />       
            <LocationBox hidden={NumForm==2}>
                <MapIcon url={'../../src/assets/img/icon/map-icon.png'}/>
                <Map>California</Map>
            </LocationBox>
            <ImgBox hidden={NumForm==2}>?????????</ImgBox>
            <ContentText hidden={NumForm==2}>
                ??????
            </ContentText>
        </Formground>      
    </Container>    
    )
}

export default Form_In;
