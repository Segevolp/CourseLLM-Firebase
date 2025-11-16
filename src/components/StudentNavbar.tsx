import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const StudentNavbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/student/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/student/assessments">
          Assessments
        </Button>
        <Button color="inherit" component={Link} to="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default StudentNavbar;
