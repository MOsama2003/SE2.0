import Tables from "./Tables";
import Footer from "../LandingPage/Footer";
export default function Courses() {
  const columns = ["Course ID", "Title", "Credit Hours", "Pre Requiste"];
  const data1 = [
    ["CT-175" , "Programming Fundamentals", "3+1", "Nill"],
    ["CT-174" , "Fundamentals of IT", "2+1", "Nill"],
    ["CT-162" , "Discrete Structures", "3+0", "Nill"],
    ["HS-104" , "Functional English", "3+0", "Nill"],
    ["MT-173" , "Calculus", "3+0", "Nill"],
    ["HS-105" , "Pakistan Studies", "2+0", "Nill"],
  ];
  const data2 = [
    ["SE-201" , "Object Oriented Concepts & Programming","3+1", "Nill"],
    ["PH-122" , "Applied Physics","3+1", "Nill"],
    ["SE-207" , "Software Engineering","3+0" ,"Nill"],
    ["HS-115" , "Academic Reading and Writing","3+0" ,"Nill"] ,
    ["HS-205" , "Islamic Studies OR" ,"3+0","Nill"],
    ["HS-209" , "Ethical Behaviour (for Non-Muslims)" ,"3+0", "Nill"],
    ["HSK-I"  , "Chinese Language" ,"3+0","Nill"]
        ];
  const data3 = [
    ["MT-273" ,"Differential Equations & Linear Algebra", "3+0" ,"Nill"] ,
    ["HS-218" ,"Business Communication", "2+1" ,"Nill"],
    ["CT-157" ,"Data Structure Algorithms & Applications", "3+1", "Nill"],
    ["SE-208" ,"Software Requirement Engineering" ,"3+0", "Nill"],
    ["CT-258" ,"Financial & Cost Accounting", "3+0 " ,"Nill"],
    ["HSK-II" ,"Chinese Language","3+0" ,"Nill"]
];
const data4 = [
    ["SE-204"  , "Database Management Systems" , "3+1" , "Nill"] ,
    ["SE-206"  , "Web Engineering" , "3+1", "Nill"],
    ["SE-308"  , "Software Design & Architecture" , "2+1", "Nill"],
    ["MT-331"  , "Probability & Statistics" , "3+0", "Nill"],
    ["HS-219"  , "Professional Ethics" , "2+0", "Nill"]
 ];
const data5 = [
    ["IF-301" , "Applied Economics for Engineers" ,"3+0", "Nill"],
    ["SE-302" , "Human Computer Interaction" ,"3+0" ,"Nill"],
    ["SE-303" , "Operating Systems", "3+1" ,"Nill"],
    ["SE-312" , "Software Construction & Development", "2+1", "Nill"],
    ["SE-313" , "Formal Methods in Software Engineering" ,"3+0", "Nill"]
];
const data6 = [
    ["CS-351" , "Computer Communication Networks" ,"3+1" , "Nill"],
    ["SE-309" , "Software Quality Engineering" ,"2+1" , "Nill"],
    ["SE-310" , "Software Project Management", "3+0" , "Nill"],
    ["SE-311" , "E-Commerce" ,"3+0" , "Nill"],
    ["SE-###" , "Elective I" ,"3+1" , "Nill"]
];
const data7 = [
    ["CT-460" , "Network & Information Security", "3+1" , "Nill"],
    ["SE-405" , "Modeling & Simulation", "3+0" , "Nill"],
    ["SE-409" , "Software Re-Engineering", "3+0" ,  "Nill"],
    ["SE-###" , "Elective II" ,"3+1" ,"Nill"],
    ["SE-499" , "Software Engineering Project" ,"0+3" , "Nill"]
];
const data8 = [
    ["MG-481" , "Entrepreneurship" ,"3+0" , "Nill"],
    ["SE-408" , "Design Patterns" ,"3+0" , "Nill"],
    ["SE-410" , "Stochastic Processes", "3+0" , "Nill"],
    ["SE-###" , "Elective III" ,"3+0" , "Nill"],
    ["SE-499" , "*Software Engineering Project", "0+3" ,  "Nill"]
];
  return (
    <>
      <div>
        <center>
          <h1 className="Semester-mainheading">Course Scheme</h1>
          <hr className="teacher-line" />
          <h2 className="Semester-heading">First Semester</h2>
          <br />
          <Tables columns={columns} data={data1} />
          <br />
          <br />
          <h2 className="Semester-heading">Second Semester</h2>
          <br />
          <Tables columns={columns} data={data2} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Third Semester</h2>
          <br />
          <Tables columns={columns} data={data3} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Fourth Semester</h2>
          <br />
          <Tables columns={columns} data={data4} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Fifth Semester</h2>
          <br />
          <Tables columns={columns} data={data5} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Sixth Semester</h2>
          <br />
          <Tables columns={columns} data={data6} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Seventh Semester</h2>
          <br />
          <Tables columns={columns} data={data7} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Eight Semester</h2>
          <br />
          <Tables columns={columns} data={data8} />
          <br />
          <br />
          <br />
          <h2 className="Semester-heading">Electives</h2>
          <br />
          <Tables columns={columns} data={data2} />
          <br />
          <br />
          <br />
        </center>
      </div>
      <Footer></Footer>
    </>
  );
}
