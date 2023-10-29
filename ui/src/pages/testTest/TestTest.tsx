import React from 'react';
import TestInfoCard from '../../components/card/testInfo/TestInfoCard';

const TestTest = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <TestInfoCard
        title={'This is the title'}
        description={'This is the description'}
        buttonText={'Click me'}
      />
      <TestInfoCard
        title={'This is the title'}
        description={'This is the description'}
        buttonText={'Click me'}
      />
      <TestInfoCard
        title={'This is the title'}
        description={'This is the description'}
        buttonText={'Click me'}
      />
      <TestInfoCard
        title={'This is the title'}
        description={'This is the description'}
        buttonText={'Click me'}
      />
    </div>
  );
};

export default TestTest;
