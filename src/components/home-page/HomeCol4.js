import img1 from '../images/16.webp';
import img2 from '../images/38.webp';
import img3 from '../images/39.webp';
import img4 from '../images/40.webp';
import img5 from '../images/41.webp';
import img6 from '../images/42.webp';
import img7 from '../images/43.webp';
function HomeCol4() {
    return (
        <div className="col4">
            <div className='row7-header'>
                <h2>3 FOR US$29.9</h2>
            </div>
            <div className="row7">
                <div className='row7-image'>
                    <img src={img1} alt="Image" className='image7' />
                    <img src={img2} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$15.00</p>
                    </div>
                </div>

                <div className='row7-image'>
                    <img src={img3} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$15.00</p>
                    </div>
                </div>

                <div className='row7-image'>
                    <img src={img1} alt="Image" className='image7' />
                    <img src={img4} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$12.00</p>
                    </div>
                </div>

                <div className='row7-image'>
                    <img src={img1} alt="Image" className='image7' />
                    <img src={img5} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$12.00</p>
                    </div>
                </div>

                <div className='row7-image'>
                    <img src={img1} alt="Image" className='image7' />
                    <img src={img6} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$13.00</p>
                    </div>
                </div>

                <div className='row7-image'>
                    <img src={img7} alt="Image" className='image3' />
                    <div className='row7-price'>
                        <p>$16.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeCol4;