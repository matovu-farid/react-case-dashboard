import { useEffect, useState } from 'react';
import './Entry.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button,
  ButtonGroup, FormGroup, Typography,
} from '@mui/material';
import { addHospital, updateHospital } from '../../redux/hospitals/hospitals';
import getPosition from '../../helpers/get_position';
import FormErrorControl from '../../FormErrorControl';
import {
  MinMaxValidator,
  MultiValidator, NumberValidator, PatternValidator, RequiredValidator,
} from './validators';

const Entry = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [longitudeTextField, setLongitude] = useState('');
  const { id } = useParams();
  const [latitudeTextField, setLatitude] = useState('');

  const item = useSelector((state) => state.hospitals).find((hospital) => hospital.id === id);
  useEffect(() => {
    if (item) {
      const { name, contact, position: { geopoint: { latitude, longitude } } } = item;
      setContact(contact);
      setName(name);
      setLatitude(latitude);
      setLongitude(longitude);
    }
  }, []);
  const dispatch = useDispatch();
  const onClick = () => {
    const hospital = {
      name,
      contact,
      position: getPosition(latitudeTextField, longitudeTextField),
    };
    if (item) dispatch(updateHospital({ ...hospital, id }));
    else dispatch(addHospital(hospital));
  };
  const viewOnMap = () => {
    if (latitudeTextField && longitudeTextField) {
      const url = `https://www.google.co.ug/maps/@${latitudeTextField},${longitudeTextField},15z`;
      window.open(url, '_blank');
    }
  };
  return (
    <>
      <Typography variant="h2">
        Hospital Entry
      </Typography>
      <form>
        <FormGroup>
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
              label: 'contact',
              placeholder: '0705222144',
            }}
            valueHandler={{
              value: contact,
              setValue(text) {
                setContact(text);
              },
              errorFunction(text) {
                return MultiValidator(text,
                  RequiredValidator,
                  NumberValidator,

                  { name: PatternValidator, params: { pattern: /\d{10,12}/ }, messege: 'Not a contact' });
              },
            }}
          />
        </FormGroup>

        <FormGroup>
          <FormErrorControl
            decoration={{

              label: 'latitude',
              placeholder: '1.3733',
            }}
            valueHandler={{
              value: `${latitudeTextField}`,

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
              value: `${longitudeTextField}`,

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
          : <Button variant="contained" onClick={onClick}>Add</Button>
}
      </form>
    </>
  );
};

export default Entry;
