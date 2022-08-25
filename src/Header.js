import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) {
      signOut(auth);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          //https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {state.user ? `Hello ${state.user.email}` : "Hello Guest"}{" "}
            </span>

            <span className="header__optionLineTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="header__optionLineTwo header__basketCount">
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
