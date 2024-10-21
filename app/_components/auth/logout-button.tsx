import { logoutAction } from "@/actions/logoutAction";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const handleOnClick = () => {
    signOut();
    // logoutAction();
  };

  return (
    <span className="cursor-pointer" onClick={handleOnClick}>
      {children}
    </span>
  );
};
