import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import backgroundImage from "/components/images/atividade5.webp";
import { red } from '@mui/material/colors';

const theme = createTheme();
export default function indexPages() {
  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{mt:8,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center'}}>
          <Typography component="h1" variant="h5">
          Executando React com Next.JS
          </Typography>
          <Typography component="h2">
          Site criado em TypeScript publicado na Vercel.
          </Typography>    
          <Typography component="h3">
          Grupo 5 - No rest for the interns
          </Typography>    
        </Box>
      </Container> 
    </ThemeProvider>

  )
}


