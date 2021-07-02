import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #223127 30%, #223117 90%)',
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});

function DefButton ({text='Introduce text'}) {
  
  return (
    <ThemeProvider theme={theme}>
      <Button>{text}</Button>
    </ThemeProvider>
  );
}

export default DefButton;
