import { useSelector } from 'react-redux';
import City from '../../components/City/City';

const Cities = () => {
  const data = useSelector((state) => state.cities);

  return (
    <ul className="provider-list">
      {
        data.map(({ name, id }) => (<City id={id} key={id} name={name} />))
      }

    </ul>
  );
};
export default Cities;
