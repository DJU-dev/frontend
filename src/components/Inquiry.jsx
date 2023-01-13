import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #939393;
`;

const Board = styled.div`
    width: 50%;
    height: 100%;
    background-color: #EFEFEF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Tab = styled.div`
    width: 100%;
    height: 4.7vh;
    background-color: #848484;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & > div {
        
        &.back{
            > a {
                &.s1{
                    position: absolute;            
                    background-color: #000;
                    border-radius: 20px;
                    transform: rotate(-45deg); 
                    width: 1.4rem;
                    height: 0.7rem;            
                    bottom: 49%;
                }                
                &.s2{
                    position: absolute;            
                    background-color: #000;
                    border-radius: 20px;
                    transform: rotate(-135deg);
                    width: 1.4rem;
                    height: 0.7rem;            
                    top: 49%;
                } 
            }
        }
    }
`;

const BackButton = styled.div`
    background-color: #848484;
    position: relative;

    top: 35vh;
    left: 48vw;
    width: 4rem;
    height: 8rem;
    border-radius: 0 10px 10px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    > a {
        &.s1{
            position: absolute;            
            background-color: #000;
            border-radius: 20px;
            transform: rotate(-45deg); 
            width: 1.4rem;
            height: 0.7rem;            
            bottom: 49%;
        }
        
        &.s2{
            position: absolute;            
            background-color: #000;
            border-radius: 20px;
            transform: rotate(-135deg);
            width: 1.4rem;
            height: 0.7rem;            
            top: 49%;
        }        
    }
`;


function Inquiry(){
    return (
        <Container>
            <Board>
                <Tab>

                </Tab>
                <BackButton>
                    <a className="s1"/>
                    <a className="s2"/>
                </BackButton>
            </Board>
        </Container>
    )
}

export default Inquiry;