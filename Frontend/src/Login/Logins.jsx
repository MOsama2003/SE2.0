import TeacherLogin from "./TeacherLogin"
import { Link, Outlet } from "react-router-dom";
export default function Logins(){
    return(
        <>
        <TeacherLogin></TeacherLogin>
        <div style={{fontSize: "100px", color:"black", zIndex:"100"}}>want to Login as a <Link to="/Login/Student">Student</Link>
              </div> <Outlet/>
        </>
    )
}