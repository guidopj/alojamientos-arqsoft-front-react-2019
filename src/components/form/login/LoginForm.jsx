import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import withLoginFormLogic from "./withLoginFormLogic";

const styles = theme => ({
    
})


const Login = ({username,password,onChangeUsername,onChangePassword,onSubmit}) => (
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
        <Grid item>
            <Button 
                variant="contained"        
                onClick={() => onSubmit}
            >
                Login
            </Button>
        </Grid>
    </Grid>
    );

export default withLoginFormLogic(withStyles(styles)(Login));