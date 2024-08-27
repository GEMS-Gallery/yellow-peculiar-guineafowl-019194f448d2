import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { backend } from 'declarations/backend';

declare global {
  interface Window {
    Daily: any;
  }
}

const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
  const [callFrame, setCallFrame] = useState<any>(null);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      const message = await backend.getWelcomeMessage();
      setWelcomeMessage(message);
    };
    fetchWelcomeMessage();
  }, []);

  const joinCall = () => {
    if (!callFrame) {
      const frame = window.Daily.createFrame({
        iframeStyle: {
          width: '100%',
          height: '100%',
          border: '0',
          borderRadius: '8px',
        },
        showLeaveButton: true,
      });
      frame.join({ url: 'https://you.daily.co/hello' });
      setCallFrame(frame);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          IC Video
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {welcomeMessage}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={joinCall}
          sx={{ mt: 2, backgroundColor: '#28a745', '&:hover': { backgroundColor: '#218838' } }}
        >
          Join Call
        </Button>
        <Box id="video-container" sx={{ mt: 4, borderRadius: 2, overflow: 'hidden' }} />
      </Box>
    </Container>
  );
};

export default App;