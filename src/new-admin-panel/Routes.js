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
    path: '/newadmin/dashboard',
    exact: true,
    body: () => <Dashboard />,
  },
  {
    path: '/newadmin/announcement',
    exact: true,
    body: () => <Announcement />,
  },
  {
    path: '/newadmin/Assignment',
    exact: true,
    body: () => <Assignment />,
  },
  {
    path: '/newadmin/blog',
    exact: true,
    body: () => <Blog />,
  },
  {
    path: '/newadmin/courses',
    exact: true,
    body: () => <Course />,
  },
  {
    path: '/newadmin/events',
    exact: true,
    body: () => <Events />,
  },
  {
    path: '/newadmin/mailbox',
    exact: true,
    body: () => <Mailbox />,
  },
  {
    path: '/newadmin/news',
    exact: true,
    body: () => <News />,
  },
  {
    path: '/newadmin/quiz',
    exact: true,
    body: () => <Quiz />,
  },
  {
    path: '/newadmin/access-role',
    exact: true,
    body: () => <Accesrole />,
  },
];
export default adminRoutes;
