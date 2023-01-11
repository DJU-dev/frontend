import Cube from "@/components/Cube.jsx";
import Navibar from "@/components/Navibar.jsx";
import Grid from "@/components/Grid.jsx";
import SliderBox from "@/components/Slider.jsx";
import {Footer,FFooter} from "@/components/Footer.jsx";
import Mprofile from "@/components/Mprofile.jsx";


function Main() {
    return (
        <div>
            <Navibar />  
            <Mprofile />    
            <Grid /> 
            <Cube />            
            <SliderBox />        
            <Footer />
            <FFooter />       
        </div>        
    )
}

export default Main;