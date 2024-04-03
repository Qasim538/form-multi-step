import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBarfrom from 'material-ui/AppBar';
import TextField from 'Material-ui/TextField';
import RaisedButton from 'material-ui/AppBarraiseButton'


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }


  render() {
    const { value } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
