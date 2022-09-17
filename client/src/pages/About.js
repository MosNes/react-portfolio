import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
    return(
        <Container className="mt-4 mb-4">
            
            <Row>
                <Col className="mb-4">
                    <img alt="J Moses Nester" className="bioPic" src={require('../assets/images/Headshot.jpg')} />
                </Col>
                <Col className="bodyText">
                    <h3>About Me</h3>
                    <p>Bro ipsum dolor sit amet punter ski bum rock roll frozen chicken heads single track rig. Washboard schraeder liftie, glades gnar slash schwag steed. Free ride T-bar acro trucks fully hammer crunchy pillow popping, bonk back country corn hardtail. Ripping rigid trail swag 360 pipe huck. Tele butter gnar drop. Ski bum reverse camber backside glades bear trap schwag bowl face shots taco mute ripper noodle line skid poaching. Poaching deck greasy bonk, sharkbite reverse camber park giblets scream berm hammerhead moguls stoked butter wheelie.</p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default About;