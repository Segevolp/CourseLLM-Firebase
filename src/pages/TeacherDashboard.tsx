import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled, keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CourseCard = styled(Box)(({ theme }) => ({
  background: 'rgba(31, 31, 58, 0.9)', 
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: `${fadeInUp} 0.5s ease-out forwards`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
  },
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    ...(variant === 'contained' && {
      backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      color: 'white',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
    ...(variant === 'outlined' && {
      borderColor: 'rgba(255, 255, 255, 0.3)',
      color: 'rgba(255, 255, 255, 0.8)',
      '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.5)',
      }
    })
  }));

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: 'Introduction to Computer Science', students: 50 },
    { id: 2, name: 'Data Structures and Algorithms', students: 35 },
    { id: 3, name: 'Web Development', students: 45 },
    { id: 4, name: 'Database Systems', students: 30 },
  ];

  return (
    <Container maxWidth="lg" sx={{ color: '#e0e0e0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, animation: `${fadeInUp} 0.5s ease-out` }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#fff' }}>
          Teacher Dashboard
        </Typography>
        <ActionButton
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate('/teacher/course/new')}
        >
          Create New Course
        </ActionButton>
      </Box>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={course.id}>
            <CourseCard sx={{ animationDelay: `${index * 0.1}s` }}>
              <Box>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
                  {course.name}
                </Typography>
                <Typography variant="body1" color="#a0a0c0" sx={{ mb: 3 }}>
                  {`Enrolled Students: ${course.students}`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <ActionButton
                  variant="contained"
                  onClick={() => navigate(`/teacher/course/${course.id}/edit`)}
                >
                  Manage Course
                </ActionButton>
                <ActionButton
                  variant="outlined"
                  startIcon={<BarChartIcon />}
                  onClick={() => navigate(`/teacher/analytics/${course.id}`)}
                >
                  View Analytics
                </ActionButton>
              </Box>
            </CourseCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeacherDashboard;
