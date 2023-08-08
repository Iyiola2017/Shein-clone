import img1 from '../images/57.png';
import img2 from '../images/58.png';
import img8 from '../images/64.png';
import img3 from '../images/59.png';
import img4 from '../images/60.png';
import img5 from '../images/61.png';
import img6 from '../images/62.png';
import img7 from '../images/63.png';
import img9 from '../images/apple.svg';
import img10 from '../images/android2.svg';
import img11 from '../images/65.png';
import img12 from '../images/66.png';
import img13 from '../images/67.png';
import img14 from '../images/68.png';
import img15 from '../images/69.png';
import img16 from '../images/70.png';
import img17 from '../images/71.webp';
import img18 from '../images/72.png';
import img19 from '../images/73.png';
import img20 from '../images/74.png';
import img21 from '../images/75.png';
import img22 from '../images/76.png';
function FooterRight() {
    return (
        <div className="footer-right">
            <div className="find-us">
                <h3>FIND US ON</h3>
                <h3>APP</h3>
            </div>
            <div className="social-media-icons">
                <div className="media1">
                    <img src={img1} alt="Image" className='' />
                    <img src={img2} alt="Image" className='' />
                    <img src={img3} alt="Image" className='' />
                    <img src={img4} alt="Image" className='' />
                    <img src={img5} alt="Image" className='' />
                    <img src={img6} alt="Image" className='' />
                    <img src={img7} alt="Image" className='' />
                    <img src={img8} alt="Image" className='' />
                </div>
                <div className="media2">
                    <img src={img9} alt="Image" className='' />
                    <img src={img10} alt="Image" className='' />
                </div>
            </div>

            <div className='sign-up'>
                <div className='sign-up-text'>
                    <h6>SIGN UP FOR SHEIN STYLE NEWS</h6>
                </div>
                <div className='sign-up-input'>
                    <input type="text" placeholder='Your Email Address' />
                    <button>Subscribe</button>
                </div>
                <div className='sign-up-text2'>
                    <p>By clicking the SUBSCRIBE button, you are agreeing to our<span>Privacy & Cookie Policy</span></p>
                </div>
            </div>
            <div className='payment'>
                <div className='payment-text'>
                    <h6>WE ACCEPT</h6>
                </div>
                <div className="payment-image">
                    <img src={img11} alt="Image" className='' />
                    <img src={img12} alt="Image" className='' />
                    <img src={img13} alt="Image" className='' />
                    <img src={img14} alt="Image" className='' />
                    <img src={img15} alt="Image" className='' />
                    <img src={img16} alt="Image" className='' />
                    <img src={img17} alt="Image" className='' />
                    <img src={img18} alt="Image" className='' />
                    <img src={img19} alt="Image" className='' />
                    <img src={img20} alt="Image" className='' />
                    <img src={img21} alt="Image" className='' />
                    <img src={img22} alt="Image" className='' />
                </div>
            </div>
        </div>
    )
};
export default FooterRight;