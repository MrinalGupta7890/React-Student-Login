import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Task.css";
import Dropdown from "../Dropdown/Dropdown.js";
import AssignedTasks from "./AssignedTasks";
import CompletedTasks from "./CompletedTasks";
import ApiTask from "./ApiTasks.js";
import TaskDetails from "./TaskDetails";
import CONSTANTS from "../../Constants/constants.js";

const Task = () => {
    return (
        <div className="task-container">
            {CONSTANTS.TASK.TITLE}
            <Dropdown 
                defaultLabel={CONSTANTS.DROPDOWN.DEFAULT_LABEL}
                options={CONSTANTS.DROPDOWN.SUBJECT_OPTIONS}
            />

            <Routes>
                <Route path="/" element={
                    <>
                        <AssignedTasks />
                        <CompletedTasks />
                        <ApiTask />
                    </>
                } />
                <Route path="/details" element={<TaskDetails />} />
            </Routes>
        </div>
    );
};

export default Task;
