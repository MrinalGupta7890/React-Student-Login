import React from "react";
import "./Header.css"; // Using existing styles
import CONSTANTS from "../../Constants/constants";
import Usericon1 from "../../Assets/Images/Usericon1.png";
import Usericon2 from "../../Assets/Images/Usericon2.png";

const UserProfile = () => {
    return (
        <>
            <span className="text-hi">{CONSTANTS.TEXT.GREETING}</span>
            <img src={Usericon1} alt="usericon1" className="usericon1" />
            <img src={Usericon2} alt="usericon2" className="usericon2" />
        </>
    );
};

export default UserProfile;
