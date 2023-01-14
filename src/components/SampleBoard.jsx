import styled, {keyframes} from 'styled-components';
import React, {useState, useEffect} from "react"
const animate1 = keyframes`    
    0%{
        transform: translate(-50%,-50%) rotate(0deg);
    }
    100%{
        transform: translate(-50%,-50%) rotate(360deg);
    }            
`;

const animate2 = keyframes`    
    0%{
        transform: translate(-50%,-50%) rotate(360deg);
    }
    100%{
        transform: translate(-50%,-50%) rotate(0deg);
    }            
`;


const BackImg = styled.div`
    position:fixed;
    width: 100%;
    height: 100vh;
    right: 10vh;    
    opacity: 0.3;
    background: url(${props=>props.url}) center center / cover;
    transform: matrix(-1, 0, 0, 1, 0, 0);   
    z-index: -3;
`;

const Container = styled.form`    
    position: relative;    
    display: flex;        
    left: 10rem;
    top: 3rem;      
    overflow: hidden;
    background: none;
    z-index:10; 
    height: 85vh;
    width:80%;
    border: 1px solid white;
`;


const ImgInputLabel = styled.label`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    opacity:1;
    z-index:10; 

    &:hover{
        
        .imgbox{           
            &> img{
                opacity: 1;
            }
        }
        .imgbox::before{
            animation-play-state: running;
        }        
        
    }

    &> div{
        &.imgbox{
            position: relative;
            top: 2rem;            
            width: 20rem;
            height: 20rem;            
            background-color: #0b0b0b;
            transition: 0.5s;
            z-index:10;
            overflow: hidden;
            display:flex;
            justify-content:center;
            align-items: center;

            & > img {
                position: absolute;
                width: 5rem;
                z-index: 1;
                filter: invert(1);
                opacity: 0.5;
                transition: 0.5s;
            }
        }
        &.imgbox::before{
            content: '';
            position:absolute;
            top:50%;
            left:50%;
            width:50rem;
            height:20rem;
            transform: translate(-50%, -50%);
            background: linear-gradient(transparent,#4000ff,#8054FF,transparent);
            animation: ${animate2} 2s linear infinite;
            animation-play-state: paused;
        }
        &.imgbox::after{
            content:'';
            position:absolute;
            inset: 0.2rem;
            background-color: #000;   
        }        
    }    
`;

const ImgInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;  
`;



function SampleBoard(){
    const [imgfile, setImgfile] = useState("../../src/assets/img/icon/gallery.png");
    
    const imgChange = () => {

    }

    return ( 
         <div>
            <BackImg url={'../../src/assets/img/background/background01.jpg'} /> 
            <Container method="post" enctype="multipart/form-data">                
                <ImgInputLabel url={"../../src/assets/img/icon/gallery.png"} for="addImg">
                <div className='imgbox'>
                    <img src={imgfile}/>
                </div>
                </ImgInputLabel>
                {/*
                <ImgInput
                id="addImg"
                type="file" 
                accept="image/*" 
                onchange="loadFile(this)"
                url={"../../src/assets/img/icon/gallery.png"}
                >
                </ImgInput>
    */}
                <ImgInput id="addImg" type="file"/>
           </Container>
        </div>
    )
}

export default SampleBoard;