import { Outlet } from "react-router-dom";

import InPageNavigation from "./inPageNavigation";
export default function Navbar() {
    return (
        <>
            <div className="flex gap-2">
                {/* passing dynamic navigation to the inPageNavigation */}
                <InPageNavigation teams={[{ title: "MATCH", path: "/" }, { title: "NEWS", path: "/news" }, { title: "TABLE", path: "/pointsTable" }]}>

                </InPageNavigation>

                {/* <Link to={'/'}><h1>Matches</h1></Link>
                <Link to={'/pointsTable'}><h1>Table</h1></Link> */}
            </div>
            <Outlet />
        </>
    )
}
