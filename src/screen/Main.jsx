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
import {useAuthStore} from "@/utils/store.jsx";

function Main() {
    const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
    const {isLoggedIn, setLoggedIn, setLoggedOut} = useAuthStore(state => state);
    const [user, setUser] = useState({
        username: "Anonymous",
        email: "Anonymous",
    });
    useEffect(() => {
        useLogin(jwtToken)
            .then(r => {
                if (r !== undefined) {
                    setUser(r);
                    setLoggedIn();
                }
            })
    }, [])

    console.log(isLoggedIn, 'login check')
    return (
        <div>
            <Navibar isLoggedIn={isLoggedIn} username={user.username} />
            <SideBar />
            <Mprofile user={user} />
            <MainIntroduce />
            <Grid />
<<<<<<< HEAD
=======
            {/*<Cube />*/}
>>>>>>> dev
            <SliderBox />
            <ShortCut/>
            <FFooter />
        </div>
    )
}

export default Main;