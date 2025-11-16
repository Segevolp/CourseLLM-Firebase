import { Box, Typography, Container, Paper, TextField, Button, Avatar } from '@mui/material';
import { useState } from 'react';
import { styled, keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChatContainer = styled(Paper)(({ theme }) => ({
    background: 'rgba(31, 31, 58, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: theme.spacing(3),
    height: '70vh', 
    display: 'flex',
    flexDirection: 'column',
    color: '#e0e0e0'
}));

const Message = styled(Box)(({ theme, sender }) => ({
    display: 'flex',
    justifyContent: sender === 'user' ? 'flex-end' : 'flex-start',
    marginBottom: theme.spacing(2),
    animation: `${fadeIn} 0.5s ease-in-out`,
  }));
  

const MessageBubble = styled(Paper)(({ theme, sender }) => ({
    padding: theme.spacing(1.5, 2),
    borderRadius: '20px',
    maxWidth: '70%',
    background: sender === 'user' ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' : '#42426b',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
}));

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your AI Tutor. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // AI response logic would go here
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'ai', text: `I'm processing your request about "${input}".` }]);
      }, 1000);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#fff', mb: 4 }}>
        AI Tutor
      </Typography>
      <ChatContainer>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', pr: 2 }}>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender}>
                 {msg.sender === 'ai' && <Avatar sx={{ bgcolor: '#42426b', mr: 1.5 }}>AI</Avatar>}
                <MessageBubble sender={msg.sender}>{msg.text}</MessageBubble>
                {msg.sender === 'user' && <Avatar sx={{ bgcolor: '#FF8E53', ml: 1.5 }}>U</Avatar>}
            </Message>
          ))}
        </Box>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            sx={{ 
                mr: 1,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#e0e0e0',
                    '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)'
                    },
                    '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.4)'
                    }
                }
            }}
          />
          <Button variant="contained" onClick={handleSend} sx={{ 
              borderRadius: '12px', 
              backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)', 
              color: 'white'
            }}>
            Send
          </Button>
        </Box>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
