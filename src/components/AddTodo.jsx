import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';

import { operations } from '../redux/items';

const AddTodo = props => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [values, setValues] = useState({
    name: '',
    description: '',
  });
  const open = Boolean(anchorElement);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleSubmit = () => {
    props.addItem(values);
    handleClose();
    setValues({
      name: '',
      description: '',
    });
  };

  const closeButon = (
    <IconButton onClick={handleClose} aria-label="close">
      <CloseIcon />
    </IconButton>
  );

  return (
    <Fragment>
      <IconButton aria-label="add new todo item" onClick={handleClick}>
        <AddIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Card>
          <CardHeader action={closeButon} title="Add Todo Item" />
          <CardContent>
            <form autoComplete="off">
              <TextField
                id="item-name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="item-description"
                label="Description"
                value={values.description}
                onChange={handleChange('description')}
                multiline
                fullWidth
                rows="4"
                margin="normal"
                variant="outlined"
              />
            </form>
          </CardContent>
          <CardActions>
            <IconButton onClick={handleSubmit}>
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Popover>
    </Fragment>
  );
};

export default connect(
  () => {
    return {};
  },
  {
    addItem: operations.addItem,
  }
)(AddTodo);
