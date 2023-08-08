import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";

import img1 from '../images/36.webp';
import img2 from '../images/15.webp';
import img3 from '../images/17.webp';
import img4 from '../images/18.webp';
import img5 from '../images/19.webp';
import img6 from '../images/20.webp';
import img7 from '../images/21.webp';
import img8 from '../images/22.webp';
import img9 from '../images/23.webp';
import img10 from '../images/24.webp';
import img11 from '../images/25.webp';
import img12 from '../images/26.webp';
import img13 from '../images/27.webp';
import img14 from '../images/28.webp';
import img15 from '../images/29.webp';
import img16 from '../images/30.webp';
import img17 from '../images/31.webp';
import img18 from '../images/32.webp';
import img19 from '../images/33.webp';
import img20 from '../images/34.webp';

function Slider() {
    const sliderImages = [
        {
            image: [{ img1 }, { img2 }, { img3 }, { img4 }, { img5 }, { img6 }, { img7 }, { img8 }, { img9 }, { img10 },
            { img11 }, { img12 }, { img13 }, { img14 }, { img15 }, { img16 }, { img17 }, { img18 }, { img19 }, { img20 }
            ]
        },
    ];
    const [activeImageNum, setCurrent] = useState(0);
    const length = sliderImages.length;
    const nextSlide = () => {
        setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };
    const prevSlide = () => {
        setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };
    if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
        return null;
    }

    return (
        <div>
            <section className="image-slider">
                <div class="left">
                    <ArrowBackIosIcon onClick={prevSlide} />
                </div>
                <div class="right">
                    <ArrowForwardIosIcon onClick={nextSlide} />
                </div>
                {sliderImages.map((currentSlide, ind) => {
                    return (
                        <div className={ind === activeImageNum ? "currentSlide active" : "currentSlide"} key={ind}>
                            {ind === activeImageNum && <img src={currentSlide.image} className="img" />}
                        </div>
                    );
                })}
            </section>
        </div>
    )

};
export default Slider;