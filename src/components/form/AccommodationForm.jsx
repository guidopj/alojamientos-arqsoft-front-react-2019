import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GenericSelect from '../genericSelect/GenericSelect'
import { withStyles } from '@material-ui/core/styles'
import withFormLogic from "./withFormLogic";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = theme => ({
    
    textField: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginTop:17,
        width: 200,
    },
    
    root: {
        flexGrow: 1,
        marginTop:17,
    },

    select: {
        width: 100,
    },

    button: {
        marginLeft: theme.spacing(10)
    }

})


const AccommodationForm = ({
    classes,
    provinces,
    types,
    stars,
    province, onChangeProvince,
    state, onChangeState,
    address, onChangeAddress,
    type, onChangeType,
    category, onChangeCategory,
    clearFields,
    onSubmit
 }) => (
        <Card>
            <CardHeader
                title="Cargar Alojamiento"
            />
            <CardContent>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={4}>
                            <GenericSelect 
                                name="province"
                                label="Provincia"
                                className={classes.select}
                                value={province.value}
                                onChange={onChangeProvince}
                                elems={provinces}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="state_id"
                                label="Localidad"
                                name="state"
                                margin="normal"
                                className={classes.textField}
                                value={state.value}
                                onChange={onChangeState}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                required
                                id="address_id"
                                label="Direccion"
                                name="direccion"
                                margin="normal"
                                className={classes.textField}
                                value={address.value}
                                onChange={onChangeAddress}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <GenericSelect 
                                name="tipo"
                                label="Tipo"
                                className={classes.select}
                                value={type.value}
                                onChange={onChangeType}
                                elems={types}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <GenericSelect 
                                name="category"
                                label="Categoria"
                                className={classes.select}
                                value={category.value}
                                onChange={onChangeCategory}
                                elems={stars}
                            />
                        </Grid>
                    </Grid>
                </div>
            </CardContent>
            <CardActions >
                <Grid container justify="flex-start" spacing={4}>
                    <Grid item>
                        <Button 
                            variant="contained"
                            className={classes.button}
                            onClick={() => onSubmit}
                        >
                            Crear Alojamiento
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained"        
                            onClick={() => clearFields}
                        >
                            Limpiar
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );

export default withFormLogic(withStyles(styles)(AccommodationForm));