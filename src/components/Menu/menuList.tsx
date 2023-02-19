import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

import MenuItem from './MenuItem';

export const menuList = (
  <>
    <MenuItem itemText='Dashboard' routePath='/'>
      <DashboardIcon />
    </MenuItem>
    <MenuItem itemText='Enterprise' routePath='/enterprise'>
      <AssignmentIcon />
    </MenuItem>
  </>
);
