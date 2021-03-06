// Entity - contain any enterprise-wide business rules and logic
// alternative name: Business Objects - rules that are not application specific

import Course from './Course';

class Student {
  id: number;
  firstName: string;
  lastName: string;

  registeredCourses: Course[];
  enrolledCourses: Course[];

  constructor(id: number) {
    this.id = id;
    this.registeredCourses = [];
    this.enrolledCourses = [];
  }

  registerForCourse(course: Course): boolean {
    if (this.enrolledCourses.find((enrolledCourse): boolean => { return enrolledCourse.code === course.code; })) {
      return false;
    }
    if (new Date(Date.now()) > new Date(course.startDate.setDate(course.startDate.getDate() - 5))) {
      return false;
    }

    this.registeredCourses.push(course);
    return true;
  }
}

export default Student;
