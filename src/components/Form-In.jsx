import styled, {keyframes} from 'styled-components';
import React, {useState, useEffect, useRef} from "react"

const animate = keyframes`    
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
    border-radius: 1rem;
    background: linear-gradient(-188deg,  rgba(59, 59, 59, 0.3) 0%, rgba(58, 58, 71, 0.8) 90%);
    box-shadow:  10px 10px 10px 10px rgba(0, 0, 0, 0.25);    
    backdrop-filter: blur(1px) invert(60%);
`;

const ImgInputLabel = styled.label`
    position: relative;
    cursor: pointer;
    display: flex;
    top: 0.4rem;
    left: 0.4rem;
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
            border-radius: 10px;
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
            background: linear-gradient(transparent,#000000,#ff9e9e,transparent);
            animation: ${animate} 2s linear infinite;
            animation-play-state: paused;
            border-radius: 10px;
        }
        &.imgbox::after{
            content:'';
            border-radius: 10px;
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

const TagContainer = styled.div`
    position: relative;
    margin-top: 21rem;
    left: 1rem;

    &> div{
        &.btn{
            cursor: pointer;
            position: absolute; 
            z-index: 10;
            width:2rem;
            height: 1.3rem;            
            top: 0.5rem;
            left: 16rem;
            background-color: white;
            border-radius: 5px;
        }
    }
`;

const TagInput = styled.input`
    position: relative;
    width: 18rem;
    height: 2rem;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TagStorage = styled.div`
    position: relative;
    display: flex;
    width: 20rem;
    top: 1rem;
    flex-grow: row;
    flex-wrap: wrap;
    overflow: auto;
       

    &> div{
        position: relative;    
        display: inline-block;

        margin: 0.5rem;     
        width: auto;
        height: auto;
        padding: 0.5rem;
        padding-right: 1.5rem;        
        
        text-align: center;
        font-size: 15px;
        border: 0;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
        background-color: rgb(233, 233, 233);
        box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);

        &::after {            
            position: relative;
            display: inline-block;
            cursor: pointer;            
            left: 1rem;
            padding: 0 0.2rem;
            padding-bottom:0.2rem;
            
            border-radius: 10px;
            content: "\\00d7"; 
            font-size:1.3rem;
            font-weight: 900;
            background-color: none;
            
        }
    }
`;


const ContentContainer = styled.div`
    position: relative;
    margin: 0.8rem;    
    width: 74rem;
`;
const SubbitButton = styled.div`
    position: absolute;
    
    left: 73.6rem;
    width: 4rem;
    height: 2rem;
    cursor: pointer;
    
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
    
`;

const FeedInput = styled.input`
    position: relative;
    margin: 1rem;
    width: 60rem;
    height: 5rem; 

    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Map = styled.div`
    position: relative;
    width: 78rem;
    height: 61rem;
    border: 1px solid white;
    border-radius: 15px;
`;


function Form_In(){
    {/* 이미지 바꾸는 역할 할거임. DOM쓸줄 몰라서,,,  */}
    const [imgfile, setImgfile] = useState("../../src/assets/img/icon/gallery.png");

    const imgChange = () => {
        
    };
    
    useEffect(() => {}, [imgfile]);
    {/* 태그 데이터 */}
    const tagId = useRef(0);
    const [tagValue, setTagValue] = useState([{}]);
    
    const tagStore = () => {
        const taglist = tagValue.map((tagValue) => (
            <div key={tagValue.tagid}>{tagValue.tag}</div>          
        ));            
        return taglist;        
    }


    const tagCreate = () => { 
        var inTagValue = document.getElementById("inputTag").value;
        if(inTagValue === null || inTagValue === undefined ||inTagValue === "") return;
        
        console.log("Create:", tagValue);
         document.getElementById("inputTag").value = null;
        
        setTagValue(() => [...tagValue,{
            tagid:tagId.current++,
            tag:inTagValue,
        }]);
        console.log(inTagValue); 
    }
   
    const tagDelete = () => {
        
    }
    
    const activeEnter = (e) => {
        if(e.key === "Enter") tagCreate();
    }
    
    return ( 
         <div>
            <BackImg url={'../../src/assets/img/background/background01.jpg'} />

            <Container method="post" enctype="multipart/form-data">
                {/* 이미지 입력 */}
                <ImgInputLabel url={"../../src/assets/img/icon/gallery.png"} htmlfor="addImg">
                <div className='imgbox'><img src={imgfile}/></div>
                </ImgInputLabel>
                <ImgInput id="addImg" type="file" accept="image/*" onChange={imgChange}/>

                {/* 태그입력 */}
                <TagContainer>
                    <div className='btn' onClick={tagCreate}>확인</div>
                    <TagInput 
                        type="text"
                        id='inputTag'
                        size="10"
                        onchange={tagCreate}
                        onKeyDown={activeEnter}                 
                        placeholder="#태그를 입력해주세요"/>                    
                    <TagStorage>
                        {tagStore()}
                        <div>das</div>                       
                    </TagStorage>
                </TagContainer>
                {/* 피드 입력 및 맵 지정 */}
                <ContentContainer>
                    <SubbitButton />
                    <FeedInput 
                    type="text" 
                    placeholder="말을 남겨보세요."/>
                    <Map />
                </ContentContainer>

           </Container>
        </div>
    )
}

export default Form_In;