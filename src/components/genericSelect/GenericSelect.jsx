import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    textField: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    width: 200,
    },
    dense: {
    marginTop: 19,
    },
    menu: {
    width: 200,
    },
    buttom: {
    marginTop: 19,
    }
})


const GenericSelect = (props) => {
    return(
        <TextField
            select
            label={props.label}
            value={props.value}
            className={props.classes.textField}
            onChange={props.onChange}
            margin="normal"
        >
            {props.elems.length &&
                props.elems.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}

export default withStyles(styles)(GenericSelect);