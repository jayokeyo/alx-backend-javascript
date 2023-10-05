const getStudentsByLocation = (students, city) => {
  const arrayObj = students.filter((funct) => funct.location === city);
  return arrayObj;
};

export default getStudentsByLocation;

