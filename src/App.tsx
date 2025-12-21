import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar1 } from "./components/navbar1";

import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Lesson from "./pages/Lesson";
import Courses from "./routes/courses";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar1 />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/courses" element={<Courses />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App