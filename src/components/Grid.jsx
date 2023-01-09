import styled, {keyframes} from 'styled-components';

const animate = keyframes`    
    0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(100%);
    }    
`;

const GridBox = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;

  
    &::before{
            content:'';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(#FF9898,#8054FF);
            animation: ${animate} 6s linear infinite;
    }
    
    
  
    &>span {
        &:hover {
            background: #FF9898;
            transition: 0s;
        }
        

        position: relative;    
        width: 2rem;
        height: 2rem;
        background: #181818;
        z-index: 1;
        transition: 1.5s;

        /* 화면 비율별 사각형 크기 */
        @media screen and (min-width:900px){                        
            width: 10rem;
            height: 10rem;            
        }
        @media screen and (min-width:1800px){                        
            width: 10rem;
            height: 10rem;            
        }
        
        @media screen and (min-width:2500px){                        
            width: 11rem;
            height: 11rem;           
        }
        @media screen and (min-width:5000px){                        
            width: 12rem;
            height: 12rem;                    
        }
        
        @media screen and (min-height:300px){                        
            width: 3rem;
            height: 3rem;
            
        }
        @media screen and (min-height:800px){                        
            width: 4rem;
            height: 4rem;
            
        }
        @media screen and (min-height:1500px){                        
            width: 5rem;
            height: 5rem;
            
        }
        @media screen and (min-height:2800px){                        
            width: 8rem;
            height: 8rem;                    
        }
        @media screen and (min-height:3200px){                        
            width: 10rem;
            height: 10rem;                    
        }
        
    }
    /* 화면 커지면 격자 틈이 너무 좁아서 없는 거 처럼 됨. */
    @media screen and (min-width:2400px){                        
        gap: 4px;        
    }     
`;


const infinity_span = () =>{
    var span = [];   
    for(var i =0; i<1000; i++){
        span.push(<span></span>);
    }
    return span;  
}


function Grid(){
    return (        
            <GridBox>               
            {infinity_span()}
            </GridBox>        
    )
}

export default Grid;