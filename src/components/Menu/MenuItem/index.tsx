import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface MenuItemsProp extends PropsWithChildren {
  itemText: string;
  routePath: string;
}

const MenuItem: FC<MenuItemsProp> = ({ children, itemText, routePath }) => {
  return (
    <>
      <ListItemButton component={Link} to={routePath}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={itemText} />
      </ListItemButton>
    </>
  );
};

export default MenuItem;
