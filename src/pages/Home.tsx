import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 0.8s ease-out forwards`,
}));

const RoleCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  marginTop: theme.spacing(3),
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <AnimatedBox sx={{ mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>
            Welcome to CourseLLM
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 6 }}>
            Your AI-powered assistant for learning and teaching.
          </Typography>
        </AnimatedBox>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={5}>
            <AnimatedBox sx={{ animationDelay: '0.2s' }}>
              <RoleCard>
                <Box>
                  <SchoolIcon sx={{ fontSize: 60, color: '#FF8E53' }} />
                  <Typography variant="h4" component="h2" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#fff' }}>
                    Student
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', flexGrow: 1, mb: 2 }}>
                    Engage with course materials, get personalized feedback, and test your knowledge.
                  </Typography>
                </Box>
                <StyledButton onClick={() => navigate('/student/dashboard')}>
                  Enter as Student
                </StyledButton>
              </RoleCard>
            </AnimatedBox>
          </Grid>
          <Grid item xs={12} md={5}>
            <AnimatedBox sx={{ animationDelay: '0.4s' }}>
              <RoleCard>
                <Box>
                  <WorkIcon sx={{ fontSize: 60, color: '#FE6B8B' }} />
                  <Typography variant="h4" component="h2" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#fff' }}>
                    Teacher
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', flexGrow: 1, mb: 2 }}>
                    Manage courses, upload content, and monitor student progress with our dashboard.
                  </Typography>
                </Box>
                <StyledButton onClick={() => navigate('/teacher/dashboard')} sx={{ backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' }}>
                  Enter as Teacher
                </StyledButton>
              </RoleCard>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
