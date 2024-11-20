# Task Tracker App

## Overview

The **Task Tracker App** is a simple web-based task management application designed to help users create, manage, and delete tasks. This project integrates both frontend and backend components, with a React.js frontend interacting with a Node.js backend that uses an SQLite database to persist tasks. The application emphasizes **usability**, **user-friendly interfaces**, and **interaction design** — key principles of Human-Computer Interaction (HCI).

This project demonstrates how well-designed human-computer interactions, including intuitive UI/UX, feedback mechanisms, and task workflows, contribute to efficient task management.

---

## Features

### Frontend (React.js)
- **Create Tasks**: Users can add new tasks by filling out a form with the task name.
- **View Tasks**: A task list is displayed, showing all tasks with their respective names and the option to delete them.
- **Delete Tasks**: Users can remove tasks they no longer need by clicking the delete button next to each task.
- **Responsive UI**: The app is responsive and works well across different screen sizes (mobile and desktop).
- **Input Validation**: Ensures that empty task names are not added, preventing errors and enhancing usability.

### Backend (Node.js & SQLite)
- **RESTful API**: The backend exposes RESTful API endpoints (`GET`, `POST`, `DELETE`) to manage tasks.
- **Persistent Storage**: SQLite is used to store tasks persistently, ensuring that tasks remain across app restarts.
- **Error Handling**: Proper error messages are returned if there are issues with requests, enhancing the user experience.

### Human-Computer Interaction Considerations
- **Task Management Flow**: The application provides a clear workflow for creating, viewing, and deleting tasks. Users can focus on their tasks without being distracted by complex or unnecessary features.
- **Clear Feedback**: Feedback is given at every step, from form validation to confirmation messages when a task is added or removed. This enhances the user experience and trust in the system.
- **Error Prevention**: The app ensures that empty or invalid tasks are not submitted, and provides messages that inform the user about what went wrong.
- **Responsiveness**: The application works well on various screen sizes, optimizing the interaction for different devices, which is a key aspect of HCI for broader usability.

---

## Why This Project Is Considered a Human-Computer Interaction Project

The **Task Tracker App** can be considered a Human-Computer Interaction (HCI) project for the following reasons:

1. **User Interface Design**:
   - The app provides a clean and intuitive user interface, making it easy for users to understand and interact with the system without confusion.
   - The design prioritizes clarity, with minimal distractions and an efficient layout to maximize usability.

2. **User Input Handling**:
   - The app ensures that users provide valid input by implementing input validation (e.g., ensuring task names are not empty). This prevents errors and improves the user experience by providing guidance on what is expected.

3. **Feedback Mechanisms**:
   - When a task is created, the user receives confirmation. If something goes wrong (like submitting an empty task), the system provides an informative error message.
   - Clear labels, buttons, and on-screen instructions help guide the user through the application.

4. **Efficiency**:
   - The app's task creation and deletion process is straightforward, minimizing the number of steps needed to complete an action. This efficiency contributes to an effective user experience.
   - By using a simple task list, the app doesn't overwhelm the user with unnecessary information or complexity, staying focused on essential tasks.

5. **Responsiveness**:
   - The app adapts to different screen sizes, allowing users to interact with the task manager on both desktop and mobile devices. This accessibility improves the overall experience, allowing for flexible use cases.

---

## Installation Steps

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/HematyarMahdi/task-tracker-app.git
cd task-tracker-app

cd backend
npm install
```
### 3. Install Frontend Dependencies

Navigate to the frontend directory and install the necessary dependencies:

```bash
cd ../frontend
npm install
```
### 4. Set Up SQLite Database (Backend)
