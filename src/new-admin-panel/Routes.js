import React from 'react';
import Dashboard from './menues/Dashboard/Dashboard';
import Announcement from './menues/Announcement/Announcement';
import Assignment from './menues/Assignment/Assignment';
import Blog from './menues/Blog/Blog';
import Course from './menues/Course/Course';
import Events from './menues/Events/Events';
import Mailbox from './menues/Mailbox/Mailbox';
import News from './menues/News/News';
import Quiz from './menues/Quiz/Quiz';
import Accesrole from './menues/Access-Role/AccessRole';

const adminRoutes = [
  {
    path: '/admin/dashboard',
    exact: true,
    body: () => <Dashboard />,
  },
  {
    path: '/admin/announcement',
    exact: true,
    body: () => <Announcement />,
  },
  {
    path: '/admin/Assignment',
    exact: true,
    body: () => <Assignment />,
  },
  {
    path: '/admin/blog',
    exact: true,
    body: () => <Blog />,
  },
  {
    path: '/admin/courses',
    exact: true,
    body: () => <Course />,
  },
  {
    path: '/admin/events',
    exact: true,
    body: () => <Events />,
  },
  {
    path: '/admin/mailbox',
    exact: true,
    body: () => <Mailbox />,
  },
  {
    path: '/admin/news',
    exact: true,
    body: () => <News />,
  },
  {
    path: '/admin/quiz',
    exact: true,
    body: () => <Quiz />,
  },
  {
    path: '/admin/access-role',
    exact: true,
    body: () => <Accesrole />,
  },
];
export default adminRoutes;
