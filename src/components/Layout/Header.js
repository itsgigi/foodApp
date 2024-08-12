import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImg from "../../assets/cibo.jpeg";
import logo from "../../assets/logoballetti.png";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;
