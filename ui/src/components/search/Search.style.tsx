import { Autocomplete } from '@mui/material';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;

export const StyledAutocomplete = styled(Autocomplete).attrs({
  sx: {
    width: '200px',
    borderRadius: '50px',
  },
})``;

export const WidthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
