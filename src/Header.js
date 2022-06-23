import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
function Header() {
    const [{basket}] = useStateValue();

    return <nav className="header">

          {/*logo on left -> img*/}
        <Link to="/login">
          <img 
            className="header_logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
          />
        </Link>
          {/* search box */}
          <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
          </div>

          {/* 3 links(sign in, return& order, ypur prime) */}
          <div className="header_nav">
            {/* Link 1 */}
              <Link className="header_link">
                <div className="header_option">
                  <span className="header_optionLine1">Hello</span>
                  <span className="header_optionLine2">Sign in</span>
                </div>
              </Link>
            {/* Link 2 */}
            <Link className="header_link">
                <div className="header_option">
                  <span className="header_optionLine1">Returns</span>
                  <span className="header_optionLine2">& Orders</span>
                </div>
              </Link>
            {/* Link 3 */}
            <Link className="header_link">
                <div className="header_option">
                  <span className="header_optionLine1">Your</span>
                  <span className="header_optionLine2">Prime</span>
                </div>
              </Link>
            {/* Link 4 */}
            <Link to="/checkout" className="header_link">
             <div className="header_optionbasket">
             {/*shopping icon */}
              <ShoppingBasketIcon className="header_basket"/>
             {/*number items in basket */}
             <span className="header_optionLine2 header_basketcount">{basket?.length}</span>
             </div>
            </Link>
          </div>
          {/* Basket icon with number*/}  
        
    </nav>
}

export default Header;
