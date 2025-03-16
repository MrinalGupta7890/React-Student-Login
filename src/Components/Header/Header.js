import React, { useState } from "react";
import "./Header.css";
import Task from "../Task/Task";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";
import CONSTANTS from "../../Constants/constants";

const Header = () => {
    const [showTask, setShowTask] = useState(false);

    const handleClick = (label) => {
        if (label === "Task") {
            setShowTask((prevState) => !prevState);
        }
    };

    return (
        <>
            <header className="header-container">
                <div className="text-yovro">{CONSTANTS.TEXT.APP_NAME}</div>
                <Navigation handleClick={handleClick} />
                <UserProfile />
            </header>

            {showTask && <Task />}
        </>
    );
};

export default Header;
