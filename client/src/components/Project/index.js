import React from "react";
import { Card, Col, CardBody, CardTitle, CardText } from "reactstrap";



const Project = ( {project} ) => {
    return(
        <Col md="4">
            <Card color="secondary" inverse={true}>
                <img alt={project.name} src={require(`../../assets/images/project-images/${project.imageFile}`)} />
                <CardBody>
                    <CardTitle tag="h5">
                        <a className="text-decoration-none linkText" href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
                    </CardTitle>
                    <CardText>
                        {project.description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>  
    )
}

export default Project;