import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import City from '../../components/City/City';
import { searchItem } from '../../redux/hospitals/search';
import MyList from '../../components/List';

const Cities = () => {
  const data = useSelector((state) => state.cities);

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

      <TextField onChange={onInput} value={search} placeholder="Search ..." />

      <MyList>
        {
          (searchData)
            ? searchData.map(({ name, id }) => (<City id={id} key={id} name={name} />))
            : data.map(({ name, id }) => (<City id={id} key={id} name={name} />))
      }

      </MyList>
    </>
  );
};
export default Cities;
