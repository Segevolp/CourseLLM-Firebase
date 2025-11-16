import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, keyframes } from '@mui/system';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

const AssessmentCard = styled(Box)(({ theme }) => ({
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

const ActionButton = styled(Button)({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
});

const Assessments = () => {
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, title: 'Quiz 1: Introduction to Programming', description: 'Test your knowledge of basic programming concepts.' },
    { id: 2, title: 'Quiz 2: Data Structures', description: 'Challenge yourself with questions on arrays, linked lists, and trees.' },
    { id: 3, title: 'Exercise: Algorithm Design', description: 'Practice designing efficient algorithms for common problems.' },
    { id: 4, title: 'Mid-Term Exam', description: 'A comprehensive exam covering all topics from the first half of the course.' },
  ];

  return (
    <Container maxWidth="lg" sx={{ color: '#e0e0e0' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, color: '#fff', animation: `${fadeInUp} 0.5s ease-out` }}>
            Assessments
        </Typography>
        <Grid container spacing={4}>
            {quizzes.map((quiz, index) => (
            <Grid item xs={12} md={6} key={quiz.id}>
                <AssessmentCard sx={{ animationDelay: `${index * 0.1}s` }}>
                <Box>
                    <AssignmentIcon sx={{ fontSize: 40, color: '#21CBF3', mb: 2 }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
                    {quiz.title}
                    </Typography>
                    <Typography variant="body1" color="#a0a0c0" sx={{ flexGrow: 1, mb: 3 }}>
                    {quiz.description}
                    </Typography>
                </Box>
                <ActionButton
                    variant="contained"
                    onClick={() => navigate(`/student/assessment/${quiz.id}`)}
                >
                    Start Assessment
                </ActionButton>
                </AssessmentCard>
            </Grid>
            ))}
        </Grid>
    </Container>
  );
};

export default Assessments;
