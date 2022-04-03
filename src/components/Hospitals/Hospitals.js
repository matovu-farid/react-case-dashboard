import './Hospitals.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Hospital from '../Hospital/Hospital';
import { searchItem } from '../../redux/hospitals/search';

const Hospitals = ({ data }) => {
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
      <ul className="provider-list">
        {
          (searchData)
            ? searchData.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
            : data.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
      }

      </ul>
    </>
  );
};
Hospitals.propTypes = {
  data: propTypes.instanceOf(Array).isRequired,
};
export default Hospitals;
