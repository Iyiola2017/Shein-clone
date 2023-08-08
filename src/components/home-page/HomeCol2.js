import img1 from '../images/12.jpg';
import img2 from '../images/12.webp';
import img3 from '../images/13.webp';
import img4 from '../images/14.webp';

function HomeCol2() {
    return (
        <div className='home-col2'>
            <div className='row4'>
                <img src={img1} alt="Image" className='' />
            </div>
            <div className='row5'>
                <img src={img2} alt="Image" className='' />
                <img src={img3} alt="Image" className='' />
                <img src={img4} alt="Image" className='' />
            </div>
        </div>
    )
};
export default HomeCol2;