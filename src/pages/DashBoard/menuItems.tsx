import * as React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

import NavPathButton from '../../components/NavPathButton';
import NavActionButton from '../../components/NavActionButton';

export const menuItems = (
  <React.Fragment>
    <NavPathButton itemText='Dashboard' routePath='/'>
      <DashboardIcon />
    </NavPathButton>
  </React.Fragment>
);

export const secondaryMenuItems = (
  <React.Fragment>
    <NavActionButton
      itemText='Filtro de ação'
      actionHandler={() => {
        console.log('Ação');
      }}
    >
      <AssignmentIcon />
    </NavActionButton>
  </React.Fragment>
);
