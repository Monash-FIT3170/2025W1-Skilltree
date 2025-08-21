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
import '../styles/variables.css';
import '../styles/main.css';
import '../styles/global.css';

type Course = {
  id: string;
  title: string;
};

// Define a type for reviews
type CourseReview = {
  courseId: string;
  rating: number; // 1-5 stars
  // You could add a comment field here too if needed
};

const courses: Course[] = [
  { id: "course1", title: "Gardening" },
  { id: "course2", title: "Guitar for beginners" },
  { id: "course3", title: "Backend with Node.js" },
];

const EnrollCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  // New state to store reviews, mapping courseId to its review
  const [courseReviews, setCourseReviews] = useState<CourseReview[]>([]);

  const toggleEnroll = (course: Course) => {
    if (enrolledCourses.includes(course.id)) {
      setEnrolledCourses((prev) => prev.filter((id) => id !== course.id));
      toast.success(`Unenrolled from ${course.title}`);
    } else {
      setEnrolledCourses((prev) => [...prev, course.id]);
      toast.success(`Enrolled in ${course.title}`);
    }
  };

  const handleRating = (courseId: string, rating: number) => {
    setCourseReviews((prevReviews) => {
      const existingReviewIndex = prevReviews.findIndex(
        (review) => review.courseId === courseId
      );

      if (existingReviewIndex > -1) {
        // Update existing review
        const updatedReviews = [...prevReviews];
        updatedReviews[existingReviewIndex] = { courseId, rating };
        return updatedReviews;
      } else {
        // Add new review
        return [...prevReviews, { courseId, rating }];
      }
    });
    toast.success(`Rated ${rating} stars for this course!`);
  };

  // Helper function to get the current rating for a course
  const getCurrentRating = (courseId: string) => {
    const review = courseReviews.find((r) => r.courseId === courseId);
    return review ? review.rating : 0;
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

              {/* Star Rating System */}
              <div className="flex items-center justify-center mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="cursor-pointer text-2xl"
                    style={{
                      color:
                        star <= getCurrentRating(course.id) ? "#FFD700" : "#ccc",
                    }}
                    onClick={() => handleRating(course.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500">
                {getCurrentRating(course.id) > 0
                  ? `You rated: ${getCurrentRating(course.id)} stars`
                  : "Rate this course"}
              </p>
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