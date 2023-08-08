import { Link } from "react-router-dom";
import img1 from '../images/1.webp';
import img2 from '../images/8.webp';
import img3 from '../images/5.webp';
import img4 from '../images/7.webp';
import img5 from '../images/6.webp';
import img6 from '../images/3.webp';
import img7 from '../images/4.webp';
import img8 from '../images/2.webp';

function DropDown() {
    return (
        <div className="tops">
            <div className='col1'>
                <ul className="drop-down-text">
                    <h3>VIEW ALL</h3>
                    <h3>NEW IN TOPS</h3>
                    <h3>TOP RATED</h3>
                </ul>
                <div className="tshirt">
                    <div className="tshirt-text">
                        <h3 className="shirt">
                            <Link className="link-t-shirt" to="/shoppage">T-Shirt</Link>
                        </h3>
                        <p>Cropped Tees</p>
                        <p>Graphic Tees</p>
                        <p>Letter Tees</p>
                        <p>Oversized Tees</p>
                        <p>Basic Tees</p>
                    </div>
                    <div className="blouses-text">
                        <h3>BLOUSES</h3>
                        <p>Shirts</p>
                        <p>Printed Blouses</p>
                        <p>Floral Blouses</p>
                        <p>Ruffle Blouses</p>
                    </div>
                </div>
                <div className="tank-top">
                    <div className="tank-top-text">
                        <h3>TANK TOPS & CAMIS</h3>
                        <p>Cami Tank Tops</p>
                        <p>Halter Tank Tops</p>
                        <p>Cropped Tank Tops</p>
                    </div>
                    <div className="women-top-text">
                        <h3>WOMEN TOPS</h3>
                    </div>
                    <div className="sweatshirts-text">
                        <h3>SWEATSHIRTS</h3>
                        <p>Hooded Sweatshirts</p>
                        <p>Cropped Sweatshirts</p>
                    </div>
                    <div className="sweater-text">
                        <h3>SWEATERS & CARDIGANS</h3>
                        <p>Cardigans</p>
                        <p>Knit Tops</p>
                    </div>
                </div>
                <div className="blazers">
                    <h3>BLAZERS</h3>
                    <h3>BODYSUITS</h3>
                    <h3>OUTERWEAR</h3>
                </div>
            </div>
            <div className='col2'>
                <div className="occasion">
                    <h3>SHOP BY OCCASION</h3>
                    <div className="occasion-img1">
                        <img src={img1} alt="Image" className='' />
                        <img src={img2} alt="Image" className='' />
                    </div>
                    <div className="occasion-img2">
                        <img src={img3} alt="Image" className='' />
                        <img src={img4} alt="Image" className='' />
                    </div>
                </div>
                <div className='trends'>
                    <div className='trends-text'>
                        <h3>SHOP BY TRENDS</h3>
                        <div className='trends-img'>
                            <img src={img5} alt="Image" className='' />
                            <img src={img6} alt="Image" className='' />
                            <img src={img7} alt="Image" className='' />
                            <img src={img8} alt="Image" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default DropDown;
