import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 16px;
  width: 200px;
  text-transform: none;
  margin: 10px;
  height: auto;
`;

export const StyledButton = styled(Button).attrs({
  sx: {
    textTransform: 'none',
    width: '100%',
    justifyContent: 'start',
    gap: '10px',
  },
})`
  padding: 10px;
`;

export const PText = styled(Typography).attrs({
  sx: {
    color: 'black',
    fontWeight: '350',
  },
})``;
