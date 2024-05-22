import { Outlet } from "react-router-dom";
import InPageNavigation from "./inPageNavigation";


export default function Navbar() {
    return (
       
            <div className="w-[50%] min-h-screen mx-auto bg-gray-900">
                {/* passing dynamic navigation to the inPageNavigation */}
                <InPageNavigation teams={[{ title: "MATCH", path: "/" }, { title: "NEWS", path: "/news" }, { title: "TABLE", path: "/pointsTable" }]}>

                </InPageNavigation>
                <Outlet />
                {/* <Link to={'/'}><h1>Matches</h1></Link>
                <Link to={'/pointsTable'}><h1>Table</h1></Link> */}
            </div>
            
        
    )
}
