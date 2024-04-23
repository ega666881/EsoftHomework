import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './pages/mainPage';
import { Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <Container sx={{width: "1500px", height: "100%", display: "flex", justifyContent: "center"}}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </Container>
  )
}

export default App
