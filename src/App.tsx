import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import StudentLayout from './components/StudentLayout';
import TeacherLayout from './components/TeacherLayout';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Chat from './pages/Chat';
import Assessments from './pages/Assessments';
import Assessment from './pages/Assessment';
import CreateCourse from './pages/CreateCourse';
import EditCourse from './pages/EditCourse';
import Course from './pages/Course';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="chat" element={<Chat />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="assessment/:assessmentId" element={<Assessment />} />
          <Route path="course/:courseId" element={<Course />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="course/new" element={<CreateCourse />} />
          <Route path="course/:courseId/edit" element={<EditCourse />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
