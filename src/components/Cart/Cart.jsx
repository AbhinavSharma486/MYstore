import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";


const Cart = ({ setShowCart }) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No Products in the Cart</span>
                    <button className="return-btn">Return To Shop</button>
                </div> */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">SubTotal:</span>
                            <span className="text total">&#8377;1299</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Checkout</button>
                        </div>
                    </div>

                </>
            </div>
        </div>
    );
};

export default Cart;
