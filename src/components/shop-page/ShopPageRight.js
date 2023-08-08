import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import img1 from '../images/77.webp';
// import img2 from '../images/78.webp';
// import img3 from '../images/79.webp';
// import img4 from '../images/80.webp';
// import img5 from '../images/81.webp';
// import img6 from '../images/82.webp';
// import img7 from '../images/83.webp';
// import img8 from '../images/84.webp';
import img9 from '../images/heart.svg';
// import img10 from '../images/86.webp';
// import img11 from '../images/87.webp';
// import img12 from '../images/88.webp';
// import img13 from '../images/89.webp';
// import img14 from '../images/90.webp';
// import img15 from '../images/91.webp';
// import img16 from '../images/92.webp';
// import img17 from '../images/93.webp';
// import img18 from '../images/94.webp';
// import img19 from '../images/95.webp';
// import img20 from '../images/96.webp';
// import img21 from '../images/97.webp';
// import img22 from '../images/98.webp';
// import img23 from '../images/99.webp';
// import img24 from '../images/100.webp';
// import img25 from '../images/101.webp';
// import img26 from '../images/102.webp';
// import img27 from '../images/103.webp';
// import img28 from '../images/104.webp';
// import img29 from '../images/105.webp';
// import img30 from '../images/106.webp';
// import img31 from '../images/107.webp';
// import img32 from '../images/108.webp';
// import img33 from '../images/109.webp';
// import img34 from '../images/110.webp';
// import img35 from '../images/111.webp';
// import img36 from '../images/112.webp';
// import img37 from '../images/113.webp';
// import img38 from '../images/114.webp';
// import img39 from '../images/115.webp';
// import img40 from '../images/116.webp';
import img41 from '../images/117.webp';
import img42 from '../images/118.webp';
import img43 from '../images/119.webp';
import img44 from '../images/120.webp';
import img45 from '../images/121.webp';
import { SheinContext } from "../context/SheinContext";


function ShopPageRight() {

    const [productArr, setProductArr] = useState([


        //     {
        //         id: 1,
        //         img: img1,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 2,
        //         img: img2,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 3,
        //         img: img3,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 4,
        //         img: img4,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 5,
        //         img: img5,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 6,
        //         img: img6,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 7,
        //         img: img7,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 8,
        //         img: img8,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 10,
        //         img: img10,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 11,
        //         img: img11,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 12,
        //         img: img12,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 13,
        //         img: img13,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 14,
        //         img: img14,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 15,
        //         img: img15,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 16,
        //         img: img16,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 17,
        //         img: img17,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 18,
        //         img: img18,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 19,
        //         img: img19,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 20,
        //         img: img20,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 21,
        //         img: img21,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 22,
        //         img: img22,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 23,
        //         img: img23,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 24,
        //         img: img24,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 25,
        //         img: img25,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 26,
        //         img: img26,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 27,
        //         img: img27,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 28,
        //         img: img28,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 29,
        //         img: img29,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 30,
        //         img: img31,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 32,
        //         img: img32,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 33,
        //         img: img33,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 34,
        //         img: img34,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 35,
        //         img: img35,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 36,
        //         img: img36,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 37,
        //         img: img37,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 38,
        //         img: img38,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 39,
        //         img: img39,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 40,
        //         img: img40,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 41,
        //         img: img25,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     },
        //     {
        //         id: 42,
        //         img: img30,
        //         descrp: "SHEIN EZwear Backless Batwing Sleeve...",
        //         price: "$6.00"
        //     }
    ]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(SheinContext);

    useEffect(() => {
        fetch("http://159.65.21.42:9000/products")
            .then((resp) => resp.json())
            .then((data) => {
                const filterdata = data.filter((r) => {
                    return r.category === "SHEIN"
                })
                setProductArr((filterdata));
                setLoading(false);
            });
    }, []);

    return (
        <div className="shop-right">
            <div className="shop-right-image">
                {loading === true ? (
                    <div>Products loading, please wait...</div>
                ) : (
                    productArr.map((product) => (
                        <div className="shop-right-col1" key={product._id}>
                            <div className='shop-right-image1'>
                                <img src={"http://159.65.21.42:9000" + product.image} alt="Image" className='' />

                                <Link to={`/productpage/${product._id}`}><button onClick={() => addToCart(product)}>Add to Bag</button></Link>

                            </div>

                            <div className='description'>
                                <p>{product.name}</p>
                            </div>
                            <div className="amount">
                                <p>{product.description}</p>
                            </div>
                            <div className="amount">
                                <p>${product.price}</p>
                                <img src={img9} alt="Image" className='' />
                            </div>
                        </div>
                    ))
                )}




            </div>

            <div className="total">
                <p>Total 40 Pages</p>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
            </div>
            <div className="recommend">
                <h2>Recommendations For You</h2>
            </div>
            <div className="recommend-image">
                <div className="commend">
                    <img src={img41} alt="Image" className='' />
                    <p>SHEIN EZwear Backless Batwing...</p>
                    <p>$6.00</p>
                </div>

                <div className="commend">
                    <img src={img42} alt="Image" className='' />
                    <p>SHEIN EZwear Backless Batwing...</p>
                    <p>$6.00</p>
                </div>

                <div className="commend">
                    <img src={img43} alt="Image" className='' />
                    <p>SHEIN EZwear Backless Batwing...</p>
                    <p>$6.00</p>
                </div>

                <div className="commend">
                    <img src={img44} alt="Image" className='' />
                    <p>SHEIN EZwear Backless Batwing...</p>
                    <p>$6.00</p>
                </div>

                <div className="commend">
                    <img src={img45} alt="Image" className='' />
                    <p>SHEIN EZwear Backless Batwing...</p>
                    <p>$6.00</p>
                </div>
            </div>
        </div>
    )

};
export default ShopPageRight;