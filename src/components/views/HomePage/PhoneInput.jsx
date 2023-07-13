import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from "@mui/icons-material/Phone";
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = ({ value, onChange }) => {
  const handleInputChange = (phoneNumber) => {
    onChange(phoneNumber);
  };

  return (
    <TextField
      label="Phone number"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon />
          </InputAdornment>
        ),
      }}
    >
      <ReactPhoneInput
        defaultCountry="us"
        value={value}
        onChange={handleInputChange}
        inputClass="phone-input"
      />
    </TextField>
  );
};

export default PhoneInput;