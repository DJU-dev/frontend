import styled from "styled-components";
import React,{ useState, useEffect } from "react";

const Container = styled.div`
    position: relative;
    display:flex;
    width:100%;
    height:55rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: none;
`;

const Formground = styled.form`
    position: relative;
    display:block;
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
    background-color: #8A8A8A;

    
`;

const Content = styled.input`
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
    
    background-color: #8A8A8A;
`;



const Prev = styled.a`
    position:absolute;
    color:white;    
    top:0;

    margin-top: 3.5rem;
    margin-right: 36rem;
    
    cursor: pointer;
    z-index: 4;

`;

const Next = styled.a`
    position:absolute;
    color:white;
    top:0;

    margin-top: 3.5rem;
    margin-left: 36rem;    
    
    cursor: pointer;  
    z-index: 4;  
`;

function Form_In(){
    const [NumForm, setNumForm] = useState(1);

    useEffect(() => {
        if(NumForm <= 0)
            window.history.back();
        console.log(NumForm);
    },[NumForm]);

    const PrevNum = () => {
        setNumForm((NumForm) => NumForm - 1);        
    }
    const NextNum = () => {
        setNumForm((NumForm) => NumForm + 1);  
    }

    return (
    <Container>        
        <Prev onClick={PrevNum}>이전</Prev>
        <Next onClick={NextNum}>다음</Next>
        <Formground>            
            <Title 
                type={NumForm == 2? "text" : "hidden"}
                placeholder="제목을 입력하세요"
            />
            <Content 
                type={NumForm == 2? "file" : "hidden"}
                placeholder="폴더에서 사진을 선택하거나 드래그하여 추가해주세요."
            />            
        </Formground>        
    </Container>    
    )
}

export default Form_In;