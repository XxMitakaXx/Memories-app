import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyle from './styles';
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setPostsData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''	}) 
	const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
	const dispatch = useDispatch();
	const classes = useStyle();

    useEffect(() => {
		if (post) setPostsData(post);
	}, [post])

    const handleSubmit = async (e) => {
        e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}

		clear();
	}

    const clear = () => {
        setCurrentId(null)
		setPostsData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
	}

	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
				<TextField name="creatonpr" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostsData({...postData, creator: e.target.value})}
				/>
				<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostsData({...postData, title: e.target.value})}
				/>
				<TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostsData({...postData, message: e.target.value})}
				/>
				<TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostsData({...postData, tags: e.target.value})}
				/>
			    <div className={classes.fileInput}>
			    	<FileBase type="file" multiple={false}  onDone={ ({ base64 }) => setPostsData({ ... postData, selectedFile: base64 })} />
			    </div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
				<Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
			</form>
		</Paper>
	)
}

export default Form;