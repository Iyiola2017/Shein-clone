import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../images/122.webp';
import img2 from '../images/123.webp';
import img3 from '../images/124.webp';
import img4 from '../images/125.webp';
import img5 from '../images/126.webp';
import img6 from '../images/127.webp';
import img7 from '../images/128.webp';
import img8 from '../images/129.webp';
import img9 from '../images/130.webp';
import img10 from '../images/131.webp';
import img11 from '../images/132.webp';
import img12 from '../images/133.webp';
import img13 from '../images/134.webp';
import img14 from '../images/135.webp';
import img15 from '../images/136.webp';
import img16 from '../images/137.webp';
import img17 from '../images/138.webp';
import img18 from '../images/heart.svg';
import img19 from '../images/145.webp';
import img20 from '../images/146.webp';
import img21 from '../images/147.webp';
function ProductCol1() {

    const { _id } = useParams();
    const [productArr, setProductArr] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://159.65.21.42:9000/product/" + _id)
            .then((resp) => resp.json())
            .then((data) => {
                setProductArr(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="product-col1">
            {loading === true ? (
                <div>Product loading, please wait</div>
            ) : (<div>
                <div className="product-col1-text">
                    <p>Home  <span>/</span></p>
                    <p>Women Apparel  <span>/</span></p>
                    <p>Women Clothing  <span>/</span></p>
                    <p>Women Tops, Blouses and Tee  <span>/</span></p>
                    <p>Women T-Shirt  <span>/</span></p>
                    <p>SHEIN EZwear Backless Batwing Sleeve Solid Tee</p>
                </div>
                <div className='product-preview'>
                    <div className="product-row1">
                        <div className="hover-image">
                            {/* <img src={img1} alt="Image" className='' /> */}
                            <img src={"http://159.65.21.42:9000" + productArr.image} alt="Image" className='' />

                            <img src={"http://159.65.21.42:9000" + productArr.image} alt="Image" className='' />
                            <img src={"http://159.65.21.42:9000" + productArr.image} alt="Image" className='' />
                            <img src={"http://159.65.21.42:9000" + productArr.image} alt="Image" className='' />
                        </div>
                        <div className='main-hover'>
                            <img src={"http://159.65.21.42:9000" + productArr.image} alt="Image" className='' />
                        </div>
                    </div>

                    <div className='product-row2'>
                        <div className='product-row2-text'>
                            <p>{productArr.description}</p>
                            <p>SKU: sw2203027187822726  <span>&#9733; &#9733; &#9733; &#9733; &#9733;  (1000+ Reviews)</span></p>
                            <h6>${productArr.price}</h6>
                        </div>
                        <div className='product-row2-color'>
                            <div className='product-row2-color-text'>
                                <h6>Color: <span>Black</span></h6>
                            </div>
                            <div className='product-row2-color-img'>
                                <img src={img6} alt="Image" className='' />
                                <img src={img7} alt="Image" className='' />
                                <img src={img8} alt="Image" className='' />
                                <img src={img9} alt="Image" className='' />
                                <img src={img10} alt="Image" className='' />
                                <img src={img11} alt="Image" className='' />
                                <img src={img12} alt="Image" className='' />
                                <img src={img13} alt="Image" className='' />
                                <img src={img14} alt="Image" className='' />
                                <img src={img15} alt="Image" className='' />
                                <img src={img16} alt="Image" className='' />
                                <img src={img17} alt="Image" className='' />
                            </div>
                        </div>

                        <div className='product-row2-size'>
                            <div className='product-row2-size-text'>
                                <h6>Size</h6>
                            </div>
                            <div className="product-row2-size-btn">
                                <button>XS</button>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                            </div>
                            <div className='size-guide'>
                                <p>Size Guide</p>
                                <p>Not your size? <span>Tell me your size</span></p>
                            </div>
                            <div className='add-to-bag'>
                                <Link to="/cart"><button>ADD TO BAG</button></Link>
                                <img src={img18} alt="Image" className='' />
                            </div>
                            <div className='Earn'>
                                <p>Earn up to 6 SHEIN Points calculated at checkout.</p>
                            </div>
                        </div>
                        <div className='free-shipping'>
                            <div className='free-text'>
                                <p>Free Shipping  <span>?</span></p>
                                <p>Free express shipping on orders over $129.00 estimated to be delivered on 04/18/23 - 04/21/2023.</p>
                            </div>
                            <div className='free-text'>
                                <p>Return Policy  <span>?</span></p>
                                <p>Learn More</p>
                            </div>
                        </div>
                        <div className='describe'>
                            <div className='description-txt'>
                                <h6>Description</h6>
                                <h6>+</h6>
                            </div>
                            <div className='description-txt'>
                                <h6>Size & Fit</h6>
                                <h6>+</h6>
                            </div>
                            <div className='description-txt'>
                                <h6>About Collection</h6>
                                <h6>-</h6>
                            </div>
                        </div>

                        <div className='ezwear'>
                            <div className='ezwear-btn'>
                                <button>SHEIN <span>EZwear</span></button>
                            </div>
                            <div className='ezwear-txt'>
                                <h6>SHEIN EZwear</h6>
                                <p>SHEIN EZwear dials in casual-cool with the latest in laid-back threads.</p>
                                <p>View Product <span>&#8250;</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-row3'>
                    <div className='product-row3-TxT'>
                        <h1>Get The Look</h1>
                        <p>LOOK A</p>
                    </div>
                    <div className='Product-row3-flex'>
                        <div className='Product-row3-image1'>
                            <img src={img19} alt="Image" className='' />

                        </div>
                        <div className='Product-row3-image2'>
                            <img src={img20} alt="Image" className='' />

                            <img src={img21} alt="Image" className='' />


                        </div>
                    </div>
                </div>
            </div>
            )}


        </div>
    )
};
export default ProductCol1;