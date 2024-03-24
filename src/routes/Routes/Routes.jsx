import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home/Home";
import BookNow from "../../pages/BookNow/BookNow";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/book/:id',
            element:<BookNow></BookNow>,
            loader:({params})=>fetch(`http://localhost:5000/packages/${params.id}`)
            
        },
      ]

    },
    


  ]);


  export default router;