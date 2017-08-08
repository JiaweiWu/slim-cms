import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addNewPost } from '../actions/index';

class NewPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postTitleInput: "",
			postDescriptionInput: "",
			postContentInput: "",
			postTagInput: ""
		}
	}

	handleInputChange(elementName, e) {
		let newState = {};
		newState[elementName] = e.target.value;
		this.setState(newState);
	}

	handleButtonClick() {
		console.log("Button Pressed");
		addNewPost()
	}

	render() {
		const text = this.state.postDescriptionInput;
		return(
			<div>
				<form>
					<FormGroup controlId="formPostTitle">
						<ControlLabel>Title</ControlLabel>
						<FormControl
							type="title"
							value={this.state.postTitleInput}
							onChange={this.handleInputChange.bind(this, "postTitleInput")}
						/>
					</FormGroup>
					<FormGroup controlId="formPostDescription">
						<ControlLabel>Description</ControlLabel>
						<FormControl
							type="description"
							value={this.state.postDescriptionInput}
							onChange={this.handleInputChange.bind(this, "postDescriptionInput")}
						/>
					</FormGroup>
					<FormGroup controlId="formPostDescription">
						<ControlLabel>Content</ControlLabel>
						<FormControl
							type="content"
							componentClass="textarea"
							value={this.state.postContentInput}
							onChange={this.handleInputChange.bind(this, "postContentInput")}
						/>
					</FormGroup>
					<FormGroup controlId="formPostTags">
						<ControlLabel>Tags</ControlLabel>
						<FormControl
							type="tags"
							value={this.state.postTags}
							onChange={this.handleInputChange.bind(this, "postTagInput")}
						/>
					</FormGroup>
					<Button
						onClick={this.handleButtonClick.bind(this)}>
						Submit!
					</Button>
				</form>
				<h1>
					{text}
				</h1>
			</div>
		);
	}
}

export default NewPost;
