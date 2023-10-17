import * as React from 'react';
import "./Main.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import sidebarIcon1 from "../Assets/sidebar-icon1.png";
import sidebarIcon2 from "../Assets/sidebar-icon2.png"
import { TextField } from '@mui/material';
import IconSearch from "../Assets/search-icon.png"
import Flag from "../Assets/flag-icon.png"
import Notification from "../Assets/notification.png"
import Contacts from "../Assets/contacts.png"
import Avatar from "../Assets/avatar-icon.png"
import PerformanceIndicator from './PerformanceIndicator';
import OnboardingSection from './OnboardingSection';

const drawerWidth = 240;

const sidebarIcon = [sidebarIcon1, sidebarIcon2, sidebarIcon2, sidebarIcon2];
const headerIcon = [Flag, Notification, Contacts, Avatar]

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchIcon, setSearchIcon] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
        <div className='logo'>
            <span className='texla'>texla</span>
            <span>culture</span>
        </div>
      <Toolbar />
      <h5 className='general'>GENERAL</h5>
      <List>
        {['Dashboard', 'Companies', 'Support & Tickets', 'User Admins'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <img src={sidebarIcon[index]} alt={text} style={{marginRight: "10px"}} />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor : "#fff"
        }}
      >
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color: "#000"}} />
            <div id='logo'>
              <span className='texla'>texla</span>
              <span>culture</span>
            </div>
          </IconButton>
          {searchIcon ? <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{backgroundColor: "#fff", borderRadius: "10px"}} /> : <img style={{cursor: "pointer"}} src={IconSearch} alt='search-icon' onClick={() => setSearchIcon(true)} />}
          <Box sx={{display:"flex", alignItems: "center", gap: "10px"}}>
            {headerIcon.map((source, index) => <img style={{cursor: "pointer"}} src={source} alt={index}/>)}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{fontWeight: "bold", fontSize: "20px", marginTop: "-20px"}}>Client Management</Box>
        <Box className='dashboard-section'>
            <span>Dashboard</span>
            <span>Client Details</span>
        </Box>
        <PerformanceIndicator />
        <OnboardingSection />
      </Box>
    </Box>
  );
}

export default Main;
