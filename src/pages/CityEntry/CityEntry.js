import { useDispatch } from 'react-redux';
import {
  Button, ButtonGroup, FormControlLabel, FormGroup, TextField, Typography,
} from '@mui/material';
import { addCity, updateCity } from '../../redux/cities/cities';
import getPosition from '../../helpers/get_position';
import useCity from '../../Hooks/useCity';

const CityEntry = () => {
  const {

    id, item, name, setName, longitude, setLongitude, latitude, setLatitude, radius, setRadius,
  } = useCity();
  const dispatch = useDispatch();

  const viewOnMap = () => {
    if (latitude && longitude) {
      const url = `https://www.google.co.ug/maps/@${latitude},${longitude},15z`;
      window.open(url, '_blank');
    }
  };
  const onClick = () => {
    const city = {
      name,
      radius,
      position: getPosition(latitude, longitude),
    };
    if (item) dispatch(updateCity({ ...city, id }));
    else dispatch(addCity(city));
  };
  return (
    <>
      <Typography variant="h2">
        City Entry
      </Typography>
      <form>

        <TextField type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="City" name="name" required />
        <TextField type="text" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="Radius" required />
        <FormGroup>

          <FormControlLabel
            label="latitude"
            labelPlacement="top"
            control={

              <TextField type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} name="latitude" placeholder="1.3733" required pattern="\d{1}\.\d+" />
          }
          />

          <FormControlLabel
            label="longitude"
            labelPlacement="top"
            control={

              <TextField type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} name="longitude" placeholder="32.2903" required pattern="3\d{1}\.\d+" />
          }
          />

        </FormGroup>
        {
        (id !== 'item') ? (

          <ButtonGroup variant="contained">
            <Button onClick={onClick}>Add</Button>
            <Button onClick={viewOnMap}>View On Maps</Button>
          </ButtonGroup>
        )

          : <Button variant="contained" onClick={onClick} type="button">Add</Button>
}

      </form>
    </>
  );
};

export default CityEntry;
