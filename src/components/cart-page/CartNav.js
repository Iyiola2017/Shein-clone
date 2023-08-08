
import { Link } from 'react-router-dom';
import img1 from "../images/lock-fill.svg";
import img2 from '../images/caret-down-fill.svg';
function CartNav() {
    return (
        <nav className="Cart-nav">
            <div className='Navbar'>
                <div className="cart-navbar">
                    <Link to="/"><h1>SHEIN <span>/</span></h1></Link>
                    <p><span><img src={img1} alt="Image" className='' /></span> SECURE CHECKOUT</p>
                </div>
                <div className='Shopping'>
                    <p>CONTINUE SHOPPING <span><img src={img2} alt="Image" className='' /></span> </p>
                </div>
            </div>
            <div className='Shopping-Bag'>
                <p>Shopping Bag <span>&#8250;</span></p>
                <p>Place Order <span>&#8250;</span></p>
                <p>Pay <span>&#8250;</span></p>
                <p>Order Complete <span>&#8250;</span></p>
            </div>
        </nav>
    )
};
export default CartNav;