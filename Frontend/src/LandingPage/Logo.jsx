import Button from "@mui/material/Button";
import TextSlider from "./TextSlider";
import Picture from './Picture';
import Vision from "./Vision";
import Drshenila from "./Drshenila";
import Countup from "./Countup";
import AlumniGrid from "./AlumniGrid";
import Footer from "./Footer";
import { Link} from "react-router-dom";
import LatestNews from "./LatestNews";
export default function Logo() {
  const Btn_CSS = {
    borderRadius: "23px",
    backgroundColor: "black",
    fontSize: "20px",
    padding: "10px 23px"
  };
  return (
    <>
      <div className="Logo">
        <div className="Logo2">
          <img
            id="Logo-Img"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/NEDUET_logo.svg/200px-NEDUET_logo.svg.png"
          ></img>
          <div className="Logo-Text">
            <h1>Department of</h1>
            <h1>Software Engineering</h1>
          </div>
        </div>
        <div className="Logo-btn">
          <Button
          LinkComponent={Link}
            size="large"
            to="/Login"
            variant="contained"
            style={Btn_CSS}
          >
            Login
          </Button>
          <Button
          LinkComponent={Link}
            size="large"
            to="/JobsandInternship"
            variant="contained"
            style={Btn_CSS}
          >
            Jobs and Intership
          </Button>
        </div>
      </div>
      <TextSlider></TextSlider>
      <Picture></Picture>
      <Vision heading="Vision of Department" content=" the background-size property is set to contain, the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio"></Vision>
    <Vision heading="Mission of Department" content=" the background-size property is set to contain, the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio"></Vision>
    <Drshenila></Drshenila>
    <LatestNews></LatestNews>
<Countup></Countup>
    <AlumniGrid></AlumniGrid>
    <Footer></Footer>
    </>
  );
}