import React from "react";
import "./Task.css";
import CONSTANTS from "../../Constants/constants.js";

const TaskDetails = () => {

    return (
        <div className="task-details-container">
            <textarea className="description" placeholder={CONSTANTS.TASK.DESCRIPTION} />
            <div className="attachment-button">
                <span className="attachment-text">{CONSTANTS.BUTTON.ATTACHMENT}</span>
            </div>
            <div className="comment-label">{CONSTANTS.TASK.COMMENT}</div>
            <textarea className="comment" placeholder={CONSTANTS.TASK.COMMENT} />
            <div className="submit-button">
                <span className="submit-text">{CONSTANTS.BUTTON.SUBMIT}</span>
            </div>
        </div>
    );
};

export default TaskDetails;
