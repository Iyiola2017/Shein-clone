import ShopPageLeft from "./ShopPageLeft";
import ShopPageRight from "./ShopPageRight";
import ShopPageTop from "./ShopPageTop";
// import React, { useState, useEffect } from 'react';

function ShopPage() {

    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 768px)');
    //     setIsMobile(mediaQuery.matches);
    // }, []);

    return (

        <div className="main-shop-page">
            <div>
                <ShopPageTop />
            </div>

            <div className="flex">
                <ShopPageLeft />
                <ShopPageRight />
            </div>
        </div>

    )
};
export default ShopPage;