import { Autocomplete } from "@mui/material";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  width: 300px;
  background-color: white;
`;
export const WidthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
