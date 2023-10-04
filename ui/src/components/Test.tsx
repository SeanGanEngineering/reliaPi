import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const Test = () => {
  return (
    <div>
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      
    </div>
  );
};

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or


export default Test;