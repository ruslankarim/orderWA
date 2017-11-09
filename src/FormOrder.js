import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import Typography from 'material-ui/Typography'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

const styles = theme => ({

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

class FormOrder extends React.Component{
    state = {
        editFormOpen: false,
        status: ''
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography type="display1" gutterBottom>
                    Заказ № 12345
                </Typography>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="nameClient">Имя клиента</InputLabel>
                    <Input
                        id="nameClient"
                        value={this.props.nameClient}


                    />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="numTel">Номер телефона клиента</InputLabel>
                    <Input
                        id="numClient"
                        value={this.props.numTel}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="age-helper">Статус</InputLabel>
                    <Select
                        autoWidth
                        value={this.state.status}
                        onChange={this.handleChange('age')}
                        input={<Input id="age-helper" />}
                    >

                        <MenuItem value={10}>Поиск водителя</MenuItem>
                        <MenuItem value={20}>На исполнении</MenuItem>
                        <MenuItem value={30}>Завершен</MenuItem>
                    </Select>
                </FormControl>
            </Paper>

        )
    }
}
                export default withStyles(styles)(FormOrder)



