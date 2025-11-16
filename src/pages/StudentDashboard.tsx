import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { styled, keyframes } from '@mui/system';

// Keyframes for animations
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
  background: 'rgba(31, 31, 58, 0.9)', // card-background
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
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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

const StudentDashboard = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: 'Introduction to Computer Science', description: 'Learn the fundamentals of programming and computer science.' },
    { id: 2, name: 'Data Structures and Algorithms', description: 'Master the essential data structures and algorithms.' },
    { id: 3, name: 'Web Development with React', description: 'Build modern, interactive web applications.' },
    { id: 4, name: 'Introduction to AI & ML', description: 'Explore the exciting world of Artificial Intelligence.' },
  ];

  return (
    <Container maxWidth="lg" sx={{ color: '#e0e0e0' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, animation: `${fadeInUp} 0.5s ease-out` }}>
        My Dashboard
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={course.id}>
            <CourseCard sx={{ animationDelay: `${index * 0.1}s` }}>
              <Box>
                <BookIcon sx={{ fontSize: 40, color: '#FF8E53', mb: 2 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
                  {course.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#a0a0c0', flexGrow: 1, mb: 3 }}>
                  {course.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <ActionButton
                  variant="contained"
                  onClick={() => navigate(`/student/course/${course.id}`)}
                >
                  Go to Course
                </ActionButton>
                <ActionButton
                  variant="outlined"
                  startIcon={<ChatIcon />}
                  onClick={() => navigate('/student/chat')}
                >
                  AI Tutor
                </ActionButton>
                <ActionButton
                  variant="outlined"
                  startIcon={<AssessmentIcon />}
                  onClick={() => navigate('/student/assessments')}
                >
                  Assessments
                </ActionButton>
              </Box>
            </CourseCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
