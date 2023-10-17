import React from 'react';
import { PageContainer } from './Dashboard.styled';
import LineGraph from '../../components/graph/LineGraph';
import TemperatureAdd from '../../components/TemperatureAdd/TemperatureAdd';
import { LineChart } from '@mui/x-charts';
import SSigmaGraph from '../../components/graph/SSigmaGraph';
import { Typography } from '@mui/material';

const Dashboard = () => {


  return (
    <PageContainer>
      <div>
      <Typography variant='h6' sx={{padding: 0, margin: 0}}>Good morning</Typography>
      <Typography variant='h2' sx={{padding: '0px', margin: '0px'}}>Sean Gan</Typography>
      </div>
      <LineGraph />
      <SSigmaGraph />
      {/* <TemperatureAdd /> */}
    </PageContainer>
  );
};

export default Dashboard;