import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Posts extends Component {
	constructor(props){
		super(props);
	}	

	handleButtonPress() {

	}

	render() {
		return(
			<div>
				Posts Page
				<Button>
					<Link to="/posts/newpost">New Post</Link>
				</Button>
				{this.props.children}
			</div>
		);
	}
}

export default Posts;