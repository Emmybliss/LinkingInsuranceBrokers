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

interface QuoteFormResponseProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  cover_period: string;
  message: string;
}

const website = "www.linkinginsurancebrokers.com";
const logo_url = "https://linkinginsurancebrokers.com/images/LIBL.png";

export const QuoteFormResponse = ({
  name,
  email,
  phone,
  company,
  product,
  cover_period,
  message,
}: QuoteFormResponseProps) => (
  <Html>
    <Head />
    <Preview>
      Thank you for requesting a quote with Linking Insurance Brokers!
    </Preview>
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
          <Text style={heading}>Quote Request Confirmation!</Text>
          <Text style={paragraph}>Hello {name || "there"},</Text>
          <Text style={paragraph}>
            Thank you for requesting a quote from Linking Insurance Brokers.
            We’re processing your request and will provide a detailed response
            shortly.
          </Text>

          <Text style={paragraph}>
            <strong>
              Here is the summary of your submitted Quote request form:
            </strong>
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
              <strong>Company:</strong> {company}
            </li>
            <li>
              <strong>Policy:</strong> {product}
            </li>
            <li>
              <strong>Period of Cover:</strong> {cover_period}
            </li>
            <li>
              <strong>Message:</strong> {message}
            </li>
          </ul>

          <Text style={paragraph}>
            Here’s what to expect next:
            <ul style={list}>
              <li>
                📄 A customized quote tailored to your needs, sent to your email
                within 24-48 hours.
              </li>
              <li>
                🔍 A breakdown of coverage options, pricing, and additional
                services.
              </li>
              <li>
                📞 Follow-up from our team to address any specific questions you
                may have.
              </li>
            </ul>
          </Text>

          <Text style={paragraph}>
            If you need immediate assistance or have additional questions, feel
            free to reach out to us at any time.
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
            We appreciate your interest in our services and look forward to
            helping you find the perfect coverage.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            No. 1, Kandi Close, Aminu Kanu Crescent, Wuse II, Abuja.
            <br />
            +234 806 608 0000
          </Text>
        </Container>
      </Container>
    </Body>
  </Html>
);

export default QuoteFormResponse;

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
  lineHeight: "24px",
  marginBottom: "16px",
};

const summaryHeading = {
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "12px",
};

const quoteSummary = {
  fontSize: "15px",
  lineHeight: "22px",
  marginBottom: "8px",
  color: "#333",
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
  textAlign: "center" as const,
};
