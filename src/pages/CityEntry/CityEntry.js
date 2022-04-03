import { useDispatch } from 'react-redux';
import {
  Button, ButtonGroup, FormGroup, Typography,
} from '@mui/material';
import { addCity, updateCity } from '../../redux/cities/cities';
import getPosition from '../../helpers/get_position';
import useCity from '../../Hooks/useCity';
import FormErrorControl from '../../FormErrorControl';
import {
  MinMaxValidator, MultiValidator, NumberValidator, PatternValidator, RequiredValidator,
} from '../Entry/validators';

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
        <FormErrorControl
          decoration={{
            label: 'name',
            placeholder: 'Name',
          }}
          valueHandler={{
            value: name,
            setValue(text) {
              setName(text);
            },
            errorFunction(text) {
              return RequiredValidator(text);
            },
          }}
        />

        <FormErrorControl
          decoration={{
            label: 'radius',
            placeholder: 'Radius',
          }}
          valueHandler={{
            value: radius,
            setValue(text) {
              setRadius(text);
            },
            errorFunction(text) {
              return MultiValidator(text,
                RequiredValidator,
                NumberValidator);
            },
          }}
        />

        <FormGroup>
          <FormErrorControl
            decoration={{

              label: 'latitude',
              placeholder: '1.3733',
            }}
            valueHandler={{
              value: `${latitude}`,

              setValue(text) {
                setLatitude(text);
              },
              errorFunction(text) {
                return MultiValidator(text,
                  RequiredValidator,
                  NumberValidator,
                  { name: MinMaxValidator, params: [-10, 10] },
                  {
                    name: PatternValidator,
                    params: {
                      pattern: /\d{1}\.\d+/,
                      messege: 'Not a valid latitude',
                    },
                  });
              },

            }}

          />

          <FormErrorControl
            decoration={{

              label: 'longitude',
              placeholder: '32.2903',
            }}
            valueHandler={{
              value: `${longitude}`,

              setValue(text) {
                setLongitude(text);
              },
              errorFunction(text) {
                return MultiValidator(text,
                  RequiredValidator,
                  NumberValidator,
                  { name: MinMaxValidator, params: [10, 40] },
                  {
                    name: PatternValidator,
                    params: {
                      pattern: /3\d{1}\.\d+/,
                      messege: 'Not a valid longitude',
                    },
                  });
              },

            }}

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
