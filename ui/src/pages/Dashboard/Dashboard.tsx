import React from 'react';
import { PageContainer } from './Dashboard.styled';
import LineGraph from '../../components/graph/LineGraph';

const Dashboard = () => {
  return (
    <PageContainer>
      <LineGraph />

    </PageContainer>
  );
};

export default Dashboard;