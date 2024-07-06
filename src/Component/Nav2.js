import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../IMG/img/NORDIC ROSE.png"


import Card from 'react-bootstrap/Card';
import yellow from "../IMG/img/yellow.png"
import temsal from "../IMG/img/temsal.jpeg"
import eyes from "../IMG/img/eyes.png"



import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import small from "../IMG/img/smallman.png"

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Nav2() {
    return (
        <>

            <nav>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>

                                <div className="navvv">
                                    <h1> <Link to="/">BLOG</Link> </h1>
                                    <h1> <Link to="/">ABOUT</Link> </h1>
                                    <h1> <Link to="/">LINKS</Link> </h1>
                                    <h1> <Link to="/">PROJECTS</Link> </h1>


                                </div>

                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>




            <section>

                <div className="container">


                    <div className="second">

                        <Card className="photo">

                            <Card.Body >
                                <Card.Title className="card-title" >A few words about this blog <br />platform, Ghost, and how this <br />
                                    site was made</Card.Title>
                                <Card.Text className="card-text" >
                                    Why Ghost (& Figma) instead of Medium, <br />
                                    WordPress or other options?.
                                </Card.Text>
                            </Card.Body>

                            <img src={yellow} alt="" />

                        </Card>
                        <div className="hr"></div>

                    </div>

                    <div className="small-photo">

                        <Row>
                            <Col sm={1}><img src={small} alt="" className="rounded-circle" />
                            </Col>
                            <Col sm={7}><h1>Mika MAtikainen <br /> <span>Apr 15, 2020 · 4 min read</span>
                            </h1></Col>

                            <Col sm={4} className="icons">

                                <Col sm={4} className="i" style={{ color: "blue" }} > <FaFacebook /> </Col>
                                <Col sm={4} className="i" style={{ color: "dodgerblue" }}><FaTwitter /> </Col>
                                <Col sm={4} className="i" style={{ color: "green" }}> <IoLogoWhatsapp /> </Col>

                            </Col>
                        </Row>
                    </div>




                    <div className="lorem-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea <br /> dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. <br /><br />

                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu <br /> dui molestie, molestie lectus eu, semper lectus. <br /> <br /></p>

                        <h1>Next on the pipeline <br /><br /></h1>

                        <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean <br /> pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br /> <br />

                            Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. <br /><br /></p>
                    </div>



                    <Card className="temsal">
                        <img src={temsal} alt="" />
                    </Card>

                    <p className="pp" style={{ textAlign: "center" }}>Image caption centered this way and I’ll make this a bit longer <br />
 to indicate the amount of line-height.</p>




                        <p className="lorem-text">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad <br />
                            litora torquent per conubia nostra, per inceptos himenaeos. Aliquam <br />
                            quis posuere ligula. <br /><br />

                            In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo <br />
                            lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi<br />
                            efficitur auctor metus, id mollis lorem pellentesque id. Nullam<br />
                            posuere maximus dui et fringilla. Nulla non volutpat leo.<br /><br />

                            A list looks like this:</p>






                        <ul className="lorem-text">
                            <li>First item in the list</li><br />
                            <li>Second item in the list lorem ipsum dolor sit amet nunc felis <br />
                                dolor lorem ipsum sit amet</li><br />
                            <li>Third item in the list</li><br />

                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per <br />
                                inceptos himenaeos. Aliquam quis posuere ligula.<br /><br />

                                Thanks for reading,<br />
                                Mika</p>
                        </ul>


                        <Col sm={4} className="icons2">

                            <Col sm={4} className="i2" style={{ color: "blue" }} > <FaFacebook /> </Col>
                            <Col sm={4} className="i2" style={{ color: "dodgerblue" }}><FaTwitter /> </Col>
                            <Col sm={4} className="i2" style={{ color: "green" }}> <IoLogoWhatsapp /> </Col>

                        </Col>


                        <p className="under-line">Tags: <span>product design, culture</span> <br /><br /><br /></p>










                        <div className="small-photo">

                            <Row>
                                <Col sm={1}><img src={small} alt="" className="rounded-circle" />
                                </Col>
                                <Col sm={7}>
                                    <p>Mika Matikainen <span> is a Design Founder & Advisor, Berlin <br /> School of Creative Leadership Executive MBA participant,<br /> Zippie advisor, Wolt co-founder, and Nordic Rosebr <br /> stakeholder.</span></p>
                                </Col>
                            </Row>
                        </div>


                        <div className="hr-line">
                            <div className="emo">
                                <img src={eyes} alt="" />
                            </div>
                            <hr/>
                        </div>








                </div>
         </section>





        </>
    )
}
