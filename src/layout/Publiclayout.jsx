import { Outlet } from "react-router-dom";
import HeaderPublic from "../componets/HeaderPublic"
import FooterPublic from "../componets/FooterPublic";

const Publiclayout = () => {
    return (
        <> 
            <HeaderPublic/>
            <main>
                <Outlet />
            </main>
            <FooterPublic/>
        </>
    )
  } 

export default Publiclayout