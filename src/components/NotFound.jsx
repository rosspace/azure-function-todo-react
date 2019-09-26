import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFound = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default withRouter(NotFound);
