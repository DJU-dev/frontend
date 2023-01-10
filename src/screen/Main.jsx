import Cube from "@/components/Cube.jsx";
import Navibar from "@/components/Navibar.jsx";
import Grid from "@/components/Grid.jsx";
import SliderBox from "@/components/Slider.jsx";
import {Footer,FFooter} from "@/components/Footer.jsx";

function Main() {
    return (
        <div>
            <Navibar />            
            <Grid /> 
            <Cube />            
            <SliderBox />        
            <Footer />
            <FFooter />       
        </div>        
    )
}

export default Main;