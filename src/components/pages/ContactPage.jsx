import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import '../../styles/ContactPage.scss';

const ContactPage = ({ handleSubmit }) => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};


	const renderInput = ({ input, label, meta }) => {
		const className = `field${meta.touched && meta.error ? ' error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{renderError(meta)}
			</div>
		);
	};

	const onSubmit = (formValues) => {
		console.log(formValues)
	}

	return (
		<div className="contact">
			<h1>Contact Me</h1>
			<form
				className="ui form error"
				onSubmit={handleSubmit(onSubmit)}>
				<Field
					className="field"
					name="name"
					component={renderInput}
					label="Enter name"
				/>
				<Field
					className="field"
					name="email"
					component={renderInput}
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
};

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

ContactPage.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
	form: 'contactInfo',
	validate
})(ContactPage);