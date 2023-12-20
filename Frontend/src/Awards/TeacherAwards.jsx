export default function TeacherAwards({ teachers }){
    return(
        <>
    <table className="teacher-table">
      <thead>
        <tr>
          <th>Teacher Name</th>
          <th>Achievements</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher, index) => (
          <tr key={index}>
            <td>{teacher.name}</td>
            <td>
              <ul>
                {teacher.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
    )
}