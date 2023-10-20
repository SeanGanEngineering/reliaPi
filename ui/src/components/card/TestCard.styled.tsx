import { Button, Card, CardActions, CardContent } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 50vh;
  max-height: 500px;
  width: 20vw;
  max-width: 400px;
  scale: 1;
  transition: 0.1s;
  &:hover{
    scale: 1.1;
    transition: 0.1s;
  }
`;

export const ActionButton = styled(Button)`
  width: 100%;
  height: 50px;
`;

export const CardActionWrapper = styled(CardActions)`
  justify-content: center;
`;

export const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;