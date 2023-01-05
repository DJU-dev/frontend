import Main from "@/screen/Main.jsx";
import styled from "styled-components";
import Navibar from "./components/Navibar.jsx";
function App() {

  return (
    <Container>
      <Navibar/>
      <Main />      
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
`
export default App
