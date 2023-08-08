import img1 from '../images/geo-alt-fill.svg';
function FooterLeft() {
    return (
        <div className="footer-left">
            <div className="footer-left-text">
                <div className="upper-text">
                    <div className="company-info">
                        <h3>COMPANY INFO</h3>
                        <p>About SHEIN</p>
                        <p>Affiliate</p>
                        <p>Fashion Blogger</p>
                        <p>Social Responsibility</p>
                        <p>Careers</p>
                    </div>

                    <div className="help">
                        <h3>HELP & SUPPORT</h3>
                        <p>Shipping Info</p>
                        <p>Returns</p>
                        <p>How to Order</p>
                        <p>How to Track</p>
                        <p>Size Guide</p>
                        <p>SHEIN VIP</p>
                    </div>

                    <div className="customer-care">
                        <h3>Customer Care</h3>
                        <p>Contact Us</p>
                        <p>Payment Method</p>
                        <p>Bonus Point</p>
                        <p>Klarna</p>
                    </div>
                </div>
                <div className="lower-text">
                    <div className="lower-text1">
                        <p>©2009-2023 SHEIN All Rights Reserved</p>
                    </div>
                    <div className="lower-text2">
                        <p>Private Center</p>
                        <p>Privacy & Cookie policy</p>
                        <p>Manage Cookies</p>
                        <p>Terms & Conditions</p>
                        <p>IP Notice</p>
                        <p>Imprint</p>
                        <p><span><img src={img1} alt="Image" className='' /></span>Nigeria</p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default FooterLeft;