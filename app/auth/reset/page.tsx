import { ResetForm } from "@/app/_components/auth/reset-form";

const ResetPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-56 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <ResetForm />
    </div>
  );
};

export default ResetPage;
