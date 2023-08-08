import img1 from '../images/36.webp';
import img2 from '../images/15.webp';
import img7 from '../images/16.webp';
import img3 from '../images/17.webp';
import img4 from '../images/18.webp';
import img5 from '../images/19.webp';
import img6 from '../images/20.webp';
import img8 from '../images/lightning-charge-fill.svg';
function HomeCol3() {
    return (
        <div className='col3'>
            <div className='row6-header'>
                <h2>FLASH SALE</h2>
            </div>
            <div className='row6'>
                <div className='row6-image'>
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-66%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img1} alt="Image" className='image2' />

                    <div className='price'>
                        <p>$8.50 <span>$25.00</span></p>
                        <p>9% sold</p>
                    </div>
                </div>

                <div className='row6-image'>
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-56%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img2} alt="Image" className='image2' />
                    <div className='price'>
                        <p>$8.00 <span>$18.00</span></p>
                        <p>12% sold</p>
                    </div>
                </div>

                <div className="row6-image">
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-52%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img3} alt="Image" className='image2' />
                    <div className='price'>
                        <p>$7.75 <span>$16.00</span></p>
                        <p>0% sold</p>
                    </div>
                </div>

                <div className="row6-image">
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-55%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img4} alt="Image" className='image2' /><div className='price'>
                        <p>$2.25 <span>$5.00</span></p>
                        <p>34% sold</p>
                    </div>

                </div>

                <div className="row6-image">
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-57%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img5} alt="Image" className='image2' />
                    <div className='price'>
                        <p>$4.75 <span>$11.00</span></p>
                        <p>0% sold</p>
                    </div>
                </div>

                <div className="row6-image">
                    <div className='flash'>
                        <img src={img8} alt="Image" className='image8' />
                        <p>-53%</p>
                    </div>
                    <img src={img7} alt="Image" className='image7' />
                    <img src={img6} alt="Image" className='image2' />
                    <div className='price'>
                        <p>$9.00 <span>$10.00</span></p>
                        <p>0% sold</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default HomeCol3;