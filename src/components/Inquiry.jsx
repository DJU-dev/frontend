import styled from "styled-components";
import React, {useState, useEffect} from "react";


const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #939393;
`;

const Board = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    right: ${(props) => props.isBoard ? 0 : 49.7}%;
    transition: all 0.7s ease-in-out;
    display: flex;
    background-color: #EFEFEF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Tab = styled.div`
    position: relative;
    width: 100vw;
    height: 4.3vh;
    background-color: #848484;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    overflow: wrap;

    & > div {
        &.menu{            
            position: relative;
            display: flex;
            width:4.3vh;            
            height:4.3vh;
            right:0.4rem;;                     
            align-items: center;
            cursor: pointer;
            &> a {
                position: relative;  
                background-color: #000000;
                border-radius: 100%;                    
                margin-right:0.4rem;
                width: 0.47rem;
                height: 0.47rem;               
            }
        }      

        &.back{
            position: relative;
            width:5%;
            height:4.3vh;
            left:1rem;
            cursor: pointer;
            > a {
                &.s1{
                    position: absolute;            
                    background-color: #000;
                    border-radius: 20px;
                    transform: rotate(-45deg); 
                    width: 1rem;
                    height: 0.5rem;            
                    bottom: 49%;
                }
                &.s2{
                    position: absolute;            
                    background-color: #000;
                    border-radius: 20px;
                    transform: rotate(-135deg);
                    width: 1rem;
                    height: 0.5rem;            
                    top: 49%;
                } 
            }
        }
    }
`;

const BackButton = styled.div`
    background-color: rgb(132, 132, 132);
    position: absolute;

    top: 35vh;
    left: 99%;
    width: 4rem;
    height: 7rem;
    border-radius: 0 10px 10px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    > a {
        &.s1{
            position: absolute;            
            background-color: #000;
            border-radius: 20px;
            transform: rotate(${(props) => props.isBoard ? 135 : 45}deg); 
            width: 1.4rem;
            height: 0.7rem;            
            top: 41%;
            transition: 1s;            
        }
        
        &.s2{
            position: absolute;            
            background-color: #000;
            border-radius: 20px;
            transform: rotate(${(props) => props.isBoard ? 45 : 135}deg);
            width: 1.4rem;
            height: 0.7rem;
            top: 49%;
            transition: 1s;            
        }        
    }
`;


function Inquiry(){
    const [board, setBoard] = useState(false);

    const boardChange = () => {
        setBoard(() => !board);            
    };

    useEffect(() => {}, [board]);

    return (
        <Container>
            <Board isBoard={board}>
                <Tab>
                <div className="back" onClick={boardChange}>
                        <a className="s1"/>
                        <a className="s2"/>
                    </div>
                    <div className="menu">
                        <a>　</a><a>　</a><a>　</a>
                    </div>
                </Tab>
                <BackButton onClick={boardChange} isBoard={board}>
                    <a className="s1"/>
                    <a className="s2"/>
                </BackButton>
            </Board>
        </Container>
    )
}

export default Inquiry;