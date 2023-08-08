import { useContext, useEffect, useState } from 'react';
import img1 from '../images/65.png';
import img2 from '../images/66.png';
import img3 from '../images/67.png';
import img4 from '../images/68.png';
import img5 from '../images/69.png';
import img6 from '../images/70.png';
import img7 from '../images/71.webp';
import img8 from '../images/72.png';
import img9 from '../images/73.png';
import img10 from '../images/74.png';
import { SheinContext } from '../context/SheinContext';
function CartRight() {

    let cart_data = localStorage.getItem("social-cart");
    const [cartProduct, setCartProduct] = useState([]);
    const [err, setErr] = useState(true);
    const { GrandTotalPrice } = useContext(SheinContext);

    useEffect(() => {
        if (cart_data) {
            setCartProduct(JSON.parse(cart_data));
            setErr(false)
        }
    }, []);
    return (
        <div className="cart-right-col1">
            <div className="Summary">
                {/* {err === true ? (<div>No Product in Cart</div>) : (
                    cartProduct.map((product) => ( */}
                <div>
                    <h5>Order Summary</h5>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <h4>${GrandTotalPrice}</h4>
                    </div>
                    <button>Checkout Now</button>
                    <p>Apply a Coupon Code, SHEIN Points on the next step.</p>
                </div>
                {/* ))
                )} */}
            </div>

            <div className="cart-right-row2">
                <div className="we-accept">
                    <h2>We Accept</h2>
                </div>
                <div className="accept-img">
                    <img src={img1} alt="Image" className='' />
                    <img src={img2} alt="Image" className='' />
                    <img src={img3} alt="Image" className='' />
                    <img src={img4} alt="Image" className='' />
                    <img src={img5} alt="Image" className='' />
                    <img src={img6} alt="Image" className='' />
                    <img src={img7} alt="Image" className='' />
                    <img src={img8} alt="Image" className='' />
                    <img src={img9} alt="Image" className='' />
                    <img src={img10} alt="Image" className='' />
                </div>
            </div>
        </div>
    )
};
export default CartRight;