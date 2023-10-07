import { Button } from '@mui/material';
import React from 'react';
import { addTemperaturePoint } from '../../api/temperature';
import { TemperatureProps } from '../../types/types';

const TemperatureAdd = () => {
  const data: TemperatureProps = {
    Name: '',
    Timestamp: Date.now(),
    TemperatureC: 0,
  }

  return (
    <Button onClick={async () => addTemperaturePoint(data)}>
      Add temperature
    </Button>
  );
};

export default TemperatureAdd;