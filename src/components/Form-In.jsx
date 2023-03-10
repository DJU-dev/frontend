import styled, {keyframes} from 'styled-components';
import React, {useState, useEffect, useRef} from "react"
import {MapMarker, Map} from "react-kakao-maps-sdk";

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
    opacity: 0.8;
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
    border-radius: 0.5rem;
    background: linear-gradient(-188deg,  rgba(59, 59, 59, 0.3) 0%, rgba(58, 58, 71, 0.8) 90%);
    box-shadow:  10px 10px 10px 10px rgba(0, 0, 0, 0.25);    
    backdrop-filter: blur(1px) invert(20%);
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
            background-color: none;
            border-radius: 5px;
            font-weight: 800;
            color: white;
        }
    }
`;

const TagInput = styled.input`
    position: relative;
    width: 18rem;
    height: 2rem;
    font-size: 15px;
    color: white;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(81, 81, 81);
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
    &::placeholder{
        color: white;
    }
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
        color: white;
        margin: 0.5rem;     
        width: auto;
        height: auto;
        padding: 0.3rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;       
        
        text-align: center;
        font-size: 15px;
        font-weight: 800;
        border: 0;
        border-radius: 50px;
        outline: none;
        padding-left: 10px;
        background-color: rgb(81, 81, 81);
        box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);

        &> div {            
            position: relative;
            display: inline-block;
            cursor: pointer;                     
            left: 0.4rem;
            padding: 0 0.2rem;
            padding-bottom:0.2rem;
            width:0.7rem;
            height: 0.5rem;
            border-radius: 10px;            
            font-size:1.3rem;
            font-weight: 900;
            background-color: none;
            color: black;
        }
    }
`;

const ContentContainer = styled.div`
    position: relative;
    margin: 0.8rem;    
    width: 74rem;
`;

const SubbitButton = styled.a`
    position: absolute;    
    text-align: center;
    left: 76.4rem;
    width: 2rem;
    
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 800;
    border: 0;
    border-radius: 0.3rem;
    outline: none;    
    background-color: none;
`;

const FeedInput = styled.input`
    position: relative;
    margin: 1rem;
    width: 60rem;
    height: 5rem; 
    color: white;
    font-size: 15px;
    border: 0;
    border-radius: 0.3rem;
    outline: none;
    padding-left: 10px;
    background-color: rgb(81, 81, 81);
    box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
    &::placeholder{
        color: white;
    }
`;

const MapIn = styled.div`
    position: relative;
    width: 78rem;
    height: 61rem;
    border: 1px solid white;
    border-radius: 0.3rem;
`;

function Form_In(){
    {/* ????????? ????????? ?????? ?????????. DOM?????? ?????????,,,  */}
    const [imgfile, setImgfile] = useState("../../src/assets/img/icon/gallery.png");

    const imgChange = () => {
        
    };
    
    useEffect(() => {}, [imgfile]);

    {/* ?????? ????????? */}    
    const [tagValue, setTagValue] = useState([{tagid:null,tag:null}]);
    const [initTag,setInitTag] = useState(false); {/** ????????? null ?????? ????????? */}
    const tagId = useRef(0);

    const tagStore = () => {
        if(!initTag){ 
            tagValue.shift();
            setInitTag(true);
            return;
        } 
        const taglist = tagValue.map((tagValue) => (
            <>
            <div key={tagValue.tagid}>
                #{tagValue.tag}
                <div onClick={() => tagDelete(tagValue.tagid)}>??</div>
            </div>          
            </>
        )); 
        return taglist;        
    }

    const tagCreate = () => { 
        var inTagValue = document.getElementById("inputTag").value;
        if(inTagValue === null || inTagValue === undefined ||inTagValue === "") return;
         document.getElementById("inputTag").value = null;
        
        setTagValue(() => [...tagValue,{
            tagid:tagId.current++,
            tag:inTagValue,
        }]); 
    }
   
    const tagDelete = (id) => {
        setTagValue(tagValue.filter(t => t.tagid != id));
    }
    
    {/** ???????????? ????????? ?????? */}  
    const [position, setPosition] = useState({lat: 37.38914, lng: 126.9544});
  

    const activeEnter = (e) => {
        if(e.key === "Enter") tagCreate();
    }


    return ( 
         <div>
            <BackImg url={'../../src/assets/img/background/background02.jpg'} />

            <Container method="post" enctype="multipart/form-data">
                {/* ????????? ?????? */}
                <ImgInputLabel url={"../../src/assets/img/icon/gallery.png"} htmlFor="addImg">
                <div className='imgbox'><img src={imgfile}/></div>
                </ImgInputLabel>
                <ImgInput id="addImg" type="file" accept="image/*" onChange={imgChange}/>

                {/* ???????????? */}
                <TagContainer>
                    <div className='btn' onClick={tagCreate}>??????</div>
                    <TagInput 
                        type="text"
                        id='inputTag'
                        
                        onchange={tagCreate}
                        onKeyDown={activeEnter}                 
                        placeholder="#????????? ??????????????????"/>                    
                    <TagStorage>
                        {tagStore()}                      
                    </TagStorage>
                </TagContainer>
                {/* ?????? ?????? ??? ??? ?????? */}
                <ContentContainer>
                    <SubbitButton onClick={() => window.location.href="/"}>??????</SubbitButton>
                    <FeedInput 
                    type="text" 
                    placeholder="?????? ???????????????."/>
                    <MapIn>
                        <Map
                            center={{ lat: 37.38914, lng: 126.9544 }}
                            style={{ width: "100%", height: "100%" }}
                            level={2}
                            onClick={(_t,mouseEvent) => setPosition({
                                lat: mouseEvent.latLng.getLat(),
                                lng: mouseEvent.latLng.getLng(),
                            })}
                        >
                            {<MapMarker position={position}>
                                <div style={{color:"#000"}}>Hello World!</div>
                            </MapMarker>}
                        </Map>
                        {position && <p>{'????????? ????????? ????????? ' + position.lat + ' ??????, ????????? ' + position.lng + ' ?????????'}</p>}
                    </MapIn>
                </ContentContainer>

           </Container>
        </div>
    )
}

export default Form_In;