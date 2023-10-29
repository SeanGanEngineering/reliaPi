import { Button } from '@mui/material';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  gap: 10px;
  margin-top: 10px;
  text-transform: none;
`;

export const StyledButton = styled(Button).attrs({
  sx: {
    textTransform: 'none',
  },
})`
  width 100%;
  gap: 10px;
  display: flex;
  justify-content: start;
  text-transform: none;
  background-color: red;
  padding: 10px;
`;
