import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_ME, QUERY_USER } from '../../utils/queries';
// import { Link, useParams } from "react-router-dom";
import {
    Container,
    Row,
    Card,
    Button,
    Stack
} from 'react-bootstrap';
import { Slack, Github, Linkedin } from 'react-bootstrap-icons';
import ProfileBot from "../../assets/images/customer-support-bot.png"
import '../ProfileBar/profilebar.css'




function ProfileBar() {


    // const { username: userParam } = useParams();
    // const user = data?.me || {};
    // const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam },
    //   });
    // var user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    return (

        // <div style={{ backgroundColor: '#eee' }}>
            <Container className="profileContainerBar">
                <Row className="profileBar">
                        <Card style={{ borderRadius: '25px',  border: '3px', borderStyle: 'solid' }}>
                            <Card.Body className="text-center">
                                
                                <div className="mt-3 mb-4">
                                    <Card.Img src={ProfileBot}
                                        className="rounded-circle" style={{ width: '120px', backgroundColor: 'chocolate' }} />
                                </div>
                               
                                <Card.Title tag="h4">B Nel</Card.Title>
                                {/* <Card.Text className="text-muted mb-4">
                                    @Programmer <span className="mx-2">|</span> <a href="https://github.com/">github.com</a>
                                </Card.Text> */}
                                <div className="mb-4 pb-2">
                                <Stack direction="horizontal" gap={3}>
                                    <Button href="https://github.com/">
                                        <Github />
                                    </Button>
                                    <Button href="https://slack.com/workspace-signin">
                                        <Slack />
                                    </Button>
                                    <Button href="https://www.linkedin.com/">
                                        <Linkedin />
                                    </Button>
                                    </Stack>
                                </div>
                                <Button style={{ width: "200px", borderRadius: "20px" }} onClick={(e) => {
                                    navigate("/profile");
                                }}
                                    rounded size="sm" variant="outline-primary">
                                    Edit Profile
                                </Button>
                                {/* <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <Card.Text className="mb-1 h5">8,211</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Up Votes</Card.Text>
                                    </div>
                                    <div className="px-3">
                                        <Card.Text className="mb-1 h5">3,442</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Followers</Card.Text>
                                    </div>
                                    <div>
                                        <Card.Text className="mb-1 h5">2,456</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Posts</Card.Text>
                                    </div>
                                </div> */}
                            </Card.Body>
                        </Card>
                </Row>
               
            </Container>
            
        // </div>
    );
}

export default ProfileBar;