import styled, {keyframes} from "styled-components";
import useStore from "@/utils/store";

const FixSide = styled.div`
    position:fixed;
    transition: 0.3s;
    width: 7rem;
    display:block;
    
    height: ${(props)=>props.toggle? "31rem" : "0rem"};
    
    left: 1.4rem;
    top:30vh;
    background: rgba(58, 58, 71, 0.9);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3rem;
    z-index: 1000;
`;

const MenuToggle = styled.div`
    position: fixed;
    background:${(props) => (props.toggle ? "#FFF" : "linear-gradient(45deg,#FF9898,#8054FF)")};
    
    border-radius: ${(props) => (props.toggle ? "100px" : "10px 20px 20px 20px;")};
    left: 3.4rem;
    top:29.5vh;
    margin-bottom: 3rem;
    width: ${(props) => (props.toggle ? "3rem" : "2rem")};
    height:${(props) => (props.toggle ? "1rem" : "2rem")};
    z-index:1001;    
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 0.3s;
    
    &>div{
        position: relative;
        left: ${(props) => (props.toggle ? "1rem" : "0.55rem")};
        top: ${(props) => (props.toggle ? "" : "0.5rem")};
        width: 1rem;
        height: 1rem;
        transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(90deg)")};
        transition: 0.3s;       
        cursor: pointer;
        border-radius: 50%;
        background: url(${props=>props.url}) center center / cover;
        background-size: 65%;   
        background-repeat: no-repeat;
        z-index:30;       
    }
     
`;

const MenuList = styled.div`
    overflow: hidden;
    position: relative;    
    width: 7rem;     
    height: ${(props)=>props.toggle? "31rem" : "0rem"};
    transition: 0.3s;
`;

const MenuEvent = styled.div`
    top:5rem;
    position: relative;
    display:flex;
    width: 7rem;
    height: 5.5rem;

    &:hover{
        &> div{
            &.menuItem{
            transform: translateX(100%);
            transition: 0.3s ease-in-out;
            }
        }
    }
    &>div{
        &.menuItem{
            position: absolute;    
            right:7rem;
            background: linear-gradient(118deg, rgba(24, 24, 24, 0.8) 0%, rgba(58, 58, 71, 0.8) 90%);
            width: 7rem;
            height: 5.5rem;  
            transition: 1s;
        }
        &.icon{
            position: relative;
            top: 18%;
            left: 23.5%;
            
            width: 3.5rem;
            height: 3.5rem;           
            cursor: pointer;
            border-radius: 50%;
            background: url(${props=>props.url}) center center / cover;
            background-size: 90%;   
            background-repeat: no-repeat;
            z-index:30;
        }
    }  
`;

function SideBar() {
    const { isSide,toggleIsSide } = useStore();

    return (        
        <div>
            <MenuToggle 
            toggle={isSide} 
            onClick={toggleIsSide} 
            url={'img/icon/triangular-arrowhead-icon.png'}>
            <div></div>
            </MenuToggle>

            <FixSide toggle={isSide}>
                <MenuList toggle={isSide}>
                    <MenuEvent
                    onClick={() => window.location.href="/frontend/map"}
                    url={'img/icon/earth-icon.png'}>
                        <div className="icon"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                    <MenuEvent 
                    onClick={() => window.location.href="/frontend/fill-in"}
                    url={'img/icon/writing-icon.png'}>
                        <div className="icon"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>

                    <MenuEvent url={'img/icon/Simpsons-icon.png'}>
                        <div className="icon"/>  
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                    <MenuEvent url={'img/icon/phone-icon.png'}>
                        <div className="icon"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                </MenuList>                
            </FixSide>
        </div>
    )
}

export default SideBar;