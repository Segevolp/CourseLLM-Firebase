import { Typography, Container, Box, TextField, Button, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
    color: '#e0e0e0',
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

const SectionTitle = styled(Typography)({
    fontWeight: 700,
    color: '#fff',
    marginBottom: '16px',
    borderLeft: '4px solid #2196F3',
    paddingLeft: '12px',
});

const EditCourse = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [newTopic, setNewTopic] = useState('');
  const [assignments, setAssignments] = useState<string[]>([]);
  const [newAssignment, setNewAssignment] = useState('');
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    // Mock fetching course data
    setCourseName('Introduction to Computer Science');
    setCourseDescription('Fundamentals of programming and computer science.');
    setTopics(['Introduction', 'Variables and Data Types', 'Control Flow']);
    setAssignments(['Assignment 1: Hello World', 'Assignment 2: FizzBuzz']);
    setFiles(['lecture1.pdf', 'syllabus.docx']);
  }, [courseId]);

  const handleAddTopic = () => {
    if (newTopic.trim() !== '') {
      setTopics([...topics, newTopic]);
      setNewTopic('');
    }
  };

  const handleRemoveTopic = (index: number) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const handleAddAssignment = () => {
    if (newAssignment.trim() !== '') {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment('');
    }
  };

  const handleRemoveAssignment = (index: number) => {
    setAssignments(assignments.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFiles([...files, uploadedFile.name]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/teacher/dashboard');
  };

  return (
    <Container maxWidth="md" sx={{ color: '#e0e0e0' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, color: '#fff', animation: `${fadeInUp} 0.5s ease-out` }}>
            Edit Course
        </Typography>
        <FormContainer>
            <Box component="form" onSubmit={handleSubmit}>
                <StyledTextField
                    label="Course Name"
                    fullWidth
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    sx={{ mb: 3 }}
                />
                <StyledTextField
                    label="Course Description"
                    fullWidth
                    multiline
                    rows={4}
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    sx={{ mb: 3 }}
                />

                <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

                <SectionTitle variant="h5">Learning Trajectory</SectionTitle>
                <Box sx={{ display: 'flex', mb: 2 }}>
                    <StyledTextField label="New Topic" fullWidth value={newTopic} onChange={(e) => setNewTopic(e.target.value)} />
                    <Button onClick={handleAddTopic} sx={{ ml: 1, p: '15px'}} variant="outlined"> <AddIcon /> </Button>
                </Box>
                <List>{topics.map((topic, index) => (<ListItem key={index} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} secondaryAction={<IconButton edge="end" onClick={() => handleRemoveTopic(index)}><DeleteIcon sx={{color: '#FE6B8B'}} /></IconButton>}><ListItemText primary={topic} /></ListItem>))}</List>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

                <SectionTitle variant="h5">Assignments</SectionTitle>
                <Box sx={{ display: 'flex', mb: 2 }}>
                    <StyledTextField label="New Assignment" fullWidth value={newAssignment} onChange={(e) => setNewAssignment(e.target.value)} />
                    <Button onClick={handleAddAssignment} sx={{ ml: 1, p: '15px'}} variant="outlined"> <AddIcon /> </Button>
                </Box>
                <List>{assignments.map((assignment, index) => (<ListItem key={index} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} secondaryAction={<IconButton edge="end" onClick={() => handleRemoveAssignment(index)}><DeleteIcon sx={{color: '#FE6B8B'}} /></IconButton>}><ListItemText primary={assignment} /></ListItem>))}</List>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

                <SectionTitle variant="h5">Course Files</SectionTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Button variant="contained" component="label" startIcon={<CloudUploadIcon />} > Upload File <input type="file" hidden onChange={handleFileUpload}/> </Button>
                </Box>
                <List>{files.map((file, index) => (<ListItem key={index} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} secondaryAction={<IconButton edge="end" onClick={() => handleRemoveFile(index)}><DeleteIcon sx={{color: '#FE6B8B'}} /></IconButton>}><ListItemText primary={file} /></ListItem>))}</List>

                <Box sx={{mt: 4, textAlign: 'right'}}>
                    <ActionButton type="submit">Save Changes</ActionButton>
                </Box>
            </Box>
        </FormContainer>
    </Container>
  );
};

export default EditCourse;
