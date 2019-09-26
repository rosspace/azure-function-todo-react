import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HistoryIcon from '@material-ui/icons/History';

import NotFound from './NotFound';
import { selectors } from '../redux/items';

const TodoDetail = props => {
  if (!props.item) {
    return <Route component={NotFound} />;
  }

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Id: {props.item.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button color="primary" size="small">
            <HistoryIcon />
            Back
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const MapStateToProps = (state, ownProps) => {
  return {
    item: selectors.byId(ownProps.match.params.id)(state),
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    {}
  )(TodoDetail)
);
