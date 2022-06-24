import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItemTitle">Get to Know Us</li>
                    <li className="fListItem">About Us</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Press Releases</li>
                    <li className="fListItem">Amazon Cares</li>
                    <li className="fListItem">Gift a Smile</li>
                </ul>
                <ul className="fList">
                    <li className="fListItemTitle">Connect with Us</li>
                    <li className="fListItem">Facebook</li>
                    <li className="fListItem">Insagram</li>
                    <li className="fListItem">Twitter</li>
                    <li className="fListItem">Customer Care</li>
                </ul>
                <ul className="fList">
                    <li className="fListItemTitle">Make Money with Us</li>
                    <li className="fListItem">Sell on Amazon</li>
                    <li className="fListItem">Sell under Amazon Accelerator</li>
                    <li className="fListItem">Amazon  Global Selling</li>
                    <li className="fListItem">Advertise Your Products</li>
                </ul>
                <ul className="fList">
                    <li className="fListItemTitle">Let Us Help You</li>
                    <li className="fListItem">COVID-19 and Amazon</li>
                    <li className="fListItem">Ypur Account</li>
                    <li className="fListItem">Returns Centre</li>
                    <li className="fListItem">100% Purchase Protection</li>
                    <li className="fListItem">Help</li>
                </ul>
            </div>
            <div className="fCopy">
                <div className="fCopyText">
                <span className="ftext">Amazon_Sabeel © 2022</span>
                </div>
                <img 
                className="header_logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
                />
            </div>
        </div>
    )
}
export default Footer;