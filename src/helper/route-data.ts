import Home from "../pages/Home";
import Detail from "../pages/Detail";

const RouteData = [
    {
        path: '/',
        isHeader: true,
        component: Home,
    },
    {
        path: "/detail/:slug",
        isHeader: true,
        component: Detail,

    }
]

export default RouteData;