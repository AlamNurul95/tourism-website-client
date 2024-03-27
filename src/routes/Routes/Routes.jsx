import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home/Home";
import BookNow from "../../pages/BookNow/BookNow";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import MyBooking from "../../pages/Mybooking/MyBooking";

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
        {
            path:'/mybooking',
            element:<MyBooking></MyBooking>,
           
           
            
        },
      ]

    },
    


  ]);


  export default router;