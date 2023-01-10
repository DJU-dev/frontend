import Cube from "@/components/Cube.jsx";
import Navibar from "@/components/Navibar.jsx";
import Grid from "@/components/Grid.jsx";
import UnevenSetsInfinite from "@/components/Slider.jsx";

function Main() {
    return (
        <div>
            <Navibar />            
            <Grid /> 
            <Cube />            
            <UnevenSetsInfinite />                  
        </div>
    )
}

export default Main;