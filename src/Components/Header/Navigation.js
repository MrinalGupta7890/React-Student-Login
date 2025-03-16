import React from "react";
import "./Header.css";
import Dropdownicon from "../../Assets/Images/Dropdownicon.png";
import CONSTANTS from "../../Constants/constants";

const Navigation = ({ handleClick }) => {
    return (
        <>
            {CONSTANTS.NAVIGATION.ITEMS.map((item, index) => (
                <span key={index} className={item.className} onClick={() => handleClick(item.label)}>
                    {item.label}
                </span>
            ))}
            <img src={Dropdownicon} alt="dropdown" className="decorative-image" />
        </>
    );
};

export default Navigation;
