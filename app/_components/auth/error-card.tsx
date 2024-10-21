"use client";
import { CardWrapper } from "./card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerIcon={FaExclamationTriangle}
      headerTitle="Error!"
      headerLabel="Opps! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
