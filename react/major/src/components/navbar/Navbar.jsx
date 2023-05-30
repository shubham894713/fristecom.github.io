import React from "react";
import RedeemIcon from "@mui/icons-material/Redeem";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GradingIcon from "@mui/icons-material/Grading";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar(props) {
  return (
    <nav>
      <div className="navHeading">
        <RedeemIcon className="headLogo" />
        <h1 className="heading">Ecom</h1>
      </div>
      <div className="menu">
        <div className="option">
          <a href="/">
            <HomeIcon className="optionLogo" />
            <h1 className="optionText">home</h1>
          </a>
        </div>
        <div className="option">
          <a href="/products">
            <InventoryIcon className="optionLogo" />
            <h1 className="optionText">Products</h1>
          </a>
        </div>
        <div className="option">
          <a href="/cart">
            <ShoppingCartIcon className="optionLogo" />
            <h1 className="optionText">Cart</h1>
          </a>
        </div>
        <div className="option">
          {props.login ? (
            <>
              <div className="option">
                <a href="/me">
                  <AccountCircleIcon className="optionLogo" />
                </a>
              </div>
              <div className="option">
                <a href="/orders">
                  <GradingIcon className="optionLogo" />
                </a>
              </div>
              {props.isAdmin ? (
                <>
                  <div className="option dropdown">
                      <button className="dropbtn">
                      <ArrowDropDownIcon className="optionLogo" />
                      </button>
                      <div className="dropdown-content">
                        <a href="/admin/products">Products</a>
                        <a href="/admin/users">Users</a>
                        <a href="/admin/orders">Orders</a>
                        <a href="/admin/products">Products</a>
                      </div>
                    </div>
                </>
              ) : undefined}
            </>
          ) : (
            <a href="/login">
              <VpnKeyIcon className="optionLogo" />
              <h1 className="optionText">login</h1>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
