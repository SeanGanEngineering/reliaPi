import { Card, Typography } from '@mui/material';
import React from 'react';
import {
  ActionButton,
  CardActionWrapper,
  CardContentWrapper,
} from './TestCard.styled';

const TestInfoCard = ({ title, description, buttonText }) => {
  return (
    <Card>
      <CardContentWrapper>
        <div>
          <Typography align='center' gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography align='center' variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </div>
        <CardActionWrapper>
          <ActionButton variant='contained' onClick={() => console.log('test')}>
            {buttonText}
          </ActionButton>
        </CardActionWrapper>
      </CardContentWrapper>
    </Card>
  );
};

export default TestInfoCard;
