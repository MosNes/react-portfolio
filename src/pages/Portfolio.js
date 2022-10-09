import React from 'react';
import { Container, Row } from 'reactstrap';
import Project from '../components/Project';

const Portfolio = () => {
	// --------------------------- HOOKS / STATE VARIABLES -------------------------------------
	const projects = [
		{
			name: 'Football Fantasy',
			description:
				'An app that allows you to create your own fantasy football league with friends. Pick your favorite players, draft them to your team and defeat your friends.',
			githubUrl: 'https://github.com/MosNes/fantasy-football-draft',
            deployedUrl: 'https://fantasy-football-draft-app.herokuapp.com/',
			imageFile: '4.jpg',
            id: 1
		},
		{
			name: 'Nest-Mates',
			description:
				'An app that helps roommates split tasks and chores evenly and fairly between each other, minimizing conflict.',
			githubUrl: 'https://github.com/MosNes/nest-mates',
            deployedUrl: 'http://nest-mates.herokuapp.com/',
			imageFile: '0.png',
            id: 2
		},
		{
			name: 'Healthy Lifestyle App',
			description:
				'Returns matching music playlists for the workouts you select.',
			githubUrl: 'https://github.com/jjgarcia1993/healthy-lifestyle-app',
            deployedUrl: 'https://jjgarcia1993.github.io/healthy-lifestyle-app/',
			imageFile: '1.jpg',
            id: 3
		},
		{
			name: 'Text Editor PWA',
			description: 'Exercise to add webpack and IndexedDB to an existing text-editor applition and convert it into a PWA.',
			githubUrl: 'https://github.com/MosNes/text-editor',
            deployedUrl:'https://gentle-harbor-95546.herokuapp.com/',
			imageFile: '2.jpg',
            id: 4
		},
		{
			name: 'Tech Blog',
			description: 'A blog web app challenge project using MYSQL, Sequelize, Handlebars, and Express.js.',
			githubUrl: 'https://github.com/MosNes/tech-blog-app',
            deployedUrl:'https://mosnes-tech-blog-app.herokuapp.com/',
			imageFile: '3.jpg',
            id: 5
		},
		{
			name: 'Employee Tracker CLI',
			description: 'A command line app that allows users to manage a MYSQL database of employees, roles, and departments.',
			githubUrl: 'https://github.com/MosNes/employee-tracker-app',
            deployedUrl:'https://github.com/MosNes/employee-tracker-app',
			imageFile: '6.png',
            id: 6
		}
	];

	return (
		<Container className="mt-4 mb-4">
			<Row>
                {/* create project component for each project in projects */}
                {projects.map((project) => (
                    <Project project={project} key={project.id}/>
                ))}

			</Row>
		</Container>
	);
};

export default Portfolio;
