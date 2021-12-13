import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../../styles/ContactPage.scss';

class ContactPage extends React.Component {
	renderError({ error, touched}) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}


	renderInput = ({ input, label, meta }) => {
		const className = `field${meta.touched && meta.error ? ' error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues)
	}

	render() {
		return (
			<div className="form-container">
				<h1 className="title">Contact Me</h1>
				<form
					className="ui form error"
					onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						className="field"
						name="name"
						component={this.renderInput}
						label="Enter name"
					/>
					<Field
						className="field"
						name="email"
						component={this.renderInput}
						label="Enter email" />
					<button className="ui button primary">Submit</button>
				</form>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
				<h1>Hello world</h1>
			</div>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.name) {
		errors.name = "You must enter a name"
	}
	if (!formValues.email) {
		errors.email = "You must enter an email"
	}
	return errors;
};

export default reduxForm({
	form: 'contactInfo',
	validate
})(ContactPage);