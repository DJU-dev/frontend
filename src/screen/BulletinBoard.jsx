import Navibar from "@/components/Navibar.jsx";
import SideBar from "@/components/SideBar.jsx";
import Inquiry from "@/components/Inquiry.jsx";

function BulletinBoard() {
    return (
        <div>
            <Navibar />
            <SideBar />
            <Inquiry />
            {/*
            <Board /> 
             */}
        </div>        
    )
}

export default BulletinBoard;