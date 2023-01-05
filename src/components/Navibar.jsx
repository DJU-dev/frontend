import styled from 'styled-components';

const NavUi = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:transparent;
  padding: 0px 12px;
`;

const NavLi = styled.li`
  float: left;
  padding: 0 7vw;
  line-height: 80px;
`;

const NavLogo = styled.a`
  display: block; 
  float: left;
  font-size: 23px;
  font-weight: 900;
  line-height: 50px;
  padding: 0 30px;
  text-decoration: none;
  color: inherit;
  color: black;
`;

const NavTab = styled.a`
  display: block; 
  float: left;
  font-size: 15px;
  font-weight: 900;
  line-height: 50px;
  padding: 0 30px;
  text-decoration: none;
  color: inherit;
  color: black;
`;

const NavBox = styled.div`
  display: block;
`;

const NavLoginBox = styled.li`
  float: left;
  background: linear-gradient(45deg,#FF9898,#8054FF);
  border-radius: 5px;
`;

function Navibar() {
  return (
    <div>       
        <NavUi>
          <NavLi>
            <NavLogo href=''>Squid</NavLogo>
          </NavLi>       
          <NavLi> 
          <nav>          
            <NavTab href=''>Home</NavTab>          
            <NavLoginBox>
              <NavTab href=''>Login</NavTab>
            </NavLoginBox>            
          </nav>       
          </NavLi>         
        </NavUi>
    </div>
  )
}

export default Navibar;
