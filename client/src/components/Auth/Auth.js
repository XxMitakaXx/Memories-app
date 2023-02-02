import React from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";

import useStyles from './styles'
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';

const Auth = () => {
    const classes = useStyles();

	const isSignUp = false;
	
    const HandleSubmit = () => {

	}

	const HandleChange = () => {

	}

	return (
		<Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockedOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignUp ? 'Sign Un' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={HandleSubmit}>
                    <Grid container spacing={2}>
						{
							isSignUp && (
								<>
								    <Grid>
								        <TextField name='firstName' label='First Name' handleChange={HandleChange} autoFocus xs={6} />
									</Grid>
									<Grid>
								        <TextField name='firstName' label='First Name' handleChange={HandleChange} autoFocus xs={6} />
									</Grid>
								</>
							)
						}
					</Grid>
				</form>
			</Paper>
		</Container>
	)
}

export default Auth;