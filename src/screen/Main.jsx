import Navibar from "@/components/Navibar.jsx";
import SideBar from "@/components/SideBar.jsx";
import Grid from "@/components/Grid.jsx";
import SliderBox from "@/components/Slider.jsx";
import {Footer,FFooter} from "@/components/Footer.jsx";
import Mprofile from "@/components/Mprofile.jsx";
import MainIntroduce from "@/components/MainIntroduce";
import ShortCut from "../components/ShortCut";
import {useEffect, useState} from "react";
import {useLogin, useLocalStorage} from "@/utils/customHooks.jsx";

function Main() {
    const [isLogged, setIsLoggedIn] = useState(false);
    const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
    const [user, setUser] = useState({
        username: "Anonymous",
        email: "Anonymous",
    });
    useEffect(() => {
        useLogin(jwtToken)
            .then(r => {
                if (r !== undefined) {
                    setUser(r);
                }
            })
    }, [])

    return (
        <div>
            <Navibar />
            <SideBar />
            <Mprofile user={user} />
            <MainIntroduce />
            <Grid />
            {/*<Cube />*/}
            <SliderBox />
            <ShortCut/>
            <FFooter />
        </div>
    )
}

export default Main;