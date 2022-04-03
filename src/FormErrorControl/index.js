import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormControlLabel, TextField } from '@mui/material';

function FormErrorControl({
  valueHandler, decoration,
}) {
  const [error, setError] = useState('');
  const { value, setValue, errorFunction } = valueHandler;
  const { label, placeholder } = decoration;
  const onChange = (e) => {
    setValue(e.target.value);
    setError(errorFunction(e.target.value));
  };
  return (
    <FormControl
      label={label}
      variant="standard"
    >

      <TextField
        helperText={(error === '') ? '' : error}
        value={value}
        onChange={onChange}
        name={label}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

FormControlLabel.defaultPropTypes = {
  pattern: '',
  required: true,
};

FormErrorControl.propTypes = {
  valueHandler: PropTypes.instanceOf(Object).isRequired,
  decoration: PropTypes.instanceOf(Object).isRequired,

};

export default FormErrorControl;
