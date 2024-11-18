import { useCartStore } from '../../stores/cartStore';
import './cartCounter.css';
import cart from '../../assets/cart.svg';

function CartCounter() {
    const totalQuantity = useCartStore((state) => state.totalQuantity);

    console.log("Total Quantity in CartCounter:", totalQuantity);

    return (
        <div className="cart-counter-container">
            <span className="cart-counter">{totalQuantity}</span>
            <img src={cart} alt="cart" className="cart-icon" />
        </div>
    )
}

export default CartCounter;
