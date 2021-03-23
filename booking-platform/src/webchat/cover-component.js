import React from "react";
import styled from "styled-components";
import { WebchatContext } from "@botonic/react";

const FIRST_FLOW_ID = '4nbDlkU4r0h3yfAeaqwKiL'

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 80px;
  background: #d1d1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  z-index: 3;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (min-width: 768px) {
    height: 370px;
  }
`;

const WelcomeIcon = styled.div`
  /* margin-top: 7rem; */
`;

const Button = styled.button`
  width: 100px;
  height: 48px;
  background: #00588c;
  border-radius: 10px;
  margin-top: 3px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const SubHeader = styled.h1`
  position: relative;
  font-family: Verdana;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  width: 85%;
  line-height: 1.4;
  color: #000000;
  /* margin: 0px 30px 20px 30px; */
`;

const Text = styled.a`
  font-family: Verdana;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  line-height: 1.4;
  color: #000000;
`;

const PrimaryText = styled(Text)`
  font-size: 11px;
  font-weight: 100;
  margin: 12px 0px;
`;

export default class CustomCover extends React.Component {
  static contextType = WebchatContext;

  close() {
    this.props.closeComponent();
    this.context.sendPayload(`text$${FIRST_FLOW_ID}`)
  }

  render() {
    return (
      <Container>
        <SubHeader>Beep! I'm a chatbot</SubHeader>
        <Text>
          I will help you book your vacation <br /> ...maybe.
        </Text>
        <PrimaryText>
          I'm a robot, not a human, but will help <br /> you as best I can.
        </PrimaryText>
        <Button onClick={() => this.close()}>Get Started</Button>
      </Container>
    );
  }
}
