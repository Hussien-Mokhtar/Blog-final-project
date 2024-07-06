import { createBrowserRouter } from "react-router-dom";
import First from "./Component/First-page";
import Second from "./Component/Second-page";

 const Routers = createBrowserRouter([
    {
        path:"/",
        element: <First/>,
    },
    {
        path:"/single",
        element: <Second/>,
    },

])


export default Routers;