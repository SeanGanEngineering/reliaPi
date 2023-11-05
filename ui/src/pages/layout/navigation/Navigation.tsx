import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from '@mui/material';
import React, { useState } from 'react';
import List from '@mui/material/List';
import {
  Add,
  BarChart,
  Book,
  Dashboard,
  DataArrayRounded,
  Inbox,
  LogoutTwoTone,
  Mail,
  Monitor,
  Science,
  Settings,
} from '@mui/icons-material';
import { NavWrapper, PText, StyledButton } from './Navigation.styled';
import TestCard from '../../../components/card/testInfo/TestCard';
import test from '../../../assets/images/test.png';
import plan from '../../../assets/images/plan.png';
import monitor from '../../../assets/images/monitor.png';

import Search from '../../../components/search/Search';
import { LogoText } from '../headModule/HeadModule.styled';
import logo from '../../../assets/images/logo.png';
import UserProfile from '../../../components/userProfile/UserProfile';
const Navigation = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const [viewTest, setViewTest] = useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
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
      <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer()}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
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
    );
  };

  const handleClose = () => {
    setViewTest(false);
  };

  const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    gap: '50px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    PText: 4,
  };

  return (
    <NavWrapper>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img
          src={logo}
          height={'50px'}
          width={'50px'}
          style={{ borderRadius: '10px' }}
        />
        <LogoText>Scout</LogoText>
      </div>
      <br />
      <Search />
      <br />
      <StyledButton onClick={() => setViewMenu(true)}>
        <Dashboard sx={{ color: 'gray' }} />
        <PText>Dashboard</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewTest(true)}>
        <Add sx={{ color: 'gray' }} />
        <PText>Create</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewTest(true)}>
        <Monitor sx={{ color: 'gray' }} />
        <PText>Monitor</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewMenu(true)}>
        <Science sx={{ color: 'gray' }} />
        <PText>Test</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewMenu(true)}>
        <BarChart sx={{ color: 'gray' }} />
        <PText>Reports</PText>
      </StyledButton>
      <br />
      <StyledButton onClick={() => setViewMenu(true)}>
        <Book sx={{ color: 'gray' }} />
        <PText>Standards</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewMenu(true)}>
        <DataArrayRounded sx={{ color: 'gray' }} />
        <PText>Export</PText>
      </StyledButton>
      <br />
      <br />
      <UserProfile name={'Sean Gan'} />

      <StyledButton onClick={() => setViewMenu(true)}>
        <Settings sx={{ color: 'gray' }} />
        <PText>Settings</PText>
      </StyledButton>
      <StyledButton onClick={() => setViewMenu(true)}>
        <LogoutTwoTone sx={{ color: 'gray' }} />
        <PText>Logout</PText>
      </StyledButton>

      <Drawer anchor='left' open={viewMenu} onClose={() => setViewMenu(false)}>
        <MenuList />
      </Drawer>
      <Modal open={viewTest} onClose={handleClose}>
        <Box sx={style}>
          <TestCard
            handleClose={handleClose}
            title={'Plan'}
            description='Set clear testing goals for a flawless product journey.'
            icon={<img src={plan} height={'300px'} />}
            buttonText='Start planning'
          />
          <TestCard
            handleClose={handleClose}
            title={'Test'}
            description='Execute thorough and seamless testing to ensure a smooth user experience.'
            icon={<img src={test} height={'300px'} />}
            buttonText='Start testing'
          />
          <TestCard
            handleClose={handleClose}
            title={'Monitor'}
            description='Stay ahead with real-time tracking for top-notch quality assurance.'
            icon={<img src={monitor} height={'300px'} />}
            buttonText='Start monitoring'
          />
        </Box>
      </Modal>
    </NavWrapper>
  );
};

export default Navigation;
