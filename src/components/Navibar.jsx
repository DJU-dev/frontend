import styled from 'styled-components';
import useStore from "@/utils/store";
import {Link, useNavigate} from 'react-router-dom';
import {useLocalStorage} from "@/utils/customHooks.jsx";

const Container = styled.nav`
  position: relative;
  width:100%;
  height: 5vh;
  padding: 0.5rem 0;
  border-bottom: 1px solid #D3D3D3;
  background: #020002;
  z-index: 1000;
  
`
const NavUi = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:transparent;
  padding: 0 4rem;
`;

const NavLi = styled.li`
  float: left;
`;

const NavLogo = styled.a`
  display: block;
  float: left;
  margin-top: 0.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 20px;
  text-decoration: none;
  color: white;
`;

const NavLoginBox = styled.li`
  float: left;
  background: linear-gradient(45deg,#FF9898,#8054FF);
  border-radius: 5px;
`;

const NavTab = styled.a`
  display: block;
  float: left;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.7rem 1.1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  color: white;
`;

const LogoBox = styled.button`
  display: block;
  float: left;
  width: 2rem;
  height: 2rem;
  margin-top: 0.3rem;  
  right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: url(${props=>props.url}) center center / cover;
  background-size: 110%;
`;

const Profilebox = styled.button`
  display: block;
  float: left;
  width: 2rem;
  height: 2rem;
  margin-top: 0.3rem;
  margin-right: 0.7rem;
  right: 1rem;
  border-radius: 50%;  
  border: none;
  cursor: pointer;
  background: url(${props=>props.url}) center center / cover;
  background-size: 120%;
`;


function Navibar({isLoggedIn, username}) {
  const { toggleIsModal } = useStore();
  const navigate = useNavigate();
  const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
  const onLogout = () => {
      setJwtToken("");
      navigate('login/')
  }
  return (
      <Container>                    
        <NavUi>
          <NavLi>            
            <Link to="/frontend/">
              <LogoBox url={'img/icon/Logo-icon.jpg'}></LogoBox>            
              <NavLogo>Squid</NavLogo>

            </Link>
          </NavLi>
          <NavLi>
            {isLoggedIn && <Profilebox
                url={'../../src/assets/img/icon/profile01.png'}
                onClick={toggleIsModal}
            />}
              <NavTab>
                {isLoggedIn ? username : "회원가입"}
              </NavTab>
              <NavLoginBox>
                {isLoggedIn ? <NavTab onClick={onLogout} href="/" >Logout</NavTab> : <NavTab href='login/'>Login</NavTab>}

              </NavLoginBox>
                 
          </NavLi>
        </NavUi>
      </Container>
  )
}

export default Navibar;
