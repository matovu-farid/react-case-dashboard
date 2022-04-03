import { NavLink } from 'react-router-dom';

import {
  AppBar,
  Divider, Drawer, List, ListItemButton,
} from '@mui/material';
import { useState } from 'react';

import Toolbar from '@mui/material/Toolbar';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import propTypes from 'prop-types';

const MyDrawer = ({ toggleDrawer, open }) => (
  <Drawer
    anchor="left"
    open={open}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >

      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />

      </IconButton>
    </Box>

    <Divider />
    <Box
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >

      <List>
        <ListItemButton>
          <NavLink to="/">
            <ListItemText primary="Hospitals" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="/entry/item">
            <ListItemText primary="Edit-Hospital" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="cities">
            <ListItemText primary="Cities" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="/cityentry/item">
            <ListItemText primary="Edit-Cities" />
          </NavLink>
        </ListItemButton>
      </List>
    </Box>
  </Drawer>
);
MyDrawer.propTypes = {
  toggleDrawer: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };
  return (
    <Box sx={{
      flexGrow: 1,
      width: '100%',
    }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <ListItemText variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Case dashboard
          </ListItemText>
          <Button color="inherit">Welcome</Button>
        </Toolbar>
      </AppBar>
      <MyDrawer toggleDrawer={toggleDrawer} open={isOpen} />

    </Box>
  );
};

export default Navbar;
