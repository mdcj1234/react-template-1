import { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import AppBar from '../../components/AppBar';
import Drawer from '../../components/Drawer';
import BasicTable from '../../components/Table/BasicTable';

import { menuList } from '../../components/Menu/menuList';
import { Container } from '@mui/system';

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [headers, setHeaders] = useState<Array<string>>([]);
  const [enterprises, setEnterprises] = useState([{}]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, 'empresas'));
      setHeaders(['Id', 'Empresas']);
      const enterprisesData = querySnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setEnterprises(enterprisesData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', height: '100vh' }} component='main'>
        <CssBaseline />
        <AppBar appBarName='Enterprise' open={open} action={toggleDrawer} />
        <Box>
          <Drawer variant='permanent' open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component='nav'>
              {menuList}
              <Divider sx={{ my: 1 }} />
              <ListSubheader component='div' inset>
                Sub Menu
              </ListSubheader>
            </List>
          </Drawer>
        </Box>
        {loading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        ) : (
          <Container sx={{ paddingTop: 12 }}>
            <BasicTable minWidth={200} headers={headers} rows={enterprises} />
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
