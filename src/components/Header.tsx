import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import {RootState} from "../store/store"; 
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const cart = useSelector((state: RootState) => state.cart.items);
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-xl bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <span 
                        className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        E-commerce
                    </span>
                </div>
            </div>
        </nav>
    );
}
