import Footer from "../LandingPage/Footer";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/career-opportunities');
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const renderTable = () => {
    return (
      <center>
        <table className="jobs_table">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Company</th>
              <th>Job Role</th>
              <th>Status</th>
              <th>URL to Apply</th>
              <th>Last Date to Apply</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.job_code}>
                <td>{row.job_code}</td>
                <td>{row.company_name}</td>
                <td>{row.job_role}</td>
                <td>{row.payment_status}</td>
                <td>{row.url}</td>
                <td>{new Date(row.last_date).toLocaleDateString()}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </center>
    );
  };

  return (
    <>
      <center>
        <h1 className="Semester-mainheading">Jobs & Internships</h1>
        <hr className="teacher-line" />
        {tableData.length > 0 ? renderTable() : <p>Loading table data...</p>}
      </center>
      <br /><br />
      <Footer></Footer>
    </>
  );
};

export default Jobs;