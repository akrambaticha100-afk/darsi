import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar1 } from "./components/navbar1";

// NOTICE THE CAPITAL LETTERS IN THE IMPORT NAMES
import StudentDashboard from "./pages/studentDashboard"; 
import TeacherDashboard from "./pages/teacherDashboard";
import Lesson from "./pages/Lesson";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar1 />
        <div className="p-4">
          <Routes>
            {/* NOTICE THE CAPITAL LETTERS IN THE TAGS */}
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/lesson" element={<Lesson />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App