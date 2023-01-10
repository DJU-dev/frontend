import Cube from "@/components/Cube.jsx";
import Navibar from "@/components/Navibar.jsx";
import Grid from "@/components/Grid.jsx";
import SliderBox from "@/components/Slider.jsx";

function Main() {
    return (
        <div>
            <Navibar />            
            <Grid /> 
            <Cube />            
            <SliderBox />                  
        </div>
    )
}

export default Main;