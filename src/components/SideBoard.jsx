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
    display: flex;    
    align-items: center; 
    top: ${(props) => props.isBoard ? 4 : -300}%;

    visibility: ${(props) => props.isBoard ? "none" : "hidden"};
    z-index:5;
    flex-flow: column wrap;
    
    transition: 0.8s ease-in-out;    
    background: #E8E8E8;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    font-family: 'Poppins';
    font-style: normal;
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

const ProfileContainer = styled.div`
    position: relative;
    display: flex;
    flex-grow: column;
    width: 95%;
    height: 6.4rem;
    margin-top: 1.5rem;
    background: #FFFFFF;
    border-radius: 10px;
    &> div{        
        margin-top: 1.5rem;        
        &.nameNcity{
            position: relative;
            display: inline;            
            margin-left: 0.3rem;
            width: 26rem;
            height: 4rem;
            background-color: white;
            &>a{
                position: relative;
                left: 1.3rem;
                top: 0.3rem;                
            }
            &>div{
                position: relative;
                display: flex;
                flex: column;
                margin-top: 0.8rem;
                &> .m-marker{            
                    width: 24px;
                    height: 24px;
                }
                &> p{
                    color: #464646;
                    margin-top:0.4rem;                    
                }
            }
        }        
        &.view-nNdate{
            position: relative;
            display: block;                      
            width: 7em;
            height: 4rem;
            background-color: #fff;
            overflow-wrap: wrap;
            &> div{
                position: relative;
                display: flex;     
                justify-content: flex-end;     
                margin: 0.2rem 0px;        
                height: 1rem;
                width: 100%;
                
                &> .view{
                width:18px;
                height:18px;
                }
                &> p{
                    font-size: 11px;
                    margin-left:0.2rem;
                }                               
            }
            &>a{
                position: relative;
                display: flex;     
                justify-content: flex-end;
                top: 0.7rem;
                color: #575757;
                font-size: 15px;
            }       
        }
        &.bookC{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.4rem;
            height: 2.4rem;
            margin: 1.3rem;            
            background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);            
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            &> .bookmark{                
                width: 1.7rem;
                height: 1.7rem;                
            }
        }          
    }    
    &> .img-pf{
        width: 5rem;
        height: 5rem;
        margin-top: 0.5rem;
        margin-left: 1.5rem;
    }   
`

const WritingContainer = styled.div`    
    position: relative;
    margin-top: 0.7rem;
    width: 95%;
    height: 13rem;
    background: #fff;
    border-radius: 10px;

    &> p{
        &.about{
            position: relative;
            margin-top:1.3rem;
            margin-left: 2rem;        
            margin-bottom: 1rem;
            font-size: 18px;
            font-weight: 700;
            color: #343434;
        }
        &.content{
            width: 94%;
            margin-left:1.5rem;
            line-height: 28px;
            color: #505050;
        }
    }

`

const ImgContainer = styled.div`
    position: relative;
    margin-top: 0.7rem;
    width: 95%;
    height: 23rem;
    background: #fff;
    border-radius: 10px;
    &> .imgbox{
        position: relative;
        width: 22rem;
        height: 16.5rem;
        top:1rem;
        left:0.8rem;
        background-color: #ddd;    
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;        
    }
`

const TagContainer = styled.div`
    position: relative;
    margin-top: 2rem;
    margin-left: 1rem;
    width: 95%;
    height: 4rem;    
    &> .tagbox{
        position: relative;
        padding:0.3rem 0.8rem;
        margin: 0.3rem;

        background: linear-gradient(90deg, #F2DDFF 0%, #FFCBCB 100%);
        border-radius: 5px;
    }
`

const EtcContainer = styled.div`
    position: relative;
    margin-top: 0.7rem;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 3.5rem;
    background: #fff;
    border-radius: 10px;
    &>div{
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-wrap: wrap;
        justify-content: center;        
        align-items: center;
        margin:0.5rem;        
        width: 2.4rem;
        height: 3rem;
        &> .icon{
            width: 1.2rem;
            height: 1.2rem;
            margin-bottom: 0.2rem;
        }
        &> .num{
            color: #6E6E6E;
            font-size: 12px;
        }
    }
`





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
                <ProfileContainer>
                    <img 
                    className="img-pf" 
                    src="../../../src/assets/img/icon/profile01.png" />

                    <div className="nameNcity">
                        <a>Mike</a>
                        <div>
                            <img 
                            className="m-marker"
                            src="../../../src/assets/img/icon/map-marker-icon.png" />
                            <p>Seoul, YongSan</p>
                        </div>
                    </div>

                    <div className="view-nNdate">
                        <div>
                        <img 
                            className="view"
                            src="../../../src/assets/img/icon/eye-icon.png" />
                        <p>2424</p>                        
                        </div>
                        <a>2023.01.18</a>
                    </div>

                    <div className="bookC">
                    <img 
                        className="bookmark"
                        src="../../../src/assets/img/icon/bookmark-icon.png" />
                    </div>
                </ProfileContainer> 
                <WritingContainer>
                    <p className="about">
                    About Where
                    </p>
                    <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
                    </p>
                </WritingContainer>
                <ImgContainer>
                    <img 
                    className="imgbox"
                    src="../../../src/assets/img/sample05.jpg"/>
                    <TagContainer>
                        <a className="tagbox">#view</a>
                        <a className="tagbox">#Apart</a>
                        <a className="tagbox">#Money</a>
                    </TagContainer>
                </ImgContainer>
                <EtcContainer>
                    <div>
                        <img 
                        className="icon" 
                        src="../../../src/assets/img/icon/star-icon.png"/>
                        <p className="num">34</p>
                    </div>
                    <div>
                        <img 
                        className="icon"
                        src="../../../src/assets/img/icon/heart-icon.png" />
                        <p className="num">135</p>
                    </div>
                    <div>
                        <img 
                        className="icon"
                        src="../../../src/assets/img/icon/share-icon.png" />
                        <p className="num">23</p>
                    </div>
                </EtcContainer> 
            </Board>
        </Container>
    )
}

export default SideBoard;