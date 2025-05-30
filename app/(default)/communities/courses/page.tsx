// app/communities/Courses/page.tsx

import React from "react";
import EnrollCourses from "@/components/Enrollcourses"; 

const CoursesPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-20">Available Courses</h1>
      <EnrollCourses />
    </main>
  );
};

export default CoursesPage;
