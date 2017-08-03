import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router';
import Sidebar from './Sidebar';
import MainView from './MainView';
import Signin from './Signin';

import { Row, Col, Grid } from 'react-bootstrap';

const Main = () => {
	return (
		<div>
			<Grid>
				<Row>
					<Col md={2}>
						<Sidebar />
					</Col>
					<Col md={10}>
						<MainView />
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

const InvalidPath = () => {
	return (
		<div>
			Invalid Page
		</div>
	);
}

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Switch>
					<Route path="/error" component={InvalidPath} />
					<Route path="/signin" component={Signin} />
					<Route path="/" render={() => (
						this.props.authState.authStatus ? (
							<Main />
						) : (
							<Redirect to="/signin" />
						)
					)} />
					<Route component={InvalidPath} />
				</Switch>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authState: state.authState
	};
}

export default withRouter(connect(mapStateToProps, null)(App));