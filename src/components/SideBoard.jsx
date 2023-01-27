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
{/**------------------조회 글------------------------ */}

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
{/**----------------리스트--------------------------- */}

const SearchContainer = styled.div`
    position: relative;    
    top: 1.5rem;    
    width: 95%;
    height: 2.4rem;
    &>input{
        position: absolute;
        width: 100%;
        height: 2.4rem;
        outline: none;
        border: 0;
        background: #FFFFFF;
        border-radius: 10px;

        &::placeholder{
            position: relative;
            top: 5%;
            left:0.7rem;
            font-size: 16px;
            color: #B9B9B9;
        }
    }
    &> img{        
        width: 24px;
        height: 24px;
        position: absolute;
        z-index: 10;
        top: 25%;
        right: 0.5rem;
        cursor: pointer;
    }
`

const ListContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    height: 75%;
    top: 5rem;    
`

const List = styled.div`
    position: relative;
    display:flex;
    
    width: 99%;
    height: 13rem;
    margin: 1rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
    &>.imgCard{
        margin: 1rem;
        width: 14rem;
        height: 9.6rem;
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
    }
    &>.info{
        position: relative;
        display:flex;
        flex-direction: column;        
        width: 67%;
        height: 100%;             
        
        &> a{
            color: #505050;
            height: 40%;
            margin-top: 0.7rem;
            margin-left: 0.8rem;
            line-height: 25px;
            overflow: hidden;
        }
        &>div{
            &.tagC{
                position: relative;
                width:100%;
                height:15%;                
                &>a{
                    position: relative;
                    width: 49px;
                    height: 1rem;
                    top: 17%;
                    left: 0.4rem;
                    margin-right: 0.5rem;
                    color: #515151;
                    padding: 0.4rem 0.8rem;
                    font-size: 7px;
                    background: linear-gradient(90deg, #F2DDFF 0%, #FFCBCB 100%);
                    border-radius: 5px;
                }
            }
            &.date-view{
                position:relative;
                display: flex;
                width:100%;
                height:10%;
                &>a{                    
                    text-align: center;
                    margin-top:0.2rem;
                    padding:0 0.7rem;
                    
                    font-size: 10px;
                    color: #575757;
                }                
                &>img{                    
                    padding: 0 0.3rem;
                    margin-top:0.2rem;
                    width:11px;
                    height:11px;
                }
                &>p{
                    margin-top:0.2rem;
                    color: #535353;
                    font-size: 7px;
                }                
            }
            &.mk-city-etc{
                position: relative;
                display: flex;                
                width:100%;
                height:28%;
                
                &>.mk-city{
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                    left: 0.7rem;
                    bottom: 25%;                    
                    width:65%;
                    height:100%;
                    
                    &>img{                        
                        width:24px;
                        height:24px;
                        margin-right: 0.4rem;                        
                    }
                    &>a{                        
                        font-size: 14px;
                        color: #464646;
                    }
                }
                &>.etc{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:35%;
                    height:100%;                    
                    &>div{
                        position: relative;                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin: 0 0.8rem;                        
                        &> .icon{
                            width: 18px;
                            height: 18px;
                            margin-bottom: 0.2rem;
                        }
                        &> .num{
                            color: #6E6E6E;
                            font-size: 14px;
                        }
                    }
                }
            }
        }        
    }               
    
`

const IndexContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 3rem;
    top: 6rem;
    
    &>div{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25%;
        height: 70%;        
        &>div{
            position:relative;
            display: flex;
            justify-content: space-between;
            width: 40%;
            flex-direction: row;            
            &>a{
                cursor: pointer;
                font-size: 16px;
                font-weight:700;
            }
        }
        &>img{
            &.prev{
                transform: rotate(180deg);
            }
            &.next{
            }
        }
    }
`

const 임시버튼 = styled.div`    
    position: absolute;
    display: flex;
    justify-content:center;
    align-items: center;
    top: 4.5rem;
    left: -6rem;
    border: 2px solid black;
    width:6rem;
    height:3rem;
    border-radius: 50px;
    background-color: wheat;
    cursor: pointer;
`

function SideBoard(){
    const Post = () => {
        return(        
            <Board isBoard={board}>   
            <ProfileContainer>
                <img 
                className="img-pf" 
                src="img/icon/profile01.png" />

                <div className="nameNcity">
                    <a>Mike</a>
                    <div>
                        <img 
                        className="m-marker"
                        src="img/icon/map-marker-icon.png" />
                        <p>Seoul, YongSan</p>
                    </div>
                </div>

                <div className="view-nNdate">
                    <div>
                    <img 
                        className="view"
                        src="img/icon/eye-icon.png" />
                    <p>2424</p>                        
                    </div>
                    <a>2023.01.18</a>
                </div>

                <div className="bookC">
                <img 
                    className="bookmark"
                    src="img/icon/bookmark-icon.png" />
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
                src="img/sample05.jpg"/>
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
                    src="img/icon/star-icon.png"/>
                    <p className="num">34</p>
                </div>
                <div>
                    <img 
                    className="icon"
                    src="img/icon/heart-icon.png" />
                    <p className="num">135</p>
                </div>
                <div>
                    <img 
                    className="icon"
                    src="img/icon/share-icon.png" />
                    <p className="num">23</p>
                </div>
            </EtcContainer> 
            </Board>
        )
    }
    // 폐기
    // const PostList = () => {
    //     return(
    //     <Board isBoard={board}>
    //         <임시버튼 onClick={()=>setIsList(!isList)}>바꾸기</임시버튼>
    //         <SearchContainer>
    //             <input 
    //             type="text" 
    //             placeholder="Search"/>
    //             <img src="img/icon/search-icon.png" />
    //         </SearchContainer>
    //         <ListContainer>
    //         {/** 실제 동작할 때 바꾸도록 합시다 */}
    //             <List>                        
    //                 <img 
    //                 className="imgCard"
    //                 src="img/sample01.jpg" />                        
    //                 <div className="info">
    //                     <a>
    //                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...
    //                     </a>
    //                     <div className="tagC">
    //                     <a>#View</a>
    //                     <a>#Apart</a>
    //                     <a>#Money</a>
    //                     </div>
    //                     <div className="date-view">
    //                         <a>2023.01.18</a>
    //                         <img src="img/icon/eye-icon.png"/>
    //                         <p>2424</p>
    //                     </div>
    //                     <div className="mk-city-etc">
    //                         <div className="mk-city">
    //                             <img src="img/icon/map-marker-icon.png"/>
    //                             <a>Seoul, YongSan</a>
    //                         </div>
    //                         <div className="etc">
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/star-icon.png"/>
    //                                 <a className="num">34</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/heart-icon.png"/>
    //                                 <a className="num">135</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/share-icon.png"/>
    //                                 <a className="num">23</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </List>
    //             <List>                        
    //                 <img 
    //                 className="imgCard"
    //                 src="img/sample01.jpg" />                        
    //                 <div className="info">
    //                     <a>
    //                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...
    //                     </a>
    //                     <div className="tagC">
    //                     <a>#View</a>
    //                     <a>#Apart</a>
    //                     <a>#Money</a>
    //                     </div>
    //                     <div className="date-view">
    //                         <a>2023.01.18</a>
    //                         <img src="img/icon/eye-icon.png"/>
    //                         <p>2424</p>
    //                     </div>
    //                     <div className="mk-city-etc">
    //                         <div className="mk-city">
    //                             <img src="img/icon/map-marker-icon.png"/>
    //                             <a>Seoul, YongSan</a>
    //                         </div>
    //                         <div className="etc">
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/star-icon.png"/>
    //                                 <a className="num">34</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/heart-icon.png"/>
    //                                 <a className="num">135</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/share-icon.png"/>
    //                                 <a className="num">23</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </List>
    //             <List>                        
    //                 <img 
    //                 className="imgCard"
    //                 src="img/sample01.jpg" />                        
    //                 <div className="info">
    //                     <a>
    //                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...
    //                     </a>
    //                     <div className="tagC">
    //                     <a>#View</a>
    //                     <a>#Apart</a>
    //                     <a>#Money</a>
    //                     </div>
    //                     <div className="date-view">
    //                         <a>2023.01.18</a>
    //                         <img src="img/icon/eye-icon.png"/>
    //                         <p>2424</p>
    //                     </div>
    //                     <div className="mk-city-etc">
    //                         <div className="mk-city">
    //                             <img src="img/icon/map-marker-icon.png"/>
    //                             <a>Seoul, YongSan</a>
    //                         </div>
    //                         <div className="etc">
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/star-icon.png"/>
    //                                 <a className="num">34</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/heart-icon.png"/>
    //                                 <a className="num">135</a>
    //                             </div>
    //                             <div>
    //                                 <img 
    //                                 className="icon"
    //                                 src="img/icon/share-icon.png"/>
    //                                 <a className="num">23</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </List>
    //         </ListContainer>
    //         <IndexContainer>
    //             <div>
    //                 <img 
    //                 className="prev"
    //                 src="img/icon/next-icon.png" />
    //                 <div>
    //                     <a>1</a>
    //                     <a>2</a>
    //                     <a>3</a>
    //                     <a>4</a>
    //                     <a>5</a>
    //                 </div>
    //                 <img 
    //                 className="next"
    //                 src="img/icon/next-icon.png" />
    //             </div>
    //         </IndexContainer>
    //     </Board> 
    //     )        
    // }


    const [board, setBoard] = useState(false);

    const boardChange = () => {
        setBoard(() => !board);            
    };

    //const [isList, setIsList] = useState(true);

    useEffect(() => {}, [board]);   

    return (   
        <Container>            
            <Tab isBoard={board}>
                <img 
                src="img/icon/chevron-icon.png" 
                className="back" 
                onClick={boardChange} />                        
                <img 
                src="img/icon/point3-icon.png" 
                className="menu"/>                    
            </Tab>            
            {Post()}
        </Container>
    )
}

export default SideBoard;