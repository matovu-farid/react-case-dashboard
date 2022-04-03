import React from 'react';
import PropTypes from 'prop-types';
import { Card, List } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    borderRadius: 3,
    width: 'min(800px,100vw)',
    overflow: 'hidden',
    padding: 0,
    '& li:nth-child(odd)': {
      backgroundColor: theme.palette.secondary.light,

    },

  },

}));
function MyList({ children }) {
  const classes = useStyles();
  return (
    <Card
      sx={{
        borderRadius: '2em',
      }}
    >

      <List className={classes.list}>
        {children}
      </List>
    </Card>
  );
}
MyList.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default MyList;
