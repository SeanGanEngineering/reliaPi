import React from 'react';
import { PageContainer } from './Dashboard.styled';
import LineGraph from '../../components/graph/LineGraph';
import TemperatureAdd from '../../components/TemperatureAdd/TemperatureAdd';
import { LineChart } from '@mui/x-charts';
import SSigmaGraph from '../../components/graph/SSigmaGraph';

const Dashboard = () => {


  return (
    <PageContainer>
      <LineGraph />
      <SSigmaGraph />
      <TemperatureAdd />
    </PageContainer>
  );
};

export default Dashboard;