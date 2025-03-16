import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Task from "./Components/Task/Task.js";
import TaskDetails from "./Components/Task/TaskDetails.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tasks" element={<Task />} />
        <Route path="/tasks/details" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
