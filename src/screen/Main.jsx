import Cube from "@/components/Cube.jsx";
import Navibar from "@/components/Navibar.jsx";
import SideBar from "@/components/SideBar.jsx";
import Grid from "@/components/Grid.jsx";
import SliderBox from "@/components/Slider.jsx";
import {Footer,FFooter} from "@/components/Footer.jsx";
import Mprofile from "@/components/Mprofile.jsx";
import MainIntroduce from "@/components/MainIntroduce";
import ShortCut from "../components/ShortCut";


function Main() {
    return (
        <div>
            <Navibar />
            <SideBar />
            <Mprofile />
            <MainIntroduce />
            <Grid />
            <Cube />
            <SliderBox />
            <ShortCut/>
            <FFooter />
        </div>
    )
}

export default Main;