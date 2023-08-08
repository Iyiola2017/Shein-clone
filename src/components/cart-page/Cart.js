
import CartBottom from "./CartBottom";
import CartLeft from "./CartLeft";
// import CartNav from "./CartNav";
import CartRight from "./CartRight";

function Cart() {
    return (
        <div className="main-cart">
            {/* <div className="cnav">
                <CartNav />
            </div> */}
            <div className="cart-grid">
                <CartLeft />
                <CartRight />
            </div>
            <div className="cbutt">
                <CartBottom />
            </div>
        </div>
    )
};
export default Cart;