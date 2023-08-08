import { useContext, useEffect, useState } from 'react';
import img1 from '../images/geo-alt.svg';
import img2 from '../images/list-check.svg';
import img3 from '../images/122.webp';
import img4 from '../images/caret-down-fill.svg';
import img5 from '../images/heart.svg';
import { SheinContext } from '../context/SheinContext';
function CartLeft() {

    let cart_data = localStorage.getItem("social-cart");
    const [cartProduct, setCartProduct] = useState([]);
    const [err, setErr] = useState(true);
    const { increaseCartQty, decreaseCartQty, deleteCartItem } = useContext(SheinContext)

    // const removeCart = (product) => {
    //     localStorage.removeItem('social-cart');
    // };

    useEffect(() => {
        if (cart_data) {
            setCartProduct(JSON.parse(cart_data));
            setErr(false)
        }
    }, []);
    return (

        <div className='cart-left-col1'>

            <div className='cart-left-row1'>
                <p><span><img src={img1} alt="Image" className='' /></span> Ship to Nigeria</p>
                <p>Choose</p>
            </div>

            <div className='cart-left-row2'>
                <div className='Item'>
                    <h6>Item Summary (0)</h6>
                    <p><span><img src={img2} alt="Image" className='' /></span> Select</p>
                </div>
                <div className='All'>
                    <div className='all-inp'>
                        <input type="checkbox" />
                        <p>All</p>
                    </div>
                    <div className='Qty'>
                        <p>Item</p>
                        <p>Price</p>
                        <p>Qty</p>
                        <p>Total</p>
                    </div>
                </div>
            </div>

            <div className='cart-left-row3'>
                {err === true ? (<div>No Product in Cart</div>) : (
                    cartProduct.map((product) => (
                        <div className='Klass' key={product._id}>
                            <div className='phase1'>

                                <div className='SHEIN'>
                                    <input type="checkbox" />
                                    <h2>SHEIN</h2>
                                </div>
                                <div className='cart-left-row4'>
                                    <div className='Back'>
                                        <input type="checkbox" />
                                        <img src={"http://159.65.21.42:9000" + product.image} alt="Image" className='' />
                                    </div>
                                </div>
                            </div>

                            <div className='phase2'>

                                <div className='backless-text'>
                                    <div className='backless'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='backless-flex'>
                                        <div className='backless-btn'>
                                            <button><span>/</span> XS <span><img src={img4} alt="Image" className='' /></span></button>
                                            <p>${product.totalPrice}</p>
                                        </div>
                                        <div className='add-to-cart-btn'>
                                            <button onClick={() => decreaseCartQty(product)}>-</button>
                                            <button>{product.qty}</button>
                                            <button onClick={() => increaseCartQty(product)}>+</button>
                                        </div>
                                        <div className='six-dollar'>
                                            <p>${product.totalPrice}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Save'>
                                    <p><span><img src={img5} alt="Image" className='' /></span> Save for later</p>
                                    <button onClick={() => deleteCartItem(product)}>Delete</button>
                                </div>
                            </div>

                        </div>
                    ))
                )}

            </div>


        </div>
    )
};
export default CartLeft;