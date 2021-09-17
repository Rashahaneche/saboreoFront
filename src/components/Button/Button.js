import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Button.css'

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#223127',
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      }
    },
  },
});

function DefButton ({onClick, disabled=false, text='Introduce text'}) {
  
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} className={disabled && 'disabled-button espec'} disabled={disabled}>{text}</Button>
    </ThemeProvider>
  );
}

export default DefButton;