import React from 'react';
import { Container, List, Col, Row, Button } from 'reactstrap';

const Resume = () => {
	return (
		<Container className="mt-4">                 
			<Row>
				<Col md="4">
					<h5>Languages</h5>
					<List type="unstyled">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>SQL</li>
						<li>GraphQL</li>
					</List>
				</Col>
				<Col md="4">
					<h5>Libraries and Frameworks</h5>
					<List type="unstyled">
						<li>Bootstrap</li>
						<li>Bulma</li>
						<li>React</li>
						<li>VueJS</li>
                        <li>Express</li>
						<li>Sequelize</li>
						<li>Mongoose</li>
						<li>Apollo</li>
					</List>
				</Col>
				<Col md="4">
					<h5>Databases</h5>
					<List type="unstyled">
						<li>MySQL</li>
						<li>MongoDB</li>
					</List>
				</Col>
                
			</Row>
            <div className="mt-4 mb-4">
            <a href="https://drive.google.com/file/d/1ZKb6NmL-aXk0s2NjKd-LcSiA00bfFtX0/view?usp=share_link" target="_blank" className="text-decoration-none linkText"><h5>Download Resume</h5></a>
            </div>
		</Container>
	);
};

export default Resume;
