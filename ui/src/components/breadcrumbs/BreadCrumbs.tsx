import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';

const BreadCrumbs = ({path}: {path: string[]}) => {
  return (
    <Breadcrumbs maxItems={2} aria-aria-label='breadcrumb'>
      {path.map((item) => {
        return <Link key={item} href="#" color={'inherit'}>{item}</Link>
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;