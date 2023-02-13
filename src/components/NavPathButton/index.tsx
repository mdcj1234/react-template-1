import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface INavButtonProps extends PropsWithChildren {
  itemText: string;
  routePath: string;
}

const NavPathButton: FC<INavButtonProps> = ({ children, itemText, routePath }) => {
  return (
    <Link to={routePath}>
      <ListItemButton>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={itemText} />
      </ListItemButton>
    </Link>
  );
};

export default NavPathButton;
