import img1 from '../images/139.webp';
import img2 from '../images/140.webp';
import img3 from '../images/141.webp';
import img4 from '../images/142.webp';
import img5 from '../images/143.webp';
import img6 from '../images/144.webp';
function CartBottom() {
    return (
        <div className="cart-Bottom">
            <div className="cart-butt-header">
                <h2>You May Also Like </h2>
            </div>
            <div className='cart-butt-image'>
                <div className='cart-butt-image1'>
                    <img src={img1} alt="Image" className='' />
                    <p>Rhinestone Decor Lightning Desi...</p>
                    <h6>$2.00</h6>
                </div>
                <div className='cart-butt-image1'>
                    <img src={img2} alt="Image" className='' />
                    <p>Rhinestone & Heart Decor Cuff R...</p>
                    <h6>$2.00</h6>
                </div>
                <div className='cart-butt-image1'>
                    <img src={img3} alt="Image" className='' />
                    <p>Rhinestone Decor Lightning Desi</p>
                    <h6>$2.00</h6>
                </div>
                <div className='cart-butt-image1'>
                    <img src={img4} alt="Image" className='' />
                    <p>Rhinestone Decor Lightning Desi</p>
                    <h6>$2.00</h6>
                </div>
                <div className='cart-butt-image1'>
                    <img src={img5} alt="Image" className='' />
                    <p>Rhinestone Decor Lightning Desi</p>
                    <h6>$2.00</h6>
                </div>
                <div className='cart-butt-image1'>
                    <img src={img6} alt="Image" className='' />
                    <p>Rhinestone Decor Lightning Desi</p>
                    <h6>$2.00</h6>
                </div>
            </div>
        </div>
    )
};
export default CartBottom;