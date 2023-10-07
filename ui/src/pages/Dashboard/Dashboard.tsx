import React from 'react';
import { PageContainer } from './Dashboard.styled';
import LineGraph from '../../components/graph/LineGraph';
import TemperatureAdd from '../../components/TemperatureAdd/TemperatureAdd';

const Dashboard = () => {
  return (
    <PageContainer>
      <LineGraph />
      <TemperatureAdd />
    </PageContainer>
  );
};

export default Dashboard;