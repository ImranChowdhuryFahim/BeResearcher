import React from "react";
import CreateAssignment from "./CreateAssignment";
import MyCourses from "./MyCourses";
import ReviewAssignments from "./ReviewAssignments";
import CreateCourse from "./CreateCourse";
import CreateAnnouncements from "./CreateAnnouncements";
const routes = [
  {
    path: "/admin/my-courses",
    exact: true,
    body: () => <MyCourses />,
  },
  {
    path: "/admin/review-assignment",
    exact: true,
    body: () => <ReviewAssignments />,
  },
  {
    path: "/admin/create-assignment",
    exact: true,
    body: () => <CreateAssignment />,
  },
  {
    path: "/admin/create-course",
    exact: true,
    body: () => <CreateCourse />,
  },
  {
    path: "/admin/create-announcement",
    exact: true,
    body: () => <CreateAnnouncements />,
  },
];
export default routes;
