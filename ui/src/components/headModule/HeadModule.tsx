import React from 'react';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';
import { LayoutWrapper } from './HeadModule.styled';
import Search from '../search/Search';

const HeadModule = () => {
  return (
    <LayoutWrapper>
      <BreadCrumbs path={["home", "profile", "charts", "temperature"]}/>
      <h1>ReliaPi</h1>
      <Search />
    </LayoutWrapper>
  );
};

export default HeadModule;