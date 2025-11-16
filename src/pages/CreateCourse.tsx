import { Typography, Container, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

const FormContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(31, 31, 58, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  animation: `${fadeInUp} 0.5s ease-out forwards`,
}));

const StyledTextField = styled(TextField)({
    '& label': {
        color: '#a0a0c0',
    },
    '& label.Mui-focused': {
        color: '#21CBF3',
    },
    '& .MuiInputBase-input': {
        color: '#e0e0e0',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.05)',
        '& fieldset': {
            borderColor: 'rgba(255,255,255,0.2)',
        },
        '&:hover fieldset': {
            borderColor: '#21CBF3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2196F3',
        },
    },
});

const ActionButton = styled(Button)({
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 600,
  padding: '10px 20px',
  backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
});

const CreateCourse = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Creating course:', { courseName, courseDescription });
    // Navigate to dashboard after simulated creation
    navigate('/teacher/dashboard');
  };

  return (
    <Container maxWidth="md" sx={{ color: '#e0e0e0' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, color: '#fff', animation: `${fadeInUp} 0.5s ease-out` }}>
        Create a New Course
      </Typography>
      <FormContainer>
        <Box component="form" onSubmit={handleSubmit}>
          <StyledTextField
            label="Course Name"
            variant="outlined"
            fullWidth
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            sx={{ mb: 3 }}
            required
          />
          <StyledTextField
            label="Course Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            sx={{ mb: 3 }}
            required
          />
          <ActionButton type="submit" variant="contained">
            Create Course
          </ActionButton>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default CreateCourse;
