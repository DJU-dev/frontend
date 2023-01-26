import styled from "styled-components";

const Container = styled.div`    
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin-top: 10rem;
    width: 90%;
    height: 15rem;
    padding-left: 10%;
    align-items: center;
    border-radius: 2rem 2rem 0 0;    
    background: #080808; 
`;

const Row = styled.div`
    display:block;
    flex-wrap: wrap;
    word-wrap: break-word;
    width: 18rem;       
    margin-right: 5rem;
    @media screen and (max-width:1000px){                        
        width: 16rem;                            
    }
    @media screen and (max-width:1800px){                        
        width: 10rem;                            
    }  
`;

/* Footer의 margin-bottom과 비슷한 구조 */
const F_Footer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow:hidden;
    width: 90%;
    height: 4rem;
    padding-left: 10%;
    align-items: center; 
    background: #000000;
    @media screen and (max-width:1000px){                        
        height: 3rem;                               
    }
`;

const ArrIcon = styled.div`
    position: relative;
    display: flex;
    left: 5rem;    
    align-items: center;
    width: 18rem;
    height: 3rem;
    @media screen and (max-width:1000px){                        
        left: 3rem;                               
    }
`;

const Icon = styled.div`    
    margin-left: 1.5rem;    
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 30%;
    background-color: #414141; 
    background: url(${props=>props.url}) center center / cover;
    background-size: 90% 90%;
    background-repeat:no-repeat;
    @media screen and (max-width:1000px){                        
        width: 1.3rem;
        height: 1.3rem;                    
    }   
`;


/* 글꼴 */

const LogoText = styled.p`
    color: #ffadad;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    @media screen and (max-width:1000px){                        
            font-size: 1.2rem;                                
    }
`;

const TopicText = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    @media screen and (max-width:1000px){                        
            font-size: 0.9rem;                                
    }
`;

const ContentText = styled.p`
    color: white;
    margin-bottom: 0.4rem;
    @media screen and (max-width:1000px){                        
            font-size: 0.7rem;                                
    }
`;

const DateText = styled.p`
    color: wheat;
    font-size: 0.5rem;
    margin-bottom: 0.7rem;
    @media screen and (max-width:1000px){                        
            font-size: 0.5rem;                                
    }
`;

const P = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
  @media screen and (max-width:1000px){                        
            font-size: 0.4rem;     
    }
`;

function Footer(){
    return (        
        <Container>            
            <Row>
                <LogoText>Squid</LogoText>
                <ContentText>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem</ContentText>
            </Row>

            <Row>
                <TopicText>RECENT POSTS</TopicText>
                <ContentText>Delicious Hot Grilled Chichen Recipes</ContentText>
                <DateText>OCTOBER 4, 2022</DateText>
                <ContentText>Better Fed Than Red Whether Glories</ContentText>
                <DateText>OCTOBER 5, 2022</DateText>
                <ContentText>Trade Pastry Warp To Coat Fish, Poultry</ContentText>
                <DateText>OCTOBER 10, 2022</DateText>
            </Row>

            <Row>
                <TopicText>RECENT POSTS</TopicText>
                <ContentText>Delicious Hot Grilled Chichen Recipes</ContentText>
                <DateText>OCTOBER 4, 2022</DateText>
                <ContentText>Better Fed Than Red Whether Glories</ContentText>
                <DateText>OCTOBER 5, 2022</DateText>
                <ContentText>Trade Pastry Warp To Coat Fish, Poultry</ContentText>
                <DateText>OCTOBER 10, 2022</DateText>
            </Row>

            <Row>
                <TopicText>RECENT POSTS</TopicText>
                <ContentText>Delicious Hot Grilled Chichen Recipes</ContentText>
                <DateText>OCTOBER 4, 2022</DateText>
                <ContentText>Better Fed Than Red Whether Glories</ContentText>
                <DateText>OCTOBER 5, 2022</DateText>
                <ContentText>Trade Pastry Warp To Coat Fish, Poultry</ContentText>
                <DateText>OCTOBER 10, 2022</DateText>
            </Row>           
        </Container>
        
    )
}

function FFooter(){
    return (
        <div>
            <F_Footer>
                <P>Copyright © 2023 daejeon_u Technology Pty Limited (ACN 442 359 655)</P>
                <ArrIcon>
                <Icon url={'/frontend/src/assets/img/icon/twitter-icon.png'} />
                <Icon url={'/frontend/src/assets/img/icon/youtube-icon.png'} />
                <Icon url={'/frontend/src/assets/img/icon/instargram-icon.png'} />
                <Icon url={'/frontend/src/assets/img/icon/facebook-icon.png'} />
                <Icon url={'/frontend/src/assets/img/icon/discord-icon.png'} />
                </ArrIcon>
            </F_Footer>
        </div>
    )
}

export {Footer, FFooter};