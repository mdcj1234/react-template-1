import { FC, PropsWithChildren } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface INavButtonProps extends PropsWithChildren {
  itemText: string;
  actionHandler: () => void;
}

const NavActionButton: FC<INavButtonProps> = ({ children, itemText, actionHandler }) => {
  return (
    <ListItemButton onClick={actionHandler}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={itemText} />
    </ListItemButton>
  );
};

export default NavActionButton;
