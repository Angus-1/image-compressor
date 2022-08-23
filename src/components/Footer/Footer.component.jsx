import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#6B91A4", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Angel Santoyo
      </h1>
      <Container>
        <Row>
          
            <Heading>Contact</Heading>


            <FooterLink href="https://github.com/Angus-1">
              <i className="Github">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
              </i>
            </FooterLink>


            <FooterLink href="mailto:santoyox714@gmail.com">
              <i className="Email">
                <span style={{ marginLeft: "10px" }}>
                  Email
                </span>
              </i>
            </FooterLink>

            <FooterLink href="https://www.linkedin.com/in/asantoyo/">
              <i className="Linkedin">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
              </i>
            </FooterLink>
            
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;