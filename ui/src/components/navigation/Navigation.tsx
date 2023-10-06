import { Box, Button, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React, { useState } from 'react';
import List from '@mui/material/List';
import { Inbox, Mail, Menu } from '@mui/icons-material';

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
    <div>
      <Button onClick={() => setViewMenu(true)}><Menu /></Button>
      <Drawer anchor='left' open={viewMenu} onClose={() => setViewMenu(false)}>
        <MenuList />
      </Drawer>
    </div>
  );
};

export default Navigation;