import {MapMarker, Map} from "react-kakao-maps-sdk";
import Navibar from "@/components/Navibar.jsx";
import SideBoard from "@/components/SideBoard.jsx"
import SideBar from "../components/SideBar";
import {usePost} from "@/utils/customHooks.jsx";
import {useEffect, useState, useLayoutEffect} from "react";
import Fill_In from "@/screen/Fill-In.jsx";

const KakaoMap = () => {
    const [posts, setPosts] = useState([]);
    useLayoutEffect(() => {
        const response = usePost()
            .then(r => {
                setPosts([...r, posts])
            })
    }, [])
    return (
        <>
            <Navibar />
            <SideBar />
            <SideBoard />         
            <Map
                center={{ lat: 36.33570037986932, lng: 127.4602178909033 }}
                style={{ width: "100%", height: "95vh" }}
                level={5}
            >
                {posts.map(post => {
                    const latlng = { lat: post.latitude, lng: post.longitude }
                    return (
                        <MapMarker
                            position={latlng} // 마커를 표시할 위치
                            title={"test"}
                        />
                    )

                })}
            </Map>
        </>
    );
};


export default KakaoMap;