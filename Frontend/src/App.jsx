import "./App.css";
import StudentAwards from "./Awards/StudentAwards";
import { Routes, Route, useLocation } from "react-router-dom";
import Department from "./DepartmentPage/Department";
import Logo from "./LandingPage/Logo";
import Header from "./LandingPage/Header";
import Teachermain from "./TeachersPage/Teachermain";
import Courses from "./CoursesOffers/Courses";
import Timetable from "./TimeTable/Timetable";
import ScrolltoTop from "./ScrolltoTop";
import Awards from "./Awards/Awards";
import Jobs from "./Jobs/Jobs";
import TeacherLogin from "./Login/TeacherLogin";
import TeachersAch from "./Awards/TeachersAch";
import StudentLogin from "./Login/StudentLogin";
import AdminLogin from "./Admin/AdminLogin";
import StudentDash from "./Dashboards/StudentDash";
import TeacherDash from "./Dashboards/TeacherDash";
import AdminDash from "./Dashboards/AdminDash";
import TeacherOpt1 from "./Dashboards/TeacherOpt1";
import TeacherOpt2 from "./Dashboards/TeacherOpt2";
import TeacherOpt3 from "./Dashboards/TeacherOpt3";
import TeacherOpt4 from "./Dashboards/TeacherOpt4";
import TeacherOpt5 from "./Dashboards/TeacherOpt5";
import StudentOpt1 from "./Dashboards/StudentOpt1";
import StudentOpt2 from "./Dashboards/StudentOpt2";
import StudentOpt3 from "./Dashboards/StudentOpt3";
import StudentOpt4 from "./Dashboards/StudentOpt4";
import StudentOpt5 from "./Dashboards/StudentOpt5";
import AdminOpt1 from "./Dashboards/AdminOpt1";
import AdminOpt2 from "./Dashboards/AdminOpt2";
import AdminOpt3 from "./Dashboards/AdminOpt3";
import AdminOpt4 from "./Dashboards/AdminOpt4";
import AdminOpt5 from "./Dashboards/AdminOpt5";
import AdminOpt6 from "./Dashboards/AdminOpt6";
// import './assets/css/fonts.css';
function App() {
  const location = useLocation();
  const { pathname } = location;
  let a, b, c, d;
  if (
    pathname === "/Login" ||
    pathname === "/Login/Student" ||
    pathname === "/Login/Dashboard" ||
    pathname === "/Login/Student/Dashboard" ||
    pathname === "/Admin/AdminDashboard" ||
    pathname === "/Login/Dashboard/Option1" ||
    pathname === "/Login/Dashboard/Option2" ||
    pathname === "/Login/Dashboard/Option3" ||
    pathname === "/Login/Dashboard/Option4" ||
    pathname === "/Login/Dashboard/Option5" ||
    pathname === "/Login/Student/Dashboard/Option1" ||
    pathname === "/Login/Student/Dashboard/Option2" ||
    pathname === "/Login/Student/Dashboard/Option3" ||
    pathname === "/Login/Student/Dashboard/Option4" ||
    pathname === "/Login/Student/Dashboard/Option5" ||
    pathname === "/Admin/AdminDashboard/Option1" ||
    pathname === "/Admin/AdminDashboard/Option2" ||
    pathname === "/Admin/AdminDashboard/Option3" ||
    pathname === "/Admin/AdminDashboard/Option4" ||
    pathname === "/Admin/AdminDashboard/Option5" ||
    pathname === "/Admin/AdminDashboard/Option6"
  ) {
    a = true;
  }
  if (
    pathname === "/Login/Student" ||
    pathname === "/Login/Dashboard" ||
    pathname === "/Login/Student/Dashboard" ||
    pathname === "/Login/Dashboard/Option1" ||
    pathname === "/Login/Dashboard/Option2" ||
    pathname === "/Login/Dashboard/Option3" ||
    pathname === "/Login/Dashboard/Option4" ||
    pathname === "/Login/Dashboard/Option5" ||
    pathname === "/Login/Student/Dashboard/Option1" ||
    pathname === "/Login/Student/Dashboard/Option2" ||
    pathname === "/Login/Student/Dashboard/Option3" ||
    pathname === "/Login/Student/Dashboard/Option4" ||
    pathname === "/Login/Student/Dashboard/Option5"
  ) {
    b = true;
    console.log(b);
  }
  if (
    pathname === "/Login/Student/Dashboard" ||
    pathname === "/Login/Student/Dashboard/Option1" ||
    pathname === "/Login/Student/Dashboard/Option2" ||
    pathname === "/Login/Student/Dashboard/Option3" ||
    pathname === "/Login/Student/Dashboard/Option4" ||
    pathname === "/Login/Student/Dashboard/Option5"
  ) {
    c = true;
  }
  if (
    pathname === "/Admin/AdminDashboard" ||
    pathname === "/Admin/AdminDashboard/Option1" ||
    pathname === "/Admin/AdminDashboard/Option2" ||
    pathname === "/Admin/AdminDashboard/Option3" ||
    pathname === "/Admin/AdminDashboard/Option4" ||
    pathname === "/Admin/AdminDashboard/Option5" ||
    pathname === "/Admin/AdminDashboard/Option6"
  ) {
    d = true;
  }
  return (
    <>
      {console.log(pathname)}
      <ScrolltoTop></ScrolltoTop>
      <Header a={a}></Header>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Teachers" element={<Teachermain />} />
        <Route path="/Courses" element={<Courses />} />
        <Route exact path="/Timetable" element={<Timetable />} />
        <Route exact path="/Admin" element={<AdminLogin d={d} />}>
          <Route exact path="/Admin/AdminDashboard" element={<AdminDash />}>
            <Route
              exact
              path="/Admin/AdminDashboard/Option1"
              element={<AdminOpt1 />}
            />
            <Route
              exact
              path="/Admin/AdminDashboard/Option2"
              element={<AdminOpt2 />}
            />
            <Route
              exact
              path="/Admin/AdminDashboard/Option3"
              element={<AdminOpt3 />}
            />
            <Route
              exact
              path="/Admin/AdminDashboard/Option4"
              element={<AdminOpt4 />}
            />
            <Route
              exact
              path="/Admin/AdminDashboard/Option6"
              element={<AdminOpt6 />}
            />
            <Route
              exact
              path="/Admin/AdminDashboard/Option5"
              element={<AdminOpt5 />}
            />
          </Route>
        </Route>
        <Route exact path="/Awards" element={<Awards />}>
          <Route index element={<StudentAwards />} />
          <Route exact path="/Awards/Students" element={<StudentAwards />} />
          <Route exact path="/Awards/Faculty" element={<TeachersAch />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/Login" element={<TeacherLogin b={b}></TeacherLogin>}>
          <Route exact path="/Login/Dashboard" element={<TeacherDash />}>
            <Route
              exact
              path="/Login/Dashboard/Option1"
              element={<TeacherOpt1 />}
            />
            <Route
              exact
              path="/Login/Dashboard/Option2"
              element={<TeacherOpt2 />}
            />
            <Route
              exact
              path="/Login/Dashboard/Option3"
              element={<TeacherOpt3 />}
            />

            <Route
              exact
              path="/Login/Dashboard/Option4"
              element={<TeacherOpt4 />}
            />
            <Route
              exact
              path="/Login/Dashboard/Option5"
              element={<TeacherOpt5 />}
            />
          </Route>
          <Route exact path="/Login/Student" element={<StudentLogin c={c} />}>
            <Route
              exact
              path="/Login/Student/Dashboard"
              element={<StudentDash />}
            >
              <Route
                exact
                path="/Login/Student/Dashboard/Option1"
                element={<StudentOpt1 />}
              />
              <Route
                exact
                path="/Login/Student/Dashboard/Option2"
                element={<StudentOpt2 />}
              />
              <Route
                exact
                path="/Login/Student/Dashboard/Option3"
                element={<StudentOpt3 />}
              />
              <Route
                exact
                path="/Login/Student/Dashboard/Option4"
                element={<StudentOpt4 />}
              />
              <Route
                exact
                path="/Login/Student/Dashboard/Option5"
                element={<StudentOpt5 />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/JobsandInternship" element={<Jobs />} />
      </Routes>
    </>
  );
}
export default App;
