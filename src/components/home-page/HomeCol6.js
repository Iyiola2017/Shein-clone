import img1 from '../images/46.gif';
import img2 from '../images/47.png';
import img3 from '../images/48.gif';
import img4 from '../images/49.gif';
import img5 from '../images/50.png';
function HomeCol6() {
    return (
        <div className="col6">
            <div className='row9-header'>
                <h2>Trending Brands</h2>
            </div>
            <div className='row9-image'>
                <img src={img1} alt="Image" className='' />
                <img src={img2} alt="Image" className='' />
                <img src={img3} alt="Image" className='' />
                <img src={img4} alt="Image" className='' />
                <img src={img5} alt="Image" className='' />
            </div>
        </div>
    )
};
export default HomeCol6;