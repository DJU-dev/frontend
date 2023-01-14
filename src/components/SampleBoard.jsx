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
    top: 2rem;          
    background: none;
    z-index:10; 
    height: 70rem;
    width:100rem;
    border: 1px solid white;
`;

const ImgInputLabel = styled.label`
    position: relative;
    cursor: pointer;
    display: flex;
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
            position: absolute;                       
            width: 20rem;
            height: 20rem;            
            background-color: #0b0b0b;
            transition: 0.5s;
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
            width:30rem;
            height:30rem;
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

const TagStorage = styled.div`
    position: relative;
    display: flex;
    width: 20rem;
    flex-grow: row;
    flex-wrap: wrap;
    overflow: auto;
`;

const TagContainer = styled.div`
    position: relative;
    
    margin-top: 21rem;
    left: 1rem;
`;

const TagInput = styled.input`
    position: relative;
    
    width: 18rem;
    height: 2rem;
`;

const TagKeyword = styled.div`
    position: relative;
    
    margin: 1rem; 
    left: -1rem;
    width: 4rem;
    height: 2rem;
    background-color: white;
    border-radius: 10px;
`;

const ContentContainer = styled.div`
    position: relative;
    margin: 0.8rem;
    border: 1px solid white;
    width: 74rem;
`;
const SubbitButton = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 74.6rem;
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    background-color: white;
`;

const FeedInput = styled.input`
    position: relative;
    margin: 1rem;
    width: 60rem;
    height: 5rem;
    border-radius: 2rem;
`;

const Map = styled.div`
    position: relative;
    width: 78rem;
    height: 61rem;
    border: 1px solid white;
    
`;


function SampleBoard(){
    {/* 훅으로 이미지 바꾸는 역할 할거임. DOM쓸줄 몰라서,,,  */}
    const [imgfile, setImgfile] = useState("../../src/assets/img/icon/gallery.png");

    const imgChange = () => {
        
    };
    useEffect(() => {}, [imgfile]);

    {/* 태그 데이터 */}

    return ( 
         <div>
            <BackImg url={'../../src/assets/img/background/background01.jpg'} />

            <Container method="post" enctype="multipart/form-data">
                {/* 이미지 입력 */}
                <ImgInputLabel url={"../../src/assets/img/icon/gallery.png"} for="addImg">
                <div className='imgbox'><img src={imgfile}/></div>
                </ImgInputLabel>
                <ImgInput id="addImg" type="file" accept="image/*" onChange={imgChange}/>

                {/* 태그입력 */}
                <TagContainer>
                        <TagInput type="text" value="#태그를 입력해주세요"/>
                    <TagStorage>
                        {/* 함수 및 배열 반복문 이용하기 */}
                        <TagKeyword>fd</TagKeyword>                    
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                        <TagKeyword>fd</TagKeyword>
                    </TagStorage>
                </TagContainer>
                {/* 피드 입력 및 맵 지정 */}
                <ContentContainer>
                    <SubbitButton />
                    <FeedInput type="text" vlaue="말을 남겨보세요."/>
                    <Map />
                </ContentContainer>

           </Container>
        </div>
    )
}

export default SampleBoard;