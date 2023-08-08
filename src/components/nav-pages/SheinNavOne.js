import { Link } from 'react-router-dom';
import img1 from '../images/1.gif';
import img2 from '../images/person.svg'
import img3 from '../images/bag.svg'
import img4 from '../images/heart.svg'
import img5 from '../images/headset.svg'
import img6 from '../images/globe2.svg'
import img7 from '../images/chevron-left.svg'
import img8 from '../images/chevron-right.svg'
import img9 from '../images/search.svg'
import DropDown from "./DropDown";
import { SheinContext } from '../context/SheinContext';
import { useContext } from 'react';

function SheinNavOne() {
    const { cart } = useContext(SheinContext)
    return (
        <div className="main-nav">
            <nav className="red-bg">
                <img src={img1} alt="Image" className='image1' />
            </nav>
            <div className="department">
                <ul className="department-text">
                    <li>WOMEN</li>
                    <li>CURVE+PLUS</li>
                    <li>KIDS</li>
                    <li>MEN</li>
                    <li>HOME</li>
                </ul>
                <div className="web-name">
                    <Link className='link' to="/"><h1>SHEIN</h1></Link>
                </div>
                <div className="free">
                    <p>Free express shipping <span>on orders over $129.00</span></p>
                </div>
                <div className="icon">
                    <Link to="/login"><img src={img2} alt="Image" className='' /></Link>
                    <Link to="/cart"><img src={img3} alt="Image" className='' /></Link>
                    <span>{cart.length}</span>
                    <img src={img4} alt="Image" className='' />
                    <img src={img5} alt="Image" className='' />
                    <img src={img6} alt="Image" className='' />
                </div>
            </div>

            <div className="menu">

                <ul className="menu-list">
                    <li>NEW IN</li>
                    <li>#SHEIN<span>ss</span>23</li>
                    <li>SALE</li>
                    <li>CLOTHING</li>
                    <li className="drop-down">
                        <ul>TOPS</ul>
                        {/* <div> */}
                        <DropDown />
                        {/* </div> */}
                    </li>

                    <li>DRESSES</li>
                    <li>BEACHWEAR</li>
                    <li>ACTIVEWEAR</li>
                    <li>BEAUTY & ACCESSORIES</li>
                    <li>BEAUTY</li>
                </ul>
                <div className="chevron">
                    <img src={img7} alt="Image" className='' />
                    <img src={img8} alt="Image" className='' />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <img src={img9} alt="Image" className='image9' />
                </div>

            </div>

        </div >
    )
};
export default SheinNavOne;