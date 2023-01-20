import styled, { keyframes } from "styled-components";
import useStore from "@/utils/store";

const fadein = keyframes`    
    0%{
        opacity: 0.3;
        transform: translateY(-3%);
    }
    50%{
        transform: translateY(1%); 
    }
    100%{
        opacity: 1;
        transform: translateY(0%); 
    }            
`;

const Container = styled.div`
  position: fixed;
  /* 위치 */
  top: 5rem;
  right: 2rem;
  width: 50rem;
  height: 32.5rem;

  /* 배경 */
  border-radius: 1vh; 
  background: rgb(255,152,152);  
  backdrop-filter: blur(1rem); 
  background: linear-gradient(141.42deg, #D86BFF 0.67%, #5B93FF 98.18%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  animation: ${fadein} 0.5s ease-in;
  z-index: 1000;

  /* 자식 요소 */
  display: flex;  
`;

const Void = styled.div`
    position: relative;
    top: 2.5%;
    left:0.5rem;
    width: 8.5%;
    height: 95%;

    background: rgba(217, 217, 217, 0.31);
    border-radius: 20px;
`

const Card = styled.div`
    position: relative;
    top: 2.5%;
    left:1rem;
    width: 88%;
    height: 95%;

    background: rgba(217, 217, 217, 0.31);
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Inter';
    font-style: normal;
`

const Profile = styled.div`  
    position: relative;
    display: flex;
    width: 100%;
    height: 11.2rem;
    
    &> .pf-img{
        position: relative;
        display: flex;
        width: 8rem;
        height: 8rem;
        padding: 1.5rem;

    }
    &> .pf-info{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 74%;
        height: 11.2rem;

        &>div{
            &.btn-c{
                position: relative;
                display: flex;  
                width:100%;
                height: 2.5rem;
                justify-content: flex-end;
                align-items: flex-end;
                &>button{
                    position: relative;
                    width:55px;
                    height:32px;
                    margin: 0 0.3rem;
                    top: 0.4rem;
                    right: 0.5rem;
                    border: none;
                    color: #343434;
                    cursor: pointer;
                    background: linear-gradient(90deg, #FBE1FF 0%, #FBE3FF 55.97%, #F8CAFF 111.18%);
                    border-radius: 5px;
                }
            }
            &.info-c{
                position: relative;
                display:flex;
                width:100%;
                height: 3.3rem;
                &> .name-E{
                    margin: 0.4rem 0.8rem;
                    &>a{    
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 24px;
                        font-weight: 500;
                    }
                    &>p{
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 15px;
                        color: #5E5E5E;
                    }
                }
                &> .like{
                    position: relative;
                    left: 0.2rem;
                    color: #FFFFFF;
                    width: 5rem;
                    height: 2rem;
                    
                    border: none;
                    background: linear-gradient(90deg, #EA8E4C 0%, #FF86B5 100%);
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                }
                &> .num{
                    position: relative;
                    display: flex;
                    top: 0.5rem;
                    left: 1rem;
                    &>p{
                        font-size: 14px;
                        line-height: 17px;                        color: #151515;
                    }                    
                }
            }
            &.num-c{
                position:relative;
                display: flex;
                
                width:100%;
                height: 5rem;
                &>.card{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width:5rem;
                    height: 5rem;
                    margin-right: 0.8rem;
                    &>a{
                        font-weight: 600;
                        font-size: 22px;
                        line-height: 45px;
                    }
                    &>p{                        
                        color: #787878;
                    }
                }
            }
        }
    }
`

const View = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width:99%;
    height: 19.5rem;


    &>.view{
        position: relative;
        display: flex;
        width: 100%;
        height:1rem;
        right: 1rem;

        justify-content: flex-end;
        &>a{
            color: #1B1B1B;
        }
    }
    &>.pictures{
        position: relative;
        display: flex;

        width: 100%;
        height: 18.5rem;
        justify-content: center;
        align-items: center;
        &>.picture{
            position: relative;
            display: flex;
            margin: 0.5rem;

            width: 12.5rem;
            height: 17rem;
        }
    }
`

function Mprofile(){    
    const { isModal,toggleIsModal} = useStore();
    return(
        <div>
            {isModal ? null:
            <Container isModal={isModal}>
                <Void />
                <Card>
                    <Profile>                                        
                        <img 
                        className="pf-img"
                        src="../../../src/assets/img/icon/profile01.png" />
                        <div className="pf-info">
                            <div className="btn-c">
                                <button>Edit</button>
                                <button>Save</button>
                            </div>
                            <div className="info-c">
                                <div className="name-E">
                                    <a>Linus Torvalds</a>
                                    <p>LinusTttt@linux.co.kr</p>
                                </div>
                                <button className="like">♥Like</button>
                                <div className="num">
                                    
                                    <p>♥123</p>
                                </div>
                            </div>
                            <div className="num-c">
                                <div className="card">
                                    <a>45</a>
                                    <p>Reviewed</p>
                                </div>
                                <div className="card">
                                    <a>137</a>
                                    <p>Reviewed</p>
                                </div>
                                <div className="card">
                                    <a>24</a>
                                    <p>Bookmark</p>
                                </div>
                            </div>
                        </div>
                    </Profile>
                    <View>
                        <div className="view">
                            <a>View</a>
                        </div>
                     
                        <div className="pictures">
                            <img 
                            className="picture"
                            src="../../../src/assets/img/sample03.jpg" />
                            <img 
                            className="picture"
                            src="../../../src/assets/img/sample01.jpg" />                            
                            <img 
                            className="picture"
                            src="../../../src/assets/img/sample02.jpg" />
                        </div>
                    </View>
                </Card>
                
               
            </Container>
            }
        </div>
    )
}

export default Mprofile;