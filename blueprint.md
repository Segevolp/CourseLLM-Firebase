# CourseLLM Blueprint

## 1. Overview

CourseLLM is a learning and teaching enhancement platform for university-level computer science courses. It provides an AI-powered assistant to help students learn course material more effectively and gives teachers tools to manage their courses, monitor student progress, and create engaging content.

### 1.1. Core Modules

*   **AI Tutor:** A student-facing chatbot that provides a guided learning experience based strictly on course materials.
*   **Personalized Assessments:** On-demand quizzes and exercises for students to practice and test their knowledge.
*   **Content Management:** A teacher-facing portal for uploading and managing course materials (PDFs, Markdown files, etc.).
*   **Course Management:** Tools for teachers to define learning trajectories and manage course structure.
*   **Analytics & Monitoring:** Dashboards for teachers to track student progress and identify areas where students are struggling.

## 2. Design and Styling

The application features a modern, clean, and accessible design with a "glass-morphism" aesthetic.

*   **Layout:** A responsive layout that works on both desktop and mobile devices. A consistent navigation sidebar provides easy access to all main sections.
*   **Styling:** We use Material-UI for the component library, with a custom dark theme. The design is visually balanced with clear typography, good spacing, and a professional color palette. All pages have a consistent look and feel.
*   **Component Library:** Material-UI is used for all UI components.

## 3. Current UI Development Plan

This plan outlines the steps taken to create the current user interface for the CourseLLM application.

### Step 1: Project Setup & Routing

*   Installed `react-router-dom` for client-side routing.
*   Set up the main application component (`App.tsx`) with the router configuration.
*   Created the following pages:
    *   `Home.tsx`: The main landing page.
    *   `TeacherDashboard.tsx`: The dashboard for teachers.
    *   `StudentDashboard.tsx`: The dashboard for students.
    *   `CreateCourse.tsx`: The page for teachers to create new courses.
    *   `EditCourse.tsx`: The page for teachers to edit existing courses.
    *   `Chat.tsx`: The AI Tutor interface for students.
    *   `Assessments.tsx`: The page for students to view their assessments.
    *   `Assessment.tsx`: The page for students to take individual assessments.
    *   `Course.tsx`: The page for students to view individual courses.
*   Created `StudentLayout.tsx` and `TeacherLayout.tsx` components for the different user roles.

### Step 2: Component & Page Implementation

*   **Layouts:** Implemented the sidebars for students and teachers with links to the main pages.
*   **Home Page:** Created a welcoming landing page with a modern design.
*   **Dashboards:** Designed and implemented the teacher and student dashboards with a "glass-morphism" design.
*   **Course Management Pages:** Created the UI for teachers to create and edit courses, with a consistent and modern design.
*   **Chat Page:** Implemented the chat interface, including a message display area and a text input field, with a modern design.
*   **Assessments Pages:** Created the UI for students to view their assessments and take individual assessments, with a consistent and modern design.
*   **Course Page:** Created the UI for students to view individual courses, with a consistent and modern design.

### Step 3: Styling and Final Touches

*   Applied consistent styling to all components and pages using Material-UI and a custom dark theme.
*   Ensured the application is responsive and looks good on different screen sizes.
*   Added accessibility features, such as ARIA attributes and proper semantic HTML.

## 4. Next Steps

*   **Backend Integration:** Connect the frontend to a backend to persist data and handle user authentication.
*   **AI Tutor Integration:** Integrate a real AI tutor into the `Chat.tsx` page.
*   **Database Integration:** Connect the application to a database to store course materials, student progress, and other data.
*   **Teacher Analytics:** Implement the analytics dashboard for teachers to monitor student progress.
*   **Student Authentication:** Add user authentication to the application to protect student data.
