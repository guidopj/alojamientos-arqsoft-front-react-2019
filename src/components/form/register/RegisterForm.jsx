import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import withRegisterFormLogic from "./withRegisterFormLogic";

const styles = theme => ({
    
})


const Register = ({
    username,
    password,
    confirm_password,
    onChangeUsername,
    onChangePassword,
    onChangeConfirmPassword,
    onRegister}) => (
    <Grid container>
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
                label="password"
                name="password"
                type="password"
                margin="normal"
                value={password.value}
                onChange={onChangePassword}
            />
        </Grid>
        <Grid item xs={4}>
            <TextField
                required
                id="confirm_password_id"
                label="reenter password"
                name="confirm_password"
                type="password"
                margin="normal"
                value={confirm_password.value}
                onChange={onChangeConfirmPassword}
            />
        </Grid>
        <Grid item>
            <Button 
                variant="contained"        
                onClick={onRegister}
            >
                Registrar
            </Button>
        </Grid>
    </Grid>
    );

export default withRegisterFormLogic(withStyles(styles)(Register));