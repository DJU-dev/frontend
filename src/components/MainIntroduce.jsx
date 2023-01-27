import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none; 
    width: 100%;
    height: 50rem;
    z-index: 40;
    pointer-events: none;
`

const Blur = styled.div`
position: absolute;
width: 70rem;
height: 60rem;
top: -8rem;
background: radial-gradient(50% 50% at 50% 50%, #222228 5%, rgba(34, 34, 40, 0) 100%);

`

const Sign = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;    
    align-items: center;
    background-color: none;
    width:52rem;
    height:35rem;    
    top: 3rem;
    &> div{
        margin: 1rem;
        &.title{
            background-color: none;
            width:50rem;
            height:13rem;    
            top: 3rem;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 5rem;
            line-height: 6rem;
            text-align: center;
            color: #FFFFFF;

        }
        &.content{
            background-color: none;
            width:50rem;
            height:5rem;                
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 2rem;

            text-align: center;
            color: #9E9E9E;
        }
        &.more{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0.2rem 0.4rem;            
            background: linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%);
            border-radius: 5px; 
            width:8rem;
            height:3rem;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
        }
    }    
`

function MainIntroduce(){
    return(
        <Container>
            <Blur />
            <Sign>
                <div className="title">Uour spirit of Picture in World</div>
                <div className="content">Welcome to Squid! Our service is a platform that shares real-time situations in various regions. Register your photos now.</div>
                <div className="more">Read more</div>
            </Sign>
        </Container>
    )
}

export default MainIntroduce;