import img1 from '../assets/fy.png'
import img2 from '../assets/sy.png'
import Footer from '../LandingPage/Footer'
import img3 from '../assets/ty.png'
import img4 from '../assets/finaly.png'
export default function Timetable() {
  return(
    <><center className='Timetable'>
        <h1 className="Semester-mainheading">Course Work Timetable</h1>
          <hr className="teacher-line" />
          <h2 className="Semester-heading">First Year</h2>
          <br /><br />
          <img src={img1} alt="" srcset="" />
          <br /><br />
          <h2 className="Semester-heading">Second Year</h2>
          <br /><br /><br /><br />
          <img src={img2} alt="" srcset="" />
          <br /><br />
          <h2 className="Semester-heading">Third Year</h2>
          <br /><br /><br /><br />
          <img src={img3} alt="" srcset="" />
          <br /><br />
          <h2 className="Semester-heading">Final Year</h2>
          <br /><br /><br /><br />
          <img src={img4} alt="" srcset="" />
          <br /><br /><br /><br />
    </center>
    <Footer></Footer>
    </>
  );
}
