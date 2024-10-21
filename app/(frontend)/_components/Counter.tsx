"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import dynamic from "next/dynamic";

// Dynamic import of react-animated-numbers with no SSR
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// Define the type for each achievement object
type Achievement = {
  metric: string;
  value: string; // Keeping it as string since it's parsed later
  postfix?: string; // Optional as not all achievements have a postfix
};

// Define the list of achievements with proper types
const achivementList: Achievement[] = [
  {
    metric: "Products/Services",
    value: "250",
    postfix: "+",
  },
  {
    metric: "Happy Clients",
    value: "500",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "8",
  },
  {
    metric: "Claim Settlement Rate",
    value: "100",
    postfix: "%",
  },
];

const AchievementSection: React.FC = () => {
  return (
    <div className="py-8 mx-0  flex flex-col md:flex md:mx-36">
      <BackgroundGradient>
        <div className="border-none rounded-md gap-10 py-10 md:py-8  flex flex-col md:flex md:flex-row items-center justify-between">
          {achivementList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)} // Parsing value as an integer
                  locale="en-US"
                  className="text-4xl font-bold"
                />
                {achievement.postfix && achievement.postfix}{" "}
                {/* Render postfix if it exists */}
              </h2>
              <p className="text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default AchievementSection;
