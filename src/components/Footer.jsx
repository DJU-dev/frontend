import styled from "styled-components";

const Container = styled.div`    
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10rem;
    width: 90%;
    height: 20rem;
    padding-left: 10%;
    align-items: center;
    border-radius: 2rem 2rem 0 0;    
    background: #414141; /* #414141 good */
`;

const Row = styled.div`
    display:block;
    flex-wrap: wrap;
    word-wrap: break-word;
    width: 15rem;
    border: 1px solid white;    
    margin-right: 5rem;    
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
    font-size: 2rem;
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
  color: wheat;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

function Footer(){
    return (        
        <Container>
            <Row>
                <LogoText>Squid</LogoText>
                <P>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem</P>
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

export default Footer;