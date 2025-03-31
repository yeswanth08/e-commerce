import { RootState } from '../store/store';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function App(){
    const navigate = useNavigate();
    const items = useSelector((state:RootState)=>state.cart.items);
    
    return(
        <div 
        className="flex items-center relative cursor-pointer"
        onClick={() => navigate('/checkout')}
    >
        <span className="flex justify-center items-center font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <FiShoppingCart className="mr-2 h-6 w-6" />
            Cart
        </span>
        {items.length > 0 && (
            <div className="absolute bottom-3 right-8 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {items.length}
            </div>
        )}
    </div>
    )
}