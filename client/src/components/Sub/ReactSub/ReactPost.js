import "./reactpost.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import BotBlack from "../../assets/images/bot-black.png";
import { Image, Link, FileText } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReactPost = (props) => {
    const navigate = useNavigate();
    
    
  return (
    <>
    <Container fluid="md" className="postReact">
      <Row className="">
        <Col md="auto gy-3">
        <Stack direction="horizontal" gap={4}>
          <div className="botWrapper">
        <img className="profileBot" src={BotBlack} alt="profile bot" />
        </div>
          <input
          type="text"
          onClick={(e) => {
              navigate("/createpost");
            }
        }
            placeholder="New Post"
            className="postInput"
          />
          <FileText  onClick={(e) => {
              navigate("/createpost"); }} className="postIcon"/>
          <Image onClick={(e) => {
              navigate("/createpost"); }} className="postIcon"/>
          <Link onClick={(e) => {
              navigate("/createpost"); }} className="postIcon"/>
          </Stack>
        </Col>
      </Row>
    </Container>
    </>
  );
    };


export default ReactPost;