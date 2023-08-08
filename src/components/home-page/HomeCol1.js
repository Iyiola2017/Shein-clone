import img1 from '../images/9.webp';
import img2 from '../images/10.webp';
import img3 from '../images/11.webp';
import img4 from '../images/spring.jpg';
import img5 from '../images/11.png';

function HomeCol1() {
    return (
        <div className='home-col1'>
            <div className='row1'>
                <img src={img1} alt="Image" className='' />
                <img src={img2} alt="Image" className='' />
                <img src={img3} alt="Image" className='' />
            </div>
            <div className='row2'>
                <img src={img4} alt="Image" className='' />
            </div>
            <div className='row3'>
                <img src={img5} alt="Image" className='' />
            </div>
        </div>
    )
};

export default HomeCol1;