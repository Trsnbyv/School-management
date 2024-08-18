import { Route, Routes } from "react-router-dom";
import {
  Billing,
  Home,
  Students,
  Teachers,
  Exams,
  Features,
  Settings,
  TeacherModal,
  TeacherDetailModal,
} from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";
import { TeachersProvider } from "../../context/TeachersContext";

function DashboardPage() {
  return (
    <>
      <div className="container mx-auto flex">
        <Navbar />
        <TeachersProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/features" element={<Features />} />
              <Route path="/teacher-modal" element={<TeacherModal />} />
              <Route path="/teacher-modal/:id" element={<TeacherDetailModal />} />
            </Routes>
        </TeachersProvider>
      </div>
    </>
  );
}

export default DashboardPage;
