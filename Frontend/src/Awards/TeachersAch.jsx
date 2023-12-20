import TeacherAwards from "./TeacherAwards";
export default function TeachersAch(){
    const teachers = [
        {
          name: 'John Doe',
          achievements: ['First Place Award', 'Best Teacher of the Year'],
        },
        {
          name: 'Jane Smith',
          achievements: ['Outstanding Research Publication', 'Excellence in Teaching','Outstanding Research Publication','Outstanding Research Publication'],
        }
      ];
    return(
        <>
        <TeacherAwards teachers={teachers}></TeacherAwards>
        </>
    )
}