import Main from "@/screen/Main.jsx";
import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from "@/screen/LogIn.jsx";
import SignUp from "@/screen/SignUp.jsx";


function App() {

  return (
    <Container>    
      <BrowserRouter>
        <Routes>
          /* 원하시는 페이지 경로 설정해서 아래와 같이 작성하십시오.
              새로고침을 원하지 않는다면 Link(?)컴포넌트를 사용해야하니 필요시 요청해주세요. */
          <Route path="/" element={<Main />}/>
          <Route path="login/" element={<LogIn />}/>
          <Route path="signup/" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </Container>    
  )
}

const Container = styled.div`
    width: 100vw;
`;
export default App
