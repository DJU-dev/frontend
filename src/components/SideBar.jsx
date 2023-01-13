import styled from "styled-components";
import useStore from "@/utils/store";

const FixSide = styled.div`
    position:fixed;
    width: 7rem;
    display:block;   
    height: 31rem;
    left: 1.4rem;
    top:30vh;
    background: rgba(58, 58, 71, 0.9);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3rem;
    z-index: 1000;
`;

const MenuToggle = styled.div`
    position: absolute;
    background-color:#FFF;
    border-radius: 20px;
    left: 30%;
    margin-bottom: 3rem;
    width: 3rem;
    height:1rem;
    top: -0.5rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &>div{
        position: relative;
        left: 1rem;
        width: 1rem;
        height: 1rem;
        transform: ${(props) => (props.toggle ? "rotate(0deg)" : "rotate(180deg)")};
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
    height: 31rem;
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
        &.profile{
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
    const what = () => {
        console.log(isSide);
    }
    return (        
        <div>{what()}
            <FixSide>                
                <MenuToggle toggle={isSide} onClick={toggleIsSide} url={'../../src/assets/img/icon/triangular-arrowhead-icon.png'}>
                    <div></div>
                </MenuToggle>
                <MenuList>
                    <MenuEvent url={'../../src/assets/img/icon/earth-icon.png'}>
                        <div className="profile"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                    <MenuEvent url={'../../src/assets/img/icon/writing-icon.png'}>
                        <div className="profile"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                    <MenuEvent url={'../../src/assets/img/icon/Simpsons-icon.png'}>
                        <div className="profile"/>  
                        <div className="menuItem"/>                                        
                    </MenuEvent>
                    <MenuEvent url={'../../src/assets/img/icon/phone-icon.png'}>
                        <div className="profile"/>
                        <div className="menuItem"/>                                        
                    </MenuEvent>                    
                </MenuList>                
            </FixSide>            
        </div>
    )
}

export default SideBar;