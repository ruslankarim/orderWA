import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import Typography from 'material-ui/Typography'
import { FormControl, FormHelperText } from 'material-ui/Form'
import SimpleMap from './SimpleMap'
//import GoogleApiWrapper from './GoogleApiWrapper'


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '700px'
    },
    formControl: {
        margin: theme.spacing.unit
    },

});

class EditOrder extends React.Component{


    state = {
        nameClient: '',
        numTel: '',
        weight: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render(){
        const { classes } = this.props;
    return (
        <div>
            <Grid container className={classes.root} justify="center">
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography type="display1" gutterBottom>
                            Заказ № 12345
                        </Typography>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel htmlFor="nameClient">Имя клиента</InputLabel>
                            <Input
                                id="nameClient"
                                value={this.state.nameClient}
                                onChange={this.handleChange('nameClient')}
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel htmlFor="numTel">Номер телефона клиента</InputLabel>
                            <Input
                                id="numClient"
                                value={this.state.numTel}
                                onChange={this.handleChange('numTel')}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
    }
}

EditOrder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditOrder);