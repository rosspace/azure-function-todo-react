import React from 'react';
import Typography from '@material-ui/core/Typography';

import TodoPage from './components/TodoPage';
import TodoDetail from './components/TodoDetail';
import NotFound from './components/NotFound';

const buildHeader = title => {
  return <Typography variant="h6">{title}</Typography>;
};

const routes = [
  {
    path: '/',
    exact: true,
    page: TodoPage,
    header: buildHeader('List Todo Items Example'),
  },
  {
    path: '/:id',
    page: TodoDetail,
    header: buildHeader('Todo Item Details'),
  },
  {
    path: null,
    page: NotFound,
    header: buildHeader('Page Not Found'),
  },
];

export default routes;
