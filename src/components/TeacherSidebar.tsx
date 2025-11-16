import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/system';

const drawerWidth = 260;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  background: 'rgba(31, 31, 58, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: '#1f1f3a',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#a0a0c0',
  },
});

const TeacherSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', path: '/teacher/dashboard', icon: <DashboardIcon /> },
    { text: 'Create Course', path: '/teacher/course/new', icon: <AddCircleOutlineIcon /> },
  ];

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, color: '#e0e0e0' }}>
            Teacher Portal
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent" anchor="left">
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                 sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  borderRadius: '8px',
                  margin: '8px',
                  '&.Mui-selected': {
                    backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    color: 'white',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  },
                  '&:hover:not(.Mui-selected)': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center', color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div style={{ flexGrow: 1 }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/')} sx={{ 
                minHeight: 48,
                justifyContent: 'initial',
                px: 2.5,
                borderRadius: '8px',
                margin: '8px',
                color: '#a0a0c0',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 139, 0.2)', 
                  color: '#FE6B8B'
                }
              }}>
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center', color: 'inherit' }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </StyledDrawer>
    </>
  );
};

export default TeacherSidebar;
