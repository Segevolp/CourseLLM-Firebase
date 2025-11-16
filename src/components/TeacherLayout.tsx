import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'; // We will create this component next
import { styled } from '@mui/system';

const drawerWidth = 260;

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `${drawerWidth}px`,
  marginTop: '64px', // AppBar height
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const TeacherLayout = () => {
  return (
    <Box sx={{ display: 'flex', background: '#1a1a2e', minHeight: '100vh' }}>
      <TeacherSidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default TeacherLayout;
