import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../IMG/img/NORDIC ROSE.png"


import Card from 'react-bootstrap/Card';
import yellow from "../IMG/img/yellow.png"


export default function Nav() {
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
                                    <h1> <Link to="/single">BLOG</Link> </h1>
                                    <h1> <Link to="/single">ABOUT</Link> </h1>
                                    <h1> <Link to="/single">LINKS</Link> </h1>
                                    <h1> <Link to="/single">PROJECTS</Link> </h1>


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
                            <img src={yellow} alt="" />

                            <Card.Body >
                                <Card.Title className="card-title" >A few words about this blog <br />platform, Ghost, and how this <br />
                                    site was made</Card.Title>
                                <Card.Text className="card-text" >
                                Why Ghost (& Figma) instead of Medium, <br />
                                WordPress or other options?.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="hr"></div>
                       

                    </div>


                </div>
            </section>










        </>
    )
}
