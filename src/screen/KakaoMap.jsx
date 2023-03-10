import {MapMarker, Map} from "react-kakao-maps-sdk";
import Navibar from "@/components/Navibar.jsx";
import SideBoard from "@/components/SideBoard.jsx"
import SideBar from "../components/SideBar";

const KakaoMap = () => {
    return (
        <>
            <Navibar />
            <SideBar />
            <SideBoard />         
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "100vh" }}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker>
            </Map>
        </>
    );
};


export default KakaoMap;