import React from "react";
import "./Task.css";
import CONSTANTS from "../../Constants/constants";

const CompletedTasks = () => {
    return (
        <div className="completed-task-rect">
            <span className="completed-task-text">{CONSTANTS.TASK.COMPLETED}</span>
        </div>
    );
};

export default CompletedTasks;
