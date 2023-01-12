import styled, {keyframes} from 'styled-components';

const animate = keyframes`    
    0%{
        transform: translateY(-100%) translateX(-150%);
    }
    100%{
        transform: translateY(100%) translateX(100%); 
    }            
`;

const GridBox = styled.section`
  position: absolute;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  
    &::before{
        position: absolute;
        content:'';
        width: 70%;
        height: 70%;
        background: linear-gradient(#FF9898,#8054FF);
        filter: blur(1000px);
        animation: ${animate} 8s linear infinite;
        z-index: 1;
    }
  
    &>span {          
        width: 2rem;
        height: 2rem;
        background: #181818;
        transition: 1.5s;
        z-index: 1;        
        /*  큐브 객체 우선순위 문제로 삭제... */
        &:hover {            
            background: #FF9898;
            filter: blur(3px);
            opacity: 0.1;
            transition: 0s;            
        }
        

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