import React, { useState } from "react";
import "./Dropdown.css";
import ArrowDown from "../../Assets/Images/arrow-down.png";
import DropdownItem from "./DropdownItem";
import CONSTANTS from "../../Constants/constants";

const Dropdown = ({ options, defaultLabel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultLabel);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div className="rectangle" onClick={toggleDropdown}>
                <span className="rectangle-text">{selected}</span>
                <img src={ArrowDown} alt={CONSTANTS.DROPDOWN.ALT_TEXT} className="rectangle-icon" />
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <DropdownItem key={index} option={option} onSelect={handleSelect} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
