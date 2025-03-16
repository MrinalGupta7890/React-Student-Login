import React from "react";
import "./Task.css"; 
import CONSTANTS from "../../Constants/constants";

const AssignedTasks = () => {
    return (
        <div className="assigned-task-rect">
            <span className="assigned-task-text">{CONSTANTS.TASK.ASSIGNED}</span>
        </div>
    );
};

export default AssignedTasks;
