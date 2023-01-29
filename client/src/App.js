import React, { useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyle from './styles.js';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
    const classes = useStyle();
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getPosts());
	}, [dispatch, currentId])

	return (
		<Container maxidth="lg">
			
		    <Grow in>
				<Container>
					<Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	)
}

export default App