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
  value: number; // Changed to number to avoid repeated parsing
  postfix?: string;
};

// Define the list of achievements with proper types
const achivementList: Achievement[] = [
  {
    metric: "Products/Services",
    value: 250,
    postfix: "+",
  },
  {
    metric: "Happy Clients",
    value: 500,
    postfix: "+",
  },
  {
    metric: "Awards",
    value: 8,
  },
  {
    metric: "Claim Settlement Rate",
    value: 100,
    postfix: "%",
  },
];

const AchievementSection: React.FC = () => {
  return (
    <div className="md:mt-10 mt-5">
      <BackgroundGradient>
        <div className="border-none rounded-md gap-5 py-5 md:py-8 flex flex-col md:flex-row md:flex items-center justify-between">
          {achivementList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value} // Direct use of number type
                  locale="en-US"
                  className="text-4xl font-bold"
                />
                {achievement.postfix && <span>{achievement.postfix}</span>}
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
