import Slide from "./Slide";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import OrgPic from "../assets/organizationalchart.png";
import pic4 from "../assets/4.png";
import pic5 from "../assets/5.png";
import Vision from "../LandingPage/Vision";
import DptHeading from "./DptHeading";
import pic10 from "../assets/bar.png";
import PLO1 from "./PLO1";
import PLO from "./PLO";
import PLOImages from "./PLOImages";
import Footer from "../LandingPage/Footer";
import Tables from "../CoursesOffers/Tables";
export default function Department() {
  const images = [pic2, pic3, pic4, pic5, pic1];
  const columns = ["Batch", "Sections", "Class Advisor"];
  const data = [
    ["2019", "2", "Dr Mustafa Latif"],
    ["2020", "2", "Miss Sana Fatima"],
    ["2021", "2", "Dr Faraz Haidar"],
    ["2022", "2", "Miss Simrah Najam"],
  ];
  return (
    <div>
      <Slide images={images} />
      <Vision
        bool={true}
        heading="Vision of Department"
        content=" the background-size property is set to contain, the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height)"
      ></Vision>
      <Vision
        bool={true}
        heading="Mission of Department"
        content=" the background-size property is set to contain, the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height)"
      ></Vision>
      <PLO1></PLO1>
      <PLO></PLO>
      <PLOImages heading="Organizational Map" imagesrc={OrgPic}></PLOImages>
      <PLOImages
        heading="OBE CQI Loop"
        imagesrc="https://sw.muet.edu.pk/images/cqi%20loop.png"
      ></PLOImages>
      <PLOImages
        heading="PEO CQI Process"
        imagesrc="https://sw.muet.edu.pk/images/peo%20loop.png"
      ></PLOImages>
      <PLOImages
        heading="PLO CQI Process"
        imagesrc="https://sw.muet.edu.pk/images/PLO%20CQI%20Loop.png"
      ></PLOImages>
      <PLOImages
        heading="CLO CQI Process"
        imagesrc="https://sw.muet.edu.pk/images/CLO%20CQI%20Loop.png"
      ></PLOImages>
      <PLOImages heading="Annual Intake" imagesrc={pic10}></PLOImages>
      <br />
      <br /> <br /><br /><br /><br />
      <center>
        <h1 className="text-length">Batches and Class Advisors</h1>
      </center>
      <br />
      <br /><br />
      <Tables columns={columns} data={data}></Tables>
      <br />
      <br /> <br /><br /><br /><br /><br />
      <Footer></Footer>
    </div>
  );
}