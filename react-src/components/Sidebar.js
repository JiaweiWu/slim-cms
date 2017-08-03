import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<ListGroup>
					<ListGroupItem><Link to="/dashboard">Dashboard</Link></ListGroupItem>
					<ListGroupItem><Link to="/posts">Posts</Link></ListGroupItem>
					<ListGroupItem><Link to="/comments">Comments</Link></ListGroupItem>
					<ListGroupItem><Link to="/settings">Settings</Link></ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

export default Sidebar;