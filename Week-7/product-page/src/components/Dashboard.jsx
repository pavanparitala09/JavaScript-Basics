import Course from "./Course";

function Dashboard() {
  const courses = [
    {
      courseId: 101,
      title: "React Fundamentals",
      instructor: "John Doe",
      duration: 12,
      isPaid: false,
    },
    {
      courseId: 102,
      title: "Advanced Node.js",
      instructor: "Sarah Smith",
      duration: 20,
      isPaid: true,
    },
    {
      courseId: 103,
      title: "MongoDB for Developers",
      instructor: "Alex Brown",
      duration: 10,
      isPaid: false,
    },
    {
      courseId: 104,
      title: "Full Stack MERN",
      instructor: "Emily Wilson",
      duration: 30,
      isPaid: true,
    },
    {
      courseId: 105,
      title: "System Design Basics",
      instructor: "Michael Lee",
      duration: 15,
      isPaid: true,
    },
  ];

  return (
    <div>
      <h1>Available Courses</h1>
      {courses.map((courseObj) => (
        <Course key={courseObj.courseId} course={courseObj} />
      ))}
    </div>
  );
}

export default Dashboard;
