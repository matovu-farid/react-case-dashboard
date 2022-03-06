import './Hospitals.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Hospital from '../Hospital/Hospital';
import { searchHospital } from '../../redux/hospitals/search';

const Hospitals = ({ data }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchData = useSelector((state) => state.search);
  useEffect(() => {
    searchHospital({
      name: search,
      data,
    }, dispatch);
  }, [search, data]);
  const onInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input onChange={onInput} value={search} placeholder="Search ..." className="input" type="text" />
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
