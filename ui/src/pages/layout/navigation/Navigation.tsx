import { Box, Button, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React, { useState } from 'react';
import List from '@mui/material/List';
import { AccessAlarm, Add, BarChart, Home, Inbox, Mail, Monitor, Search, Settings, Wifi } from '@mui/icons-material';
import { NavWrapper } from './Navigation.styled';

const Navigation = () => {
  const [viewMenu, setViewMenu] = useState(false);

  const toggleDrawer =
  () =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setViewMenu(false);
  };

  const MenuList = () => {

    return (
      <Box sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      >
        <List>
          {
            ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
              return (<ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail/>}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>)
            })
          }
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>

      </Box>
    )
  }


  return (
    <NavWrapper>
      <Button onClick={() => setViewMenu(true)}><Settings /></Button>
      <br />
      <Button onClick={() => setViewMenu(true)}><Home /></Button>
      <Button onClick={() => setViewMenu(true)}><Add /></Button>
      <Button onClick={() => setViewMenu(true)}><Wifi /></Button>
      <Button onClick={() => setViewMenu(true)}><Search /></Button>
      <br />
      <Button onClick={() => setViewMenu(true)}><Monitor /></Button>
      <Button onClick={() => setViewMenu(true)}><BarChart /></Button>
      <Button onClick={() => setViewMenu(true)}><AccessAlarm /></Button>

      <Drawer anchor='left' open={viewMenu} onClose={() => setViewMenu(false)}>
        <MenuList />
      </Drawer>
    </NavWrapper>
  );
};

export default Navigation;