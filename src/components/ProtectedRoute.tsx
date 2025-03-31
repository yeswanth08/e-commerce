import { useSelector } from "react-redux";
import { RootState } from "../store/store"; 
import { Navigate, Outlet } from "react-router-dom";

export default function App(){
    const items = useSelector((state:RootState)=>state.cart.items);
    return items ? <Outlet/> : <Navigate to="/" replace/>
}