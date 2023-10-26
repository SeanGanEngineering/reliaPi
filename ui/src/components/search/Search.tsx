import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import {
  LayoutWrapper,
  StyledAutocomplete,
  WidthWrapper,
} from "./Search.style";

const Search = () => {
  type AutocompleteOption = string;
  const options: AutocompleteOption[] = ["Temperature", "Speed"];
  const filterOptions = [
    { name: "Type", options: ["Temperature", "Speed"] },
    { name: "Sort", options: ["Latest", "Oldest", "Frequent"] },
  ];
  return (
    <LayoutWrapper>
      <StyledAutocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      <WidthWrapper>
        {filterOptions.map((item) => {
          return (
            <FormControl style={{ width: "100px", backgroundColor: "white" }}>
              <InputLabel>{item.name}</InputLabel>
              <Select label={item.name}>
                {item.options.map((itemOption) => {
                  return <MenuItem value={itemOption}>{itemOption}</MenuItem>;
                })}
              </Select>
            </FormControl>
          );
        })}
      </WidthWrapper>
    </LayoutWrapper>
  );
};

export default Search;
