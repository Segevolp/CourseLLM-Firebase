
import { Box, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/system';

const drawerWidth = 260;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(31, 31, 58, 0.8)', // card-background with opacity
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StyledDrawer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  height: '100vh',
  position: 'fixed',
  zIndex: 1,
  background: '#1f1f3a',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: theme.spacing(10),
}));

const StudentLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', path: '/student/dashboard', icon: <DashboardIcon /> },
    { text: 'My Courses', path: '/student/courses', icon: <SchoolIcon /> },
    { text: 'Assessments', path: '/student/assessments', icon: <AssignmentIcon /> },
    { text: 'AI Tutor', path: '/student/chat', icon: <ChatIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', background: '#1a1a2e', minHeight: '100vh' }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#e0e0e0', fontWeight: 600 }}>
            Student Portal
          </Typography>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname.startsWith(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  borderRadius: '8px',
                  margin: '8px',
                  color: '#a0a0c0',
                  '&.Mui-selected': {
                    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  },
                  '&:hover:not(.Mui-selected)': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center', color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: '64px' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default StudentLayout;
