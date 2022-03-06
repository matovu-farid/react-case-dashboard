import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import City from '../../components/City/City';
import { searchItem } from '../../redux/hospitals/search';

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
      <input onChange={onInput} value={search} placeholder="Search ..." className="input" type="text" />
      <ul className="provider-list">
        {
          (searchData)
            ? searchData.map(({ name, id }) => (<City id={id} key={id} name={name} />))
            : data.map(({ name, id }) => (<City id={id} key={id} name={name} />))
      }

      </ul>
    </>
  );
};
export default Cities;
