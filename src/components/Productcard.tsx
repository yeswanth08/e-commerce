import { TiStar } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart.slice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


interface ProductProps {
    id: number;
    name: string;
    imageSrc: string;
    price: string;
    rating?: number;
}

export default function App({ id, name, imageSrc, price, rating }: ProductProps) {
    const dispatch = useDispatch();

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
            <div className="p-4">
                <div className="relative aspect-square w-full mb-4 flex bg-gray-100 rounded-lg">
                    <LazyLoadImage
                        src={imageSrc}
                        alt={name}
                        effect="blur"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <h3 className="font-semibold truncate text-base group-hover:text-[#2874f0]">{name}</h3>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-semibold text-gray-800">₹{price}</p>
                        <div className="flex items-center justify-center bg-[#388e3c] text-white rounded pl-2 pr-1 text-sm">
                            <span>{rating ?? "N/A"}</span>
                            <TiStar className="text-white w-4" />
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => dispatch(addToCart({ id, name, imageSrc, price }))}
                    className="w-full bg-[#2874f0] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
