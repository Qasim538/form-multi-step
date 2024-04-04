import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
  render() {
    const { values } = this.props;

    return (
      <ThemeProvider theme={theme}>
            <React.Fragment>
            
            </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default FormUserDetails
