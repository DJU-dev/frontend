import styled, {keyframes} from 'styled-components';

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



const Body = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    font-family: 'Poppins', sans-serif;    
    margin-top: 2rem;
    width: 100%;
    height: 90vh;
    background-color: #000000;
    overflow: hidden;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    padding: 80px 40px;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 80px;
    background-color: none;

`;

const Card = styled.div`    
    position: relative;
    width:350px;
    height: 180px;
    background-color:none;
    transition: 0.5s;
    
    &:hover{
        height: 450px;

        .lines::before{
            animation-play-state: running;
        }
        .imgbox{
            top:25px;
            width:150px;
            height:150px;

            &> img{
                opacity: 1;
            }
        }
        .imgbox::before{
            animation-play-state: running;
        }
        .content .details{
            transform: translateY(0px);
            
            &> p{
                opacity: 1;
                padding-top: 0.5rem;              
            }
            &> a{
                opacity: 1; 
                padding-top: 0.5rem;              
            }
        }
        
    }

    &> div{
        &.lines{
            position:absolute;
            inset: 0;
            background-color: #454545;
            overflow: hidden;            
        }
        &.lines::before{
            content:'';
            position:absolute;
            top:50%;
            left:50%;
            width:600px;
            height:120px;
            background: linear-gradient(transparent,#FF9898,transparent);
            animation: ${animate1} 4s linear infinite;
            animation-play-state: paused;
        }
        &.lines::after{
            content:'';
            position:absolute;
            inset: 3px;
            background-color: #0b0b0b;            
        }
        &.imgbox{
            position: absolute;
            top: -60px;
            left:50%;
            width: 130px;
            height: 130px;
            transform: translateX(-50%);
            background-color: #999999;
            transition: 0.5s;
            z-index:10;
            overflow: hidden;
            display:flex;
            justify-content:center;
            align-items: center;

            & > img {
                position: absolute;
                width: 100px;
                z-index: 1;
                filter: inver(1);
                opacity: 0.5;
                transition: 0.5s;
            }
        }
        &.imgbox::before{
            content: '';
            position:absolute;
            top:50%;
            left:50%;
            width:500px;
            height:150px;
            transform: translate(-50%, -50%);
            background: linear-gradient(transparent,#8054FF,#8054FF,#8054FF,transparent);
            animation: ${animate2} 6s linear infinite;
            animation-play-state: paused;
        }
        &.imgbox::after{
            content:'';
            position:absolute;
            inset: 3px;
            background-color: #292929;            
        }
        &.content{
            position: absolute;
            width: 100%;
            height: 100%;
            display:flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            &> .details{
                padding: 30px 50px;
                text-align: center;
                width:100%;
                transition: 0.5s;
                margin-top: 6rem;
                transform: translateY(40px);

                &> h2{
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #ff91f8;
                    line-height: 1.2em; 
                                       
                }
                &> p{
                    color: white;
                    opacity: 0;
                    margin-top: 1rem;
                    padding-top:5rem;
                    transition: 0.5s;
                }
                &> a{
                    display: inline-block;
                    padding:4rem, 6rem;
                    
                    background-color: #aaffcf;
                    color: #292929;
                    margin-top:1rem;
                    font-weight:700;
                    text-decoration: none;
                    opacity: 0;
                    transition:0.5s;
                }
            }
        }        
    }    
`;

const cardArr = () => {
    var card = [];
    for (var i = 0; i < 6; i++) {
        card.push(
        <Card>
            <div className='lines'></div>
            <div className='imgbox'>
                <img src="../../src/assets/img/icon/gallery.png"/>
            </div>
            <div className='content'>
                <div className='details'>
                    <h2>Design</h2>
                    <p>ABCDEFGHIJKLMNOKOPQRSTUVWXYZ</p>
                    <a href="#">Read More</a>
                </div>
            </div>  
        </Card>
        )
    }
    return card
}

function Board(){
    return (        
        <Body>            
            <Container>                        
                {cardArr()}
            </Container>                       
        </Body>
    )
}

export default Board;