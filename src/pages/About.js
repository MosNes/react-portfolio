import React from "react";
import { Row, Col } from "reactstrap";

const About = () => {
    return (
        <>
            <section class="hero">
                <div class="title-bar">
                    <h1>J. MOSES NESTER</h1>
                </div>
            </section>
            <div class="borderLine"></div>
            <section id="bio" class="bio-section">
                <Row className="my-4 p-4 justify-content-center">
                    <Col className="col-12 col-md-4 d-flex justify-content-center">
                        <img alt="J Moses Nester" className="bioPic mb-4" src={require('../assets/images/Headshot.jpg')} />
                    </Col>
                    <Col className="bodyText col-12 col-md-4">
                        <h3>About Me</h3>
                        <p>I'm a former published comic artist and current IT professional with a passion for creative problem-solving. I am currently building my skills with JavaScript, React, and Vue with the goal of becoming a professional developer. With a background in IT and a tenacious appetite for technical knowlege, I hope to put these skills to use on exciting and challenging projects for clients all over the world.</p>
                    </Col>
                </Row>
                

            </section>

            

        </>
    )
}

export default About;