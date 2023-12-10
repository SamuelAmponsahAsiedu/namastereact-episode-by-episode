import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // always subscribe to the specific portion of the store
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch =useDispatch();

    const handleClearCart = () => {
        //dispatch an action
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-green-400 text-white p-2 m-2 rounded-lg"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1 className="font-bold align-middle ">Cart is empty. Please add Items😋</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;



