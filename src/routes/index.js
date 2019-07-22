
import Login from "../components/form/login/LoginForm";
import Register from "../components/form/register/RegisterForm";


const indexRoutes = [
    { path: "/", component:  Login  },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

export default indexRoutes;