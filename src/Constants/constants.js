const CONSTANTS = {
    DROPDOWN: {
        ALT_TEXT: "Dropdown Icon",
        DEFAULT_LABEL: "Subject", 
        SUBJECT_OPTIONS: ["Java", "UI/UX", "Testing"],
    },
    NAVIGATION: {
        ITEMS: [
            { label: "Practice", className: "text-practice" },
            { label: "Task", className: "text-task", hasDropdown: true },
            { label: "Notes", className: "text-notes" },
            { label: "Assessment", className: "text-assessment" },
            { label: "Mock", className: "text-mock" },
        ],
    },
    TASK: {
        TITLE: "Tasks",
        ASSIGNED: "Assigned Tasks", 
        COMPLETED: "Completed Tasks",
        CREATE_API: "Create an API",
        ATTACHMENT: "Attachment",
        DESCRIPTION: "Description : ",
        COMMENT: "Comments : ",
    },
    BUTTON: {
        SUBMIT: "Submit",
        ATTACHMENT: "Attachment", 
    },
    TEXT: {
        GREETING: "Hi, Rohith",
        APP_NAME: "Yovro",
    },
};

export default CONSTANTS;
