import img1 from '../images/52.webp';
import img2 from '../images/53.webp';
import img3 from '../images/54.webp';
import img4 from '../images/55.webp';
import img5 from '../images/56.webp';
function HomeCol8() {
    return (
        <div className="col8">
            <div className='row11-header'>
                <h1>Style Gallery</h1>
            </div>
            <div className='row11-image'>
                <img src={img1} alt="Image" className='' />
                <img src={img2} alt="Image" className='' />
                <img src={img3} alt="Image" className='' />
                <img src={img4} alt="Image" className='' />
                <img src={img5} alt="Image" className='' />
            </div>
            <div className='row11-btn'>
                <button>Spring & Summer</button>
                <button>SHEIN<span>springiton</span></button>
                <button>Embrace Casual Style</button>
                <button>The Denim Guide</button>
                <button>Girls Outing</button>
                <button>Curve</button>
                <button>Energetic Look</button>
                <button>Weekend Gateway</button>
                <button>Street Style</button>
            </div>
        </div>
    )
};
export default HomeCol8;