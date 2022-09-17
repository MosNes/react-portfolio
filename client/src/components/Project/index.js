import React from "react";
import { Card, Col, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";



const Project = ( {project} ) => {
    return(
        <Col md="4">
            <Card color="secondary" inverse={true} className="m-2">
                <img alt={project.name} src={require(`../../assets/images/project-images/${project.imageFile}`)} />
                <CardBody>
                    <CardTitle tag="h5">
                        <a className="text-decoration-none linkText" href={project.deployedUrl} target="_blank" rel="noreferrer">{project.name}</a>
                    </CardTitle>
                    <CardText>
                        {project.description}
                    </CardText>
                    <CardSubtitle>
                        <a className="text-decoration-none linkText" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Col>  
    )
}

export default Project;