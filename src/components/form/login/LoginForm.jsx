import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import withLoginFormLogic from "./withLoginFormLogic";
import { withSnackbar } from 'notistack';

const styles = theme => ({
    button: {
      margin: theme.spacing(1),
    },
  });


const Login = ({classes,username,password,onChangeUsername,onChangePassword,onSubmit}) => {
    
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={4}>
                <TextField
                    required
                    id="user_id"
                    label="Username"
                    name="userName"
                    margin="normal"
                    value={username.value}
                    onChange={onChangeUsername}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    required
                    id="password_id"
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    value={password.value}
                    onChange={onChangePassword}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" className={classes.button}
                    onClick={onSubmit}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    );
}


const LoginWithSnackbar = withSnackbar(Login);

export default withLoginFormLogic(withStyles(styles)(LoginWithSnackbar));