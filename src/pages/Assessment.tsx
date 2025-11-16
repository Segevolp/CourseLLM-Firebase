import { Typography, Container, Box, Radio, RadioGroup, FormControlLabel, FormControl, Button, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
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

const AssessmentContainer = styled(Paper)(({ theme }) => ({
    background: 'rgba(31, 31, 58, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: theme.spacing(4),
    animation: `${fadeInUp} 0.5s ease-out forwards`,
    color: '#e0e0e0',
}));

const ActionButton = styled(Button)({
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 600,
    padding: '10px 20px',
    backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
});

const assessmentData: { [key: string]: { title: string, questions: { question: string, options: string[] }[] } } = {
    '1': { 
        title: 'Quiz 1: Introduction to Programming', 
        questions: [
            { question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Marketing Language', 'Hyper Text Markup Language', 'Hyperlink and Text Markup Language'] },
            { question: 'Which CSS property is used to change the text color of an element?', options: ['color', 'text-color', 'font-color', 'foreground-color'] },
        ]
    },
};

const Assessment = () => {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const navigate = useNavigate();
  const assessment = assessmentId ? assessmentData[assessmentId] : null;
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log('Submitted Answers:', answers);
    navigate('/student/assessments');
  };

  if (!assessment) {
    return <Typography sx={{color: 'white', textAlign: 'center', mt: 5}}>Assessment not found</Typography>;
  }

  return (
    <Container maxWidth="md">
      <AssessmentContainer>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 4, color: '#fff' }}>
          {assessment.title}
        </Typography>
        {assessment.questions.map((q, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#e0e0e0', mb: 2 }}>{`Question ${index + 1}: ${q.question}`}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                value={answers[index] || ''}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              >
                {q.options.map((option, i) => (
                  <FormControlLabel key={i} value={option} control={<Radio sx={{color: '#21CBF3', '&.Mui-checked': {color: '#2196F3'}}} />} label={option} />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
        <Box sx={{ mt: 4, textAlign: 'right' }}>
            <ActionButton onClick={handleSubmit}>Submit Assessment</ActionButton>
        </Box>
      </AssessmentContainer>
    </Container>
  );
};

export default Assessment;
