import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import purple from "../IMG/img/purbl.png"
import brown from "../IMG/img/brownman.png"
import face from "../IMG/img/face.jpeg"
import wall from "../IMG/img/wall.jpeg"
import phone from "../IMG/img/phone.jpeg"
import street from "../IMG/img/street.jpeg"

import back from "../IMG/img/back.png"
import or from "../IMG/img/or.jpeg"
import many from "../IMG/img/many.jpeg"
import color from "../IMG/img/colors.jpeg"
import mouse from "../IMG/img/mouse.jpeg"
import pink from "../IMG/img/pink.png"
import nordice from "../IMG/img/NORDIC ROSE-2.png"







export default function Two() {
    return (
        <>

            <section>
                <h1 className="card-title" style={{ marginTop: "5%" }}>All articles</h1>


                <div className="grid">


                    <Container >
                        <Row>
                            <Col>

                                <Card className="cards">
                                    <img src={purple} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Here are some things you <br />
                                            should know regarding how <br />
                                            we work</Card.Title>
                                    </Card.Body>
                                </Card>


                                <Card className="cards">
                                    <img src={brown} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Hello world, or, in other <br />
                                            words, why this blog exists</Card.Title>
                                    </Card.Body>
                                </Card>


                                <Card className="cards">
                                    <img src={face} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Connecting artificial <br />
                                            intelligence with digital <br />
                                            product design</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={wall} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>I believe learning is the <br />
                                            most important skill</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={phone} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Clients are part of the team</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={street} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Connecting artificial <br />
                                            intelligence with digital <br />
                                            product design</Card.Title>
                                    </Card.Body>
                                </Card>




                            </Col>




                            <Col>

                                <Card className="cards">
                                    <img src={back} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>HGranny gives everyone the <br />
                                            finger, and other tips from <br />
                                            OFFF Barcelona</Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="cards">
                                    <img src={or} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Here are some things you <br />
                                            should know regarding how <br />
                                            we work</Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="cards">
                                    <img src={many} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>It’s all about finding the <br />
                                            perfect balance</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={color} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Clients are part of the team</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={mouse} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>Here are some things you <br />
                                            should know regarding how <br />
                                            we work</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="cards">
                                    <img src={pink} alt="" />

                                    <Card.Body>
                                        <Card.Title className='under-cards'>How modern remote <br />
                                            working tools get along <br />
                                            with Old School Cowboy's <br />
                                            methods</Card.Title>
                                    </Card.Body>
                                </Card>


                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Container>
                </div>
            </section>




            <footer>
                <Card style={{ width: '100%', backgroundColor: "black", color: "white", height: "30rem" }}>
                    <Card.Body>

                        <marquee>

                            <div className="navvv"  >

                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}>work </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> UX </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> design </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> Distributed </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> teams </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> reativity </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> Strategy </h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> Suspense</h1>
                                <h1 style={{ fontSize: "25px", marginBottom: "3rem" }}> br Growth</h1>

                            </div>


                        </marquee>
                        <Card.Title> <img src={nordice} alt="" className='nor'/> </Card.Title>
                        <Card.Text style={{ marginTop: "2rem", marginBottom: "2rem" , cursor:"pointer" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu <br />
                            velit tempus erat egestas efficitur. In hac habitasse platea <br />
                            dictumst. Fusce a nunc eget ligula suscipit finibus. <br />
                        </Card.Text>

                        <div className="ul">
                            <Card.Link className='card-link' href="#twitter">Twitter</Card.Link>
                            <Card.Link className='card-link' href="#linkedin">Linkedin</Card.Link>
                            <Card.Link className='card-link' href="#rss">Rss</Card.Link>
                        </div>
                        <Card.Text style={{ marginTop: "2rem", }}>
                            © 2012–2020 Nordic Rose Co. <br />
                           All rights reserved.
                        </Card.Text>


                    </Card.Body>
                </Card>


            </footer>


        </>
    )
}
