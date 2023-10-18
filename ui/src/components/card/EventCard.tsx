import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const EventCard: React.FC = () => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '300px',
      height: '100x', 
      justifyContent: 'start', 
      alignItems: 'center',
      gap: '0px',
      padding: '0px',
      maxWidth: '500px'}}>
      <CardHeader avatar={  <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            SG
          </Avatar>} sx={{backgroundColor: 'clear', height: '100%'}}/>
      <CardContent>
        <Typography>10:15 am</Typography>
        <Typography>Start testing</Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;