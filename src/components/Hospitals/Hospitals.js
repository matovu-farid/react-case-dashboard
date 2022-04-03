import './Hospitals.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, List, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Hospital from '../Hospital/Hospital';
import { searchItem } from '../../redux/hospitals/search';

const useStyles = makeStyles((theme) => ({
  list: {
    borderRadius: 3,
    overflow: 'hidden',
    padding: 0,
    '& li:nth-child(odd)': {
      backgroundColor: theme.palette.secondary.light,

    },

  },

}));

const Hospitals = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchData = useSelector((state) => state.search);
  useEffect(() => {
    searchItem({
      name: search,
      data,
    }, dispatch);
  }, [search, data]);
  const onInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Box>

        <TextField onChange={onInput} value={search} placeholder="Search ..." />

      </Box>
      <Card
        sx={{
          borderRadius: '2em',

        }}
      >

        <List className={classes.list}>
          {
          (searchData)
            ? searchData.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
            : data.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
      }

        </List>
      </Card>
    </>
  );
};
Hospitals.propTypes = {
  data: propTypes.instanceOf(Array).isRequired,
};
export default Hospitals;
