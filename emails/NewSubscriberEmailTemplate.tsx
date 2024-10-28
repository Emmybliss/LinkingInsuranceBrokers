import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NewSubscriberEmailProps {
  email: string;
}

const website = "www.linkinginsurancebrokers.com";
const logo_url = "https://linkinginsurancebrokers.com/images/LIBL.png";

export const NewSubscriberEmail = ({ email }: NewSubscriberEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Linking Insurance Brokers - Your subscription is confirmed!
    </Preview>
    <Body style={main}>
      <Container style={cardContainer}>
        {" "}
        {/* Card container for shadow effect */}
        <Container style={container}>
          <Img
            src={logo_url}
            width="120"
            height="90"
            alt="LIBL logo"
            style={logo}
          />
          <Text style={heading}>Welcome to Linking Insurance Brokers!</Text>{" "}
          {/* Heading for email purpose */}
          <Text style={paragraph}>Hello {email},</Text>
          <Text style={paragraph}>
            Thank you for subscribing to our newsletter at{" "}
            <strong>{website}</strong>! We’re thrilled to have you as part of
            our community.
          </Text>
          <Text style={paragraph}>
            As a subscriber, you’ll receive regular updates on the latest
            insurance trends, tips to protect your assets, and exclusive offers
            designed to help you stay ahead.
          </Text>
          <Text style={paragraph}>
            Here’s what you can expect:
            <ul style={list}>
              <li>
                🌟 Expert insights and advice on managing risk and making
                informed insurance decisions.
              </li>
              <li>📈 Updates on industry trends to keep you informed.</li>
              <li>🤝 Special subscriber-only offers and resources.</li>
            </ul>
          </Text>
          <Text style={paragraph}>
            To get started, we invite you to explore our website and discover
            our latest articles, tools, and resources.
          </Text>
          <Section style={btnContainer}>
            <Button
              style={buttonStyle}
              href="https://linkinginsurancebrokers.com"
            >
              Visit Our Website
            </Button>
          </Section>
          <Text style={paragraph}>
            We’re excited to embark on this journey with you. Welcome to the
            Linking Insurance Brokers family!
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            No. 1, Kandi Close, Aminu Kanu Crescent, Wuse II, Abuja. +234 806
            608 0000
          </Text>
        </Container>
      </Container>
    </Body>
  </Html>
);

export default NewSubscriberEmail;

const main = {
  backgroundColor: "#f4f4f9", // Light background outside the card
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  padding: "20px",
};

const cardContainer = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "16px",
};

const list = {
  paddingLeft: "20px",
  marginBottom: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const buttonStyle = {
  display: "inline-block",
  color: "#fff",
  backgroundImage: "linear-gradient(to right, #f97316, #393BB2)", // Gradient styling
  borderRadius: "8px",
  padding: "12px 24px",
  textAlign: "center" as const,
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 auto",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
