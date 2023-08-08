import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

function Footer() {
    return (
        <div className="main-footer">
            <div className="combined">
                <FooterLeft />
                <FooterRight />
            </div>
        </div>
    )
};
export default Footer;