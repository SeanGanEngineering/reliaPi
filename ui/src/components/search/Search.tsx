import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import {
  LayoutWrapper,
  StyledAutocomplete,
  WidthWrapper,
} from './Search.style';

const Search = () => {
  type AutocompleteOption = string;
  const options: AutocompleteOption[] = ['Temperature', 'Speed'];
  const filterOptions = [
    { name: 'Type', options: ['Temperature', 'Speed'] },
    { name: 'Sort', options: ['Latest', 'Oldest', 'Frequent'] },
  ];
  return (
    <StyledAutocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label='Search' />}
    />
  );
};

export default Search;
