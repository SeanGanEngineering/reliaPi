import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import {
  AccessAlarm,
  Add,
  BarChart,
  Home,
  Inbox,
  Mail,
  Monitor,
  Search,
  Settings,
  Wifi,
} from "@mui/icons-material";
import { NavWrapper } from "./Navigation.styled";
import TestCard from "../../../components/card/TestCard";
import test from "../../../assets/images/test.png";
import plan from "../../../assets/images/plan.png";
import monitor from "../../../assets/images/monitor.png";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const [viewTest, setViewTest] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setViewMenu(false);
    };

  const MenuList = () => {
    return (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => {
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
          {["All mail", "Trash", "Spam"].map((text, index) => (
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
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    p: 4,
  };

  return (
    <NavWrapper>
      <Button onClick={() => setViewMenu(true)}>
        <Settings />
      </Button>
      <br />
      <Button onClick={() => navigate("/")}>
        <Home />
      </Button>
      <Button onClick={() => setViewTest(true)}>
        <Add />
      </Button>
      <Button onClick={() => setViewMenu(true)}>
        <Wifi />
      </Button>
      <Button onClick={() => setViewMenu(true)}>
        <Search />
      </Button>
      <br />
      <Button onClick={() => setViewMenu(true)}>
        <Monitor />
      </Button>
      <Button onClick={() => setViewMenu(true)}>
        <BarChart />
      </Button>
      <Button onClick={() => setViewMenu(true)}>
        <AccessAlarm />
      </Button>

      <Drawer anchor="left" open={viewMenu} onClose={() => setViewMenu(false)}>
        <MenuList />
      </Drawer>
      <Modal open={viewTest} onClose={handleClose}>
        <Box sx={style}>
          <TestCard
            handleClose={handleClose}
            title={"Plan"}
            description="Set clear testing goals for a flawless product journey."
            icon={<img src={plan} height={"300px"} />}
            buttonText="Start planning"
          />
          <TestCard
            handleClose={handleClose}
            title={"Test"}
            description="Execute thorough and seamless testing to ensure a smooth user experience."
            icon={<img src={test} height={"300px"} />}
            buttonText="Start testing"
          />
          <TestCard
            handleClose={handleClose}
            title={"Monitor"}
            description="Stay ahead with real-time tracking for top-notch quality assurance."
            icon={<img src={monitor} height={"300px"} />}
            buttonText="Start monitoring"
          />
        </Box>
      </Modal>
    </NavWrapper>
  );
};

export default Navigation;
