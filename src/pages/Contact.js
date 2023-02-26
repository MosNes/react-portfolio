import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Input, Form, FormGroup, Label, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Contact = () => {
	//------------------- STATE VARIABLES -------------------------------------

	//sets initial default state of input fields to empty values
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	//Sets error message as empty string by default
	const [errorMessage, setErrorMessage] = useState('');

	//destructure formState into 3 variables
	const { name, email, message } = formState;

	//modal state
	const [modal, setModal] = useState(false);

	//------------------- EVENT HANDLERS --------------------------------------

	//create changeHandler to sync the values for the input fields to the current state
	function handleChange(e) {
		//validate input
		//if change comes from email field
		if (e.target.name === 'email') {
			//run email validation helper function
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			//set error message content if email is invalid
			if (!isValid) {
				setErrorMessage('Your Email is Invalid.');
			} else {
				setErrorMessage('');
			}
			//if change comes from other two fields
		} else {
			//if field is empty (length = 0)
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		//only update the state if the error message is empty
		if (!errorMessage) {
			//use spread operator to retain all key-value pairs, otherwise formState would be overwritten to contain only the single key-value defined here
			// [e.target.name] dynamically generates the property name and matching value
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {

			const response = await fetch('https://us-central1-portfolio-site-contact-mailer.cloudfunctions.net/sendMail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formState),
			});

			if (response.ok) {

				//clear form values
				e.target.reset();
				//show modal
				toggle();
			}

		} catch(err) {
			console.log(err)
		}
	}

	//handles modal toggle
	const toggle = () => setModal(!modal);

    //---------------------COMPONENT--------------------------------------------------------------------------------------

	return (
        <Container>
            <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">
                        Your Name
                    </Label>
                    <Input id="name" name="name" type="text" onBlur={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Your Email
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" onBlur={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="message">
                        Your Message
                    </Label>
                    <Input id="message" name="message" type="textarea" placeholder="Type away!" onBlur={handleChange}/>
                </FormGroup>
                {/* render errorMessage if not empty */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <Button>
                    Submit
                </Button>
				<Modal isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>Thank You!</ModalHeader>
					<ModalBody>
						<p>Thanks for reaching out! I'll follow up with you via email soon.</p>
					</ModalBody>
					<ModalFooter>
						<Button onClick={toggle}>Close</Button>
					</ModalFooter>
				</Modal>
            </Form>
        </Container>
    )
};

export default Contact;
