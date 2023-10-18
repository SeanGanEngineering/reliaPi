import { Card, CardContent } from '@mui/material';
import React from 'react';

const GraphCard = ({children}) => {
  return (
    <Card sx={{
      display: 'flex',
      width: '500px',
      height: '350px', 
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '0px',
      margin: '30px',
      padding: '0px',
      maxWidth: '500px'}}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default GraphCard;