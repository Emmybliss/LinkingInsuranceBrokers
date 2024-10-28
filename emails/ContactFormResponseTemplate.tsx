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

interface ContactFormResponseProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const website = "www.linkinginsurancebrokers.com";
const logo_url = "https://linkinginsurancebrokers.com/images/LIBL.png";

export const ContactFormResponse = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormResponseProps) => (
  <Html>
    <Head />
    <Preview>Thank you for reaching out to Linking Insurance Brokers!</Preview>
    <Body style={main}>
      <Container style={cardContainer}>
        <Container style={container}>
          <Img
            src={logo_url}
            width="120"
            height="90"
            alt="LIBL logo"
            style={logo}
          />
          <Text style={heading}>Thank You for Reaching Out to Us!</Text>
          {/* Heading for email purpose */}
          <Text style={paragraph}>Hello {name || "there"},</Text>
          <Text style={paragraph}>
            Thank you for reaching out to us! We’ve received your message and
            our team will get back to you shortly.
          </Text>

          {/* Contact Summary Section */}
          <Text style={paragraph}>
            <strong>Here is the summary of your submitted form:</strong>
          </Text>
          <ul style={summaryList}>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone Number:</strong> {phone}
            </li>
            <li>
              <strong>Subject:</strong> {subject}
            </li>
            <li>
              <strong>Message:</strong> {message}
            </li>
          </ul>

          <Text style={paragraph}>
            Here’s what you can expect next:
            <ul style={list}>
              <li>📞 A response from our team within 24-48 hours.</li>
              <li>
                📂 Assistance with any questions or concerns you mentioned in
                your message.
              </li>
              <li>
                🔍 Additional information about our services, if relevant to
                your inquiry.
              </li>
            </ul>
          </Text>

          <Text style={paragraph}>
            In the meantime, feel free to explore our website and learn more
            about our services, latest resources, and helpful articles to stay
            informed.
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
            Thank you again for reaching out. We look forward to assisting you
            soon.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            No. 1, Kandi Close, Aminu Kanu Crescent, Wuse II, Abuja.
          </Text>
        </Container>
      </Container>
    </Body>
  </Html>
);

export default ContactFormResponse;

const main = {
  backgroundColor: "#f4f4f9",
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
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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

const summaryList = {
  paddingLeft: "20px",
  marginBottom: "16px",
  fontSize: "14px",
  lineHeight: "24px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const buttonStyle = {
  display: "inline-block",
  color: "#fff",
  backgroundImage: "linear-gradient(to right, #f97316, #393BB2)",
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
