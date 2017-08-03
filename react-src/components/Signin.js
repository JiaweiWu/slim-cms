import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button } from 'react-bootstrap';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signinEmailInput: "",
			signinPasswordInput: ""
		};
	}

	handleInputChange(elementName, e) {
		let newState = {};
		newState[elementName] = e.target.value;
		this.setState(newState);
	}

	render() {
		return(
			<div>
				<Grid fluid={false}>
					<Row>
						<Col md={12}>
							<form>
								<FormGroup controlId="formEmail">
									<ControlLabel>Email</ControlLabel>
									<FormControl
										type="email"
										value={this.state.signinEmailInput}
										onChange={this.handleInputChange.bind(this, "signinEmailInput")}
									/>
								</FormGroup>
								<FormGroup controlId="formPassword">
									<ControlLabel>Password</ControlLabel>
									<FormControl
										type="password"
										value={this.state.signinPasswordInput}
										onChange={this.handleInputChange.bind(this, "signinPasswordInput")}
									/>
								</FormGroup>
							</form>
							<Button>
								Sign In
							</Button>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Signin;