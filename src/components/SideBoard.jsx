import styled from "styled-components";
import React, {useState, useEffect} from "react";

const Container = styled.div`
    width: 40%;
    height: 100%;
    position: absolute;
    z-index:10;
    background-color: none;
    right: 0.5%;
`;

const Board = styled.div`
    position: absolute;
    width: 100%;
    height: 93vh;    
    visibility: ${(props) => props.isBoard ? "none" : "hidden"};
    z-index:5;
    flex-flow: column wrap;
    
    top: ${(props) => props.isBoard ? 4 : -300}%;
    transition: 0.8s ease-in-out;    
    background: linear-gradient(90deg, #FFFFFF 0%, #FFECFF 97.22%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;

const Tab = styled.div`
    position: absolute; 
    right: 40%;

    z-index: 10;
    width: 9rem;
    height: 1.8rem;

    background: linear-gradient(90deg, #FFFFFF 0%, #FFECFF 97.22%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: space-evenly;
    overflow: wrap;
    transition: 0.3s;
    & > img {
        position: relative;        
        cursor: pointer;
        margin: 0px 1rem;
        &.back{
            transform: rotate(${props=> props.isBoard ? "90deg" : "270deg"});
            transition: 0.3s;
        }
              
    }
`;


const WritingBox = styled.div`    
    position: relative;
    display: flex;
    flex-flow: column wrap;
    margin: 0.2rem;
    width: 98%;
    height: 98%;    
    &> a{
       position: relative;
       width: 90%;
       margin-top: 0.4rem;
       margin-left: 2rem;
       margin-bottom: 2rem;
       
    }  
    &> div{            
        &.profilebox{
            position: relative;
            display: flex;    
            flex-wrap: wrap;
            margin-top: 1.3rem;
            margin-left: 1.3rem;         
            width: 98%;
            height: 5rem;            

            .profile {
                position: absolute;          
                border-radius:50%;
                margin: 0.5rem;
                background: url(${props=>props.url}) center center / cover;
                background-size: 120%;
                width: 4rem;
                height: 4rem;
                background-repeat: no-repeat;
            }
            &> p{
                left: 5rem;                
                position: relative;
                width: 40rem;
                margin: 0.1rem;
                padding-top: 0.4rem;
                padding-left: 0.4rem;
                height: 1.6rem;
                font-size: 1.4rem;
            }
            &> a{                
                left: 5rem;
                position: relative;
                width: 40rem;
                
                
                padding-left: 0.4rem;
                height: 1.6rem;
                font-size: 0.8rem;
            }
        }
    }
`;

const Imgbox = styled.div`
    background: url(${props=>props.url}) center center / cover;
    position: relative;
    display: flex;
    margin-top: 0.4rem;
    margin-left: 2rem;;
    width: 17rem;
    height:17rem;
`;

function SideBoard(){
    const [board, setBoard] = useState(true);

    const boardChange = () => {
        setBoard(() => !board);            
    };

    useEffect(() => {}, [board]);

    return (   
        <Container>
            <Tab isBoard={board}>
                <img 
                src="../../../src/assets/img/icon/chevron-icon.png" 
                className="back" 
                onClick={boardChange} />                        
                <img 
                src="../../../src/assets/img/icon/point3-icon.png" 
                className="menu"
                onClick={boardChange} />                    
            </Tab>
            <Board isBoard={board}>                
                <WritingBox url={'../../src/assets/img/icon/profile01.png'}>                    
                    <div className="profilebox">
                        <img className="profile"/>
                        <p>Mike</p>
                        <a>2023.01.16</a>
                    </div>
                      <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</a>  
                      <Imgbox url={'../../src/assets/img/sample01.jpg'}/>
                </WritingBox>
                              
            </Board>
        </Container>
    )
}

export default SideBoard;