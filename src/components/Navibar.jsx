import styled from 'styled-components';

const Container = styled.nav`
  padding: 1.2rem 0;
  border-bottom: 1px solid black;
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
  font-size: 2.5rem;
  font-weight: 900;
  padding: 0 30px;
  text-decoration: none;
`;

const NavTab = styled.a`
  display: block;
  float: left;
  font-size: 1.7rem;
  font-weight: 900;
  padding: 1rem 1.3rem;
  text-decoration: none;
`;

const NavLoginBox = styled.li`
  float: left;
  background: linear-gradient(45deg,#FF9898,#8054FF);
  border-radius: 5px;
`;

function Navibar() {
  return (
      <Container>
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
      </Container>
  )
}

export default Navibar;
