import React from "react";
import { useNavigate } from "react-router-dom";
import "./Task.css";
import CONSTANTS from "../../Constants/constants.js";

const ApiTasks = () => {
    const navigate = useNavigate();

    return (
        <div className="api-rect" onClick={() => navigate("/tasks/details")}>
            <span className="api-text">{CONSTANTS.TASK.CREATE_API}</span>
        </div>
    );
};

export default ApiTasks;
