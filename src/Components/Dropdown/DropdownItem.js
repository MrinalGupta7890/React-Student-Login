import React from "react";
import "./Dropdown.css";

const DropdownItem = ({ option, onSelect }) => {
    return (
        <li className="dropdown-item" onClick={() => onSelect(option)}>
            {option}
        </li>
    );
};

export default DropdownItem;
