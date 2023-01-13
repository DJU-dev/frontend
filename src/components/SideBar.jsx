import styled from "styled-components";

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
     
`;

const MenuList = styled.div`
    overflow: hidden;
    position: relative;
    
    width: 14rem;     
    height: 31rem;
`;

const MenuEvent = styled.div`
    top:5rem;
    position: relative;
    display:flex;
    width: 7rem;
    height: 5.5rem; 
    transition: 1s;
    &:hover{
        transform: translateX(100%);
        transition: 0.2s ease-in-out;
    }   
`;

const MenuItem1 = styled.div`
    position: relative;    
    right:7rem;
    background: linear-gradient(118deg, rgba(24, 24, 24, 0.8) 0%, rgba(58, 58, 71, 0.8) 90%);
    width: 7rem;
    height: 5.5rem;  
`;

const MenuItem2 = styled.div`
    position: absolute;       
    width: 7rem;
    height: 5.5rem;    
`;

function SideBar() {

    return (        
        <div>
            <FixSide>
                <MenuToggle/>
                <MenuList>
                    <MenuEvent>
                        <MenuItem1/>
                        <MenuItem2/>                                        
                    </MenuEvent>
                    <MenuEvent>
                        <MenuItem1/>
                        <MenuItem2/>                                        
                    </MenuEvent>
                    <MenuEvent>
                        <MenuItem1/>
                        <MenuItem2/>                                        
                    </MenuEvent>
                    <MenuEvent>
                        <MenuItem1/>
                        <MenuItem2/>                                        
                    </MenuEvent>                    
                </MenuList>
            </FixSide>            
        </div>
    )
}

export default SideBar;