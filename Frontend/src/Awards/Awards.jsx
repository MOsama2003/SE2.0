import Footer from "../LandingPage/Footer";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
export default function () {
  return (
    <>
      <center>
        <br />
        <br />
        <h1 className="teacher-heading">Awards & Achievements</h1>
        <br />
        <hr className="teacher-line" />
        <br />
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button component={Link} to="/Awards/Students">
            <span>Students</span>
          </Button>
          <Button component={Link} to="/Awards/Faculty">
            <span>Faculty</span>
          </Button>
        </ButtonGroup>
        <Outlet/>
        <br /><br />
        <br />
      </center>
      <Footer></Footer>
    </>
  );
}
