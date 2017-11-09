import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import FormOrder from './FormOrder'

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

class EditOrder extends React.Component {

    state = {
        orders: [{
            nameClient: '',
            numTelClient: '',
         }
        ]
    }

    render() {
        const orders = this.state.orders
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} justify="center">
                    <Grid item xs={6}>
                        <FormOrder
                            nameClient={orders[0].nameClient}
                            numTelClient={orders[0].numTelClient}

                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

    EditOrder.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(EditOrder);