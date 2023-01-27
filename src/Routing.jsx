import Main from "@/screen/Main.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LogIn from "@/screen/LogIn.jsx";
import SignUp from "@/screen/SignUp.jsx";
import Fill_In from "@/screen/Fill-In.jsx";
import Test from "@/screen/Test.jsx";
import KakaoMap from "@/screen/KakaoMap.jsx";
import Management from "@/screen/Management.jsx";


export default function Routing() {
    return (
        <Router>
            <Routes>
                /* 원하시는 페이지 경로 설정해서 아래와 같이 작성하십시오.

                새로고침을 원하지 않는다면 Link(?)컴포넌트를 사용해야하니 필요시 요청해주세요. */

                <Route path="/frontend/" element={<Main />}/>
                <Route path="/frontend/login/" element={<LogIn />}/>
                <Route path="/frontend/signup/" element={<SignUp />}/>
                <Route path="/frontend/fill-in/" element={<Fill_In />}/>                
                <Route path="/frontend/test/" element={<Test/>}/>
                <Route path="/frontend/map/" element={<KakaoMap />}/>
                <Route path="/frontend/management/" element={<Management />}/>


            </Routes>
        </Router>
    )
}