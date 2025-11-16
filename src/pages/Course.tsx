
import { Typography, Container, Button, Box, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
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

const CourseContainer = styled(Box)(({ theme }) => ({
    background: 'rgba(31, 31, 58, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: theme.spacing(4),
    animation: `${fadeInUp} 0.5s ease-out forwards`,
    color: '#e0e0e0',
    position: 'relative',
}));

const ActionButton = styled(Button)({
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 600,
    padding: '10px 20px',
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

const courseData: { [key: string]: { name: string, description: string, content: string, topics: string[] } } = {
  '1': { 
      name: 'Introduction to Computer Science', 
      description: 'Fundamentals of programming and computer science.', 
      content: 'This course covers the basics of Python, including variables, data types, and control structures. You will also learn about fundamental algorithms and data structures.',
      topics: ['History of Computing', 'Programming Basics', 'Control Flow', 'Functions', 'Data Structures', 'Algorithms']
    },
  '2': { 
      name: 'Data Structures and Algorithms', 
      description: 'Essential data structures and algorithms.', 
      content: 'This course provides a deep dive into data structures like linked lists, trees, and graphs. You will also learn about algorithm design and analysis.',
      topics: ['Arrays and Lists', 'Stacks and Queues', 'Trees and Graphs', 'Sorting Algorithms', 'Searching Algorithms', 'Complexity Analysis']
    },
};

const Course = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return <Typography sx={{color: 'white', textAlign: 'center', mt: 5}}>Course not found</Typography>;
  }

  return (
    <Container maxWidth="lg" >
      <CourseContainer>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
          {course.name}
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, color: '#a0a0c0' }}>
          {course.description}
        </Typography>
        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          {course.content}
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#fff', mb: 2 }}>Topics Covered</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 4}}>
            {course.topics.map(topic => (
                <Box key={topic} sx={{background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px'}}>
                    {topic}
                </Box>
            ))}
        </Box>

        <Box sx={{ textAlign: 'right' }}>
          <ActionButton
            startIcon={<ChatIcon />}
            onClick={() => navigate(`/student/chat`)}
          >
            Chat with AI Tutor
          </ActionButton>
        </Box>
      </CourseContainer>
    </Container>
  );
};

export default Course;
