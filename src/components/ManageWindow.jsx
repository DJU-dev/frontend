import styled from "styled-components";

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
    linear-gradient(120deg,#8C8C8C 3.3%, #824646 3.3%,
    rgba(182, 158, 158, 0) 6.3%),
    linear-gradient(90deg, #DBB0B0 95%, #7D7171 97%, #424242 98%, #888888 99%);

`

const Container = styled.div`
    position: relative;
    display: flex;
    top: 5%;
    left: 10%;
    width: 85%;
    height: 80%;
    border: 1px solid black;    
`

const Category = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3rem;
    width: 15.5rem;
    height: 46.5rem;
    background: linear-gradient(173.69deg, #DCDCDC 0.97%, #FF9898 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

`
const Header = styled.div`
    width: 100%;
    height: 19%;

    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(180deg, rgba(255, 232, 232, 0.81) 0%, rgba(255, 196, 196, 0.81) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    &> .icon{
        width:34px;
        height: 34px;
        border-radius: 50%;
        background-size: 130%;
    }
    &>p{
        margin-left: 0.5rem;
        font-weight: 550;
        font-size: 18px;
        line-height: 28px;        
        text-align: center;
    }

`

const Menu = styled.div`
    position:relative;
    
    width: 100%;
    height: 50%;   
`

const Item = styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 18%;
    cursor: pointer;    
    background:${props => props.select ?  "linear-gradient(180deg, rgba(255, 232, 232, 0.81) 0%, rgba(255, 196, 196, 0.81) 100%)" :"none"};
    box-shadow: ${props => props.select ? "0px 4px 4px rgba(0, 0, 0, 0.25)":"none" };
    border-radius: 10px;    
    &:hover{
        background: linear-gradient(180deg, rgba(255, 232, 232, 0.81) 0%, rgba(255, 196, 196, 0.81) 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);        
    }
    &> .icon{
        width:20px;
        height:20px;
    }
    &>p{
        margin-left: 0.5rem;
        font-weight: 550;
        font-size: 18px;
        line-height: 28px;        
        text-align: center;

        color: #292929;
    }
`

const Footer = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;

    background: linear-gradient(180deg, rgba(255, 232, 232, 0.4) -2.74%, rgba(255, 196, 196, 0.4) 97.26%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    &>.icon{
        width:60px;
        height:60px;
    }
`

const ProfileContainer = styled.div`
    position: relative;
    margin-left: 6rem;
    width: 70rem;
    height: 46.5rem;
    border: 1px solid black;
`


function ManageWindow(){
    return(
        <Background>
            <Container>
                <Category>                
                <Header>
                <img
                className="icon"
                src="../../../src/assets/img/icon/Logo-icon.jpg"
                />
                <p>Squid</p>
                </Header>
                    <Menu>
                        <Item select={false}>
                            <img
                            className="icon"
                            src="../../../src/assets/img/icon/dashboard-icon.png"
                            />
                            <p>DashBoard</p>
                        </Item>
                        <Item select={false}>
                            <img
                                className="icon"
                                src="../../../src/assets/img/icon/heart-icon.png"/>
                            <p>Favorites</p>
                        </Item>
                        <Item select={true}>
                        <img
                            className="icon"
                            src="../../../src/assets/img/icon/profile-icon.png"/>
                            <p>Profile</p>
                        </Item>
                        <Item select={false}>
                        <img
                            className="icon"
                            src="../../../src/assets/img/icon/setting-icon.png"/>
                            <p>Settings</p>
                        </Item>
                    </Menu>
                    <Footer>
                    <img
                    className="icon"
                    src="../../../src/assets/img/icon/categories-icon.png"/>
                    </Footer>
                </Category>
                <ProfileContainer></ProfileContainer>
            </Container>
        </Background>
    )
}

export default ManageWindow;