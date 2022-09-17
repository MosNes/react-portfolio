import React from 'react';
import { Container, Row, Card } from 'reactstrap';
import Project from '../components/Project';

const Portfolio = () => {
	// --------------------------- HOOKS / STATE VARIABLES -------------------------------------
	const projects = [
		{
			name: 'Nest-Mates',
			description:
				'An app that helps roommates split tasks and chores evenly and fairly between each other, minimizing conflict.',
			githubUrl: 'https://github.com/MosNes/nest-mates',
            deployedUrl: 'http://nest-mates.herokuapp.com/',
			imageFile: '0.png',
            id: 1
		},
		{
			name: 'Healthy Lifestyle App',
			description:
				'Returns matching music playlists for the workouts you select.',
			githubUrl: 'https://github.com/jjgarcia1993/healthy-lifestyle-app',
            deployedUrl: 'https://jjgarcia1993.github.io/healthy-lifestyle-app/',
			imageFile: '1.jpg',
            id: 2
		},
		{
			name: 'Placeholder Project',
			description: 'This is a placeholder for a future project.',
			githubUrl: 'https://github.com/MosNes',
            deployedUrl:'#',
			imageFile: '2.jpg',
            id: 3
		},
		{
			name: 'Placeholder Project',
			description: 'This is a placeholder for a future project.',
			githubUrl: 'https://github.com/MosNes',
            deployedUrl:'#',
			imageFile: '3.jpg',
            id: 4
		},
		{
			name: 'Placeholder Project',
			description: 'This is a placeholder for a future project.',
			githubUrl: 'https://github.com/MosNes',
            deployedUrl:'#',
			imageFile: '4.jpg',
            id: 5
		},
		{
			name: 'Placeholder Project',
			description: 'This is a placeholder for a future project.',
			githubUrl: 'https://github.com/MosNes',
            deployedUrl:'#',
			imageFile: '5.jpg',
            id: 6
		},
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
