"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Card } from "./ui/card";
import toast, { Toaster } from "react-hot-toast";

type Course = {
  id: string;
  title: string;
};

const courses: Course[] = [
  { id: "course1", title: "Gardening" },
  { id: "course2", title: "Guitar for beginners" },
  { id: "course3", title: "Backend with Node.js" },
];

const EnrollCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  const toggleEnroll = (course: Course) => {
    if (enrolledCourses.includes(course.id)) {
      setEnrolledCourses((prev) => prev.filter((id) => id !== course.id));
      toast.success(`Unenrolled from ${course.title}`);
    } else {
      setEnrolledCourses((prev) => [...prev, course.id]);
      toast.success(`Enrolled in ${course.title}`);
    }
  };

  return (
    <>
      {/* Centered Toast Notification */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {courses.map((course) => (
          <Card key={course.id} className="p-10 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <div className="flex flex-col gap-6 mt-auto">
              <Button onClick={() => setSelectedCourse(course)}>
                Show Description
              </Button>
              <Button
                onClick={() => toggleEnroll(course)}
                variant={
                  enrolledCourses.includes(course.id) ? "secondary" : "default"
                }
              >
                {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Course Description Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>Community description</DialogDescription>
          </DialogHeader>
          <Button className="mt-4" onClick={() => setSelectedCourse(null)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnrollCourses;
