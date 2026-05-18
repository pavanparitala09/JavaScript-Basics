function Course({course}) {
    console.log(course)
  let { courseId, title, instructor, duration, isPaid } = course;
console.log(course.duration)
  return (
    <div>
      <p>{title}</p>
      <p>{courseId}</p>
      <p>{instructor}</p>
      <p className="bg-red-500">{duration}</p>
      <p>{isPaid ? "Premium Course" : "Free Course"}</p>    </div>
  );
}

export default Course;
