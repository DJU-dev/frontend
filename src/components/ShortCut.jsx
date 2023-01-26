import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { BiCube } from "react-icons/bi";

function ShortCut() {
    var colorList = ["#89ec5b","#5b98eb","#eb5ea5"];
    return(
        <Body>
            <Name>Short cut</Name>
            <Container>
                
                <Box color={"#89ec5b"}>
                    <Content>
                        <Icon color1={"#89ec5b"}><BiCube/></Icon>          
                        <Title>주변 식당위치</Title>
                        <Text>이 박스에 대한 설명을 해준다.</Text>
                    </Content>
                </Box>
               
                <Box color={"#5b98eb"}>
                    <Content>
                        <Icon2 color2={"#5b98eb"}><BiCube/></Icon2>          
                        <Title>버스 정류장 위치</Title>
                        <Text>이 박스에 대한 설명을 해준다.</Text>
                    </Content>
                </Box>

                <Box color={"#eb5ea5"}>
                    <Content>
                        <Icon3 color3={"#eb5ea5"}><BiCube/></Icon3>          
                        <Title>지하철역 위치</Title>
                        <Text>이 박스에 대한 설명을 해준다.</Text>
                    </Content>
                </Box>

            </Container>
        </Body>
    );
}
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: black;
    flex-wrap: wrap;
    height: 100vh;
    box-sizing: border-box;
    padding-left: 7rem;
    padding-top: 4.5rem;
`
const Name = styled.h2`
    color:white;
    font-size: 4rem;
`

const Box = styled.div`
    position: relative;
    width: 300px;
    height: 350px;
    background-color: #2e2e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        content: ' ';
        position: absolute;
        inset: -10px 50px;
        border-top:4px solid ${props => props.color};
        border-bottom:4px solid ${props => props.color};
        z-index: -1;
        transform:skewY(15deg);
        transition: 0.5s ease-in-out;
    }
    &:hover:before {
        transform: skewY(0deg);
        inset: -10px 40px;
    
    }
    &:after {
        content: ' ';
        position: absolute;
        inset: 60px -10px;
        border-left: 4px solid  ${props => props.color};
        border-right: 4px solid  ${props => props.color};
        transition: 0.5s ease-in-out;
        transform: skew(15deg);
        z-index: -1;
        transition: 0.5s ease-in-out;
    }
    &:hover:after {
        transform: skew(0deg);
        inset: -10px 40px;
    }
`
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    gap : 70px;
    flex-wrap: wrap;
    padding: 60px 0;
    margin-top: 3rem;
    z-index: 1;
`
const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap : 20px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Icon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #2e2e2e;
    transition: 0.5s ease-in-out;
    color: ${ props => props.color1 };
    box-shadow: 0 0 0 4px #2e2e2e,0 0 0 6px ${ props => props.color1 };
    ${Box}:hover &{ 
        background:${ props => props.color1 };
        box-shadow: 0 0 0 4px #2e2e2e,0 0 0 300px ${ props => props.color1 };
        color : #2e2e2e;
    }
`

const Icon2 = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #2e2e2e;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 4px #2e2e2e,0 0 0 6px ${ props => props.color2 };
    color: ${ props => props.color2 };
    ${Box}:hover &{ 
        background:${ props => props.color2 };
        box-shadow: 0 0 0 4px #2e2e2e,0 0 0 300px ${ props => props.color2 };
        color : #2e2e2e;
    }
`

const Icon3 = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #2e2e2e;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 4px #2e2e2e,0 0 0 6px ${ props => props.color3 };
    color: ${ props => props.color3 };
    ${Box}:hover &{ 
        background:${ props => props.color3 };
        box-shadow: 0 0 0 4px #2e2e2e,0 0 0 300px ${ props => props.color3 };
        color : #2e2e2e;
    }
`



const Title = styled.h3`
    font-size: 1.5em;
    color : #fff;
    font-weight:  500;
    transition: 0.5s ease-in-out; 
    ${Box}:hover &{ 
        color:#2e2e2e;
    }
`

const Text = styled.p`
    color:#777;
    transition: 0.5s ease-in-out;
    ${Box}:hover &{
        color : #2e2e2e;
    }
`

export default ShortCut;