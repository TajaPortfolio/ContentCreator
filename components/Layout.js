import Navbar from "components/Navbar";
import Footer from "./Footer";
const Layout = ({children}) => 
    <>
        <Navbar>
            { children }
        </Navbar>
        { children }
        <Footer>
            { children }
        </Footer>
    </>
export default Layout;