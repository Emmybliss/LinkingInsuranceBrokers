// Define the shape of the testimonial data
interface Testimonial {
  id: number;
  image: string;
  name: string;
  company: string;
  designation: string;
  testimony: string;
}

// Sample testimonial data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testi_01.png",
    name: "John Doe",
    company: "Dreamland Corp",
    designation: "CEO",
    testimony:
      "Linking Insurance Brokers made finding the perfect coverage for our business incredibly easy. Their network of brokers provided us with personalized options and the guidance we needed. I highly recommend them for anyone seeking reliable and expert insurance services!",
  },
  {
    id: 2,
    image: "/images/testi_02.png",
    name: "Jane Smith",
    company: "FlexPay Ltd",
    designation: "Financial Advisor",
    testimony:
      "As a financial advisor, I often need to find the best insurance solutions for my clients. Linking Insurance Brokers connected me with top-notch brokers who simplified the process and secured great deals. Their platform is a game-changer for busy professionals!",
  },
  {
    id: 3,
    image: "/images/testi_03.png",
    name: "Alice Johnson",
    company: "Future Secure",
    designation: "Investment Analyst",
    testimony:
      "Linking Insurance Brokers helped us compare multiple policies effortlessly. Their brokers’ expertise and tailored recommendations ensured that we got the right coverage for our unique needs. I couldn’t be happier with the service!",
  },
  {
    id: 4,
    image: "/images/test6.jpg",
    name: "Robert Brown",
    company: "Secure Shield Inc.",
    designation: "Risk Manager",
    testimony:
      "The team at Linking Insurance Brokers goes above and beyond. They connected me with experienced brokers who provided competitive insurance quotes in no time. Their professional service saved us both time and money.",
  },
  {
    id: 5,
    image: "/images/test4.jpg",
    name: "Emily Davis",
    company: "LandMark Solutions",
    designation: "Marketing Manager",
    testimony:
      "Working with Linking Insurance Brokers was an absolute breeze. Their platform allowed us to reach out to expert brokers who offered excellent coverage options, giving us peace of mind. A must-try for anyone seeking insurance solutions!",
  },
  {
    id: 6,
    image: "/images/test5.jpg",
    name: "Michael Wilson",
    company: "AgentNet",
    designation: "Sales Director",
    testimony:
      "Joining forces with Linking Insurance Brokers was one of the best decisions we made. Their platform opened doors to trusted insurance brokers who provided customized coverage for our growing needs. Exceptional service all around!",
  },
];

// Define the shape of the Partners data
interface Partners {
  id: number;
  image: string;
  name: string;
}

// Sample Partners data
export const partners: Partners[] = [
  {
    id: 1,
    image: "/images/partners/naicom.png",
    name: "naicom",
  },
  {
    id: 2,
    image: "/images/partners/prestige.webp",
    name: "prestige",
  },
  {
    id: 3,
    image: "/images/partners/NEM-Insurance-Plc.jpg",
    name: "NEM Insurance Plc",
  },
  {
    id: 4,
    image: "/images/partners/heirs.jpg",
    name: "Heirs",
  },
  {
    id: 5,
    image: "/images/partners/NCRIB.png",
    name: "NCRIB",
  },
  {
    id: 6,
    image: "/images/partners/veritas.png",
    name: "veritas",
  },
];

// Define the shape of the Post data
interface PostTypes {
  id: string;
  title: string;
  image: string;
  intro: string;
  body: string;
  link: string;
}

// Sample of the Post data
export const postData: PostTypes[] = [
  {
    id: "1",
    title: "The Importance of Comprehensive Car Insurance",
    image: "/images/car-insurance.jpg",
    intro:
      "Discover why comprehensive car insurance is essential in today’s fast-paced world and how it can save you from unexpected expenses.",
    body: "Comprehensive car insurance is designed to cover not only damage to your own vehicle but also liabilities from accidents that might affect others. While some drivers choose only the minimal legal requirements, like third-party insurance, comprehensive coverage ensures peace of mind in situations involving theft, natural disasters, and vandalism. This type of policy also often includes protection against uninsured drivers and can cover the cost of repairs or replacements. As driving becomes more integral to modern life, protecting one’s vehicle with a comprehensive policy is no longer a luxury but a necessity",
    link: "#",
  },
  {
    id: "2",
    title: "Health Insurance: Why You Shouldn’t Delay",
    image: "/images/health-insurance.jpg",
    intro:
      "Learn about the benefits of health insurance, what it covers, and why it’s crucial to secure your family’s health.",
    body: "Health insurance provides coverage for medical expenses arising from illnesses, injuries, and other health-related issues. Without health insurance, individuals are left vulnerable to high medical costs, especially in emergencies. With plans covering a wide range of services like preventive care, hospital visits, and prescription drugs, securing a health insurance policy is critical. Delaying health insurance can lead to financial strain in times of unexpected illness and even hinder access to quality healthcare. Protecting your family’s future starts with securing comprehensive health coverage today",
    link: "#",
  },
  {
    id: "3",
    title: "Homeowners Insurance: Protecting Your Biggest Investment",
    image: "/images/home-insurance.jpg",
    intro:
      "Understand the importance of homeowners insurance and how it safeguards your property against unforeseen disasters.",
    body: "Homeownership is one of the largest investments an individual can make, and protecting that investment is crucial. Homeowners insurance provides coverage against damage caused by fire, theft, vandalism, and natural disasters. In many cases, it also includes liability coverage in case someone is injured on your property. Without this insurance, repairing or rebuilding after a disaster can be financially devastating. Whether you're protecting your physical property or covering potential liability issues, homeowners insurance is a safety net no property owner should go without",

    link: "#",
  },
  {
    id: "4",
    title: "Life Insurance: Securing Your Family’s Future",
    image: "/images/life-insurance.jpg",
    intro:
      "Learn how life insurance can provide financial stability to your loved ones when they need it the most.",
    body: "Life insurance is a vital financial tool designed to provide for your family in the event of your untimely death. The right life insurance policy ensures that your loved ones are not left with debts or financial difficulties, and that they can maintain their standard of living after your passing. The payout from a life insurance policy can cover funeral costs, mortgages, and even future expenses like college tuition. For those who wish to secure the future of their family, having a life insurance policy is a responsible and caring decision",

    link: "#",
  },
  {
    id: "5",
    title: "Business Insurance: A Must for Every Entrepreneur",
    image: "/images/business-insurance.jpg",
    intro:
      "Explore the different types of business insurance and how they protect your enterprise from potential liabilities.",
    body: "Entrepreneurs invest a lot of time, money, and energy into building their businesses. Business insurance provides protection against a variety of risks that could otherwise devastate a company. From property damage to legal liabilities, business insurance helps shield companies from the unforeseen. Depending on your industry, you might require coverage for employee-related issues, professional mistakes, or even cyber threats. Without the right coverage, one unfortunate incident could potentially ruin years of hard work. Business insurance allows entrepreneurs to focus on growth while mitigating financial risks.",
    link: "#",
  },
  {
    id: "6",
    title: "Understanding Travel Insurance and Its Benefits",
    image: "/images/travel-insurance.jpg",
    intro:
      "Traveling soon? Discover why travel insurance is an essential part of your trip preparation and what it covers.",
    body: "Travel insurance provides protection against various risks associated with traveling, such as trip cancellations, medical emergencies, and lost luggage. In an unpredictable world, being prepared with travel insurance ensures you won’t be left stranded by unforeseen events. Whether you are traveling domestically or internationally, the policy can cover emergency medical treatment, evacuation, and even delays or interruptions in your itinerary. Given the small cost relative to potential losses, travel insurance is a smart way to ensure your trip remains a joyful experience.",
    link: "#",
  },
  {
    id: "7",
    title: "Insurance Fraud: How to Avoid Common Scams",
    image: "/images/fraud-prevention.jpg",
    intro:
      "Protect yourself from insurance fraud with these tips to recognize and avoid common scams.",
    body: "Insurance fraud is a growing concern, with many individuals and organizations falling victim to scams that result in financial losses. From staged accidents to false claims, fraudsters are continually finding new ways to exploit insurance systems. However, by being aware of the red flags — such as overly aggressive solicitors or suspicious claims — and by verifying the legitimacy of insurance agents and companies, you can protect yourself from scams. Staying vigilant and informed is key to preventing insurance fraud from affecting your life or business.",
    link: "#",
  },
  {
    id: "8",
    title: "Why Professional Liability Insurance is Important",
    image: "/images/liability-insurance.jpg",
    intro:
      "Learn about professional liability insurance and how it shields professionals from claims related to their services.",
    body: "Professional liability insurance, also known as errors and omissions insurance, protects professionals such as doctors, lawyers, and consultants from claims related to negligence, malpractice, or errors in service. This type of insurance is critical in fields where small mistakes can lead to significant legal claims. Without professional liability insurance, professionals can be held personally liable for legal expenses and damages, which can quickly become financially burdensome. For those offering specialized services, this coverage provides essential protection against costly lawsuits.",
    link: "#",
  },
  {
    id: "9",
    title: "Pet Insurance: Is It Worth the Cost?",
    image: "/images/pet-insurance.jpg",
    intro:
      "Find out if pet insurance is a smart investment for your furry friend’s healthcare needs.",
    body: "Pet insurance provides coverage for veterinary bills arising from illnesses or injuries to your pets. With the rising cost of healthcare for pets, having insurance can help alleviate the financial burden of unexpected vet visits, surgeries, or long-term treatments. While some owners may feel pet insurance is unnecessary, the peace of mind knowing you can afford the best possible care for your pet in emergencies is invaluable. Weighing the cost of premiums against potential medical expenses can help you decide if pet insurance is worth it for your furry family member.",
    link: "#",
  },
  {
    id: "10",
    title: "The Role of Insurance Brokers in Customizing Policies",
    image: "/images/insurance-brokers.jpg",
    intro:
      "Discover how insurance brokers can help you find the most suitable policies tailored to your individual or business needs.",
    body: "Insurance brokers act as intermediaries between clients and insurance companies, helping individuals and businesses find the best policies tailored to their specific needs. Brokers understand the complexities of insurance and work to customize coverage options that provide the right balance between cost and protection. Unlike agents who represent specific companies, brokers offer impartial advice and often have access to a wider range of products. For those who need help navigating the insurance landscape, an experienced broker can be an invaluable resource.",
    link: "#",
  },
];

// Define type for slider items
export interface ProductDataType {
  id: string;
  image: string;
  title: string;
  desc: string;
}
export const ProductsData: ProductDataType[] = [
  {
    id: "1",
    image: "/images/contractors.jpg",
    title: "CONTRACTORS ALL RISK INSURANCE",
    desc: "Ensure your construction projects are covered from start to finish with our Contractors All Risk Insurance. We provide tailored solutions to safeguard against unforeseen losses and damages.",
  },
  {
    id: "2",
    image: "/images/firerisk.jpg",
    title: "FIRE AND SPECIAL PERILS / PUBLIC BUILDING & STRUCTURES",
    desc: "Protect your properties from fire and other specified perils with our comprehensive coverage. Secure your public buildings and structures against potential risks and damages.",
  },
  {
    id: "3",
    image: "/images/aviation.jpg",
    title: "AVIATION INSURANCE COVER",
    desc: "Get the best aviation insurance that offers extensive coverage for aircraft, personnel, and liabilities. Our expert brokers provide top-notch protection tailored to your aviation needs.",
  },
  {
    id: "4",
    image: "/images/marine.jpg",
    title: "MARINE INSURANCE",
    desc: "From cargo to ships, our Marine Insurance offers complete protection for goods in transit by sea. Keep your marine assets safe with tailored solutions that meet international standards.",
  },
  {
    id: "5",
    image: "/images/goods-in-transit-banner-2-600x475-1.jpg",
    title: "GOODS IN TRANSIT INSURANCE",
    desc: "Safeguard your goods during transport with our comprehensive Goods in Transit Insurance. Whether by land, sea, or air, we ensure your assets are fully protected until they reach their destination.",
  },
];

interface serivicesDataTypes {
  id: string;
  title: string;
  description: string;
  link: string;
}
export const servicesData: serivicesDataTypes[] = [
  {
    id: "1",
    title: "Risk Assessment:",
    description:
      "We assess the risks associated with clients' personal or business situations. This helps determine the appropriate type and level of coverage required to protect against potential losses",
    link: "#",
  },
  {
    id: "2",
    title: "Policy Comparison",
    description:
      "We compare insurance policies from various providers, ensuring that clients get the best value in terms of coverage and premium costs. This eliminates the hassle of researching and evaluating different options individually",
    link: "#",
  },
  {
    id: "3",
    title: "Claims Assistance",
    description:
      "Linking Insurance Brokers guide clients through the insurance claims process, helping them collect the necessary documentation and negotiate with insurers to ensure timely and fair payouts.",
    link: "#",
  },
  {
    id: "4",
    title: "Policy Management",
    description:
      "They manage clients' insurance portfolios by regularly reviewing and updating policies to ensure they stay aligned with any changes in coverage needs, lifestyle, or business operations.",
    link: "#",
  },
  {
    id: "5",
    title: "Customized Insurance Solutions",
    description:
      "Based on specific needs, Linking Insurance Brokers tailor insurance plans to suit individual or business requirements, whether for life, health, auto, property, or business insurance.",
    link: "#",
  },
  {
    id: "6",
    title: "Legal and Regulatory Guidance",
    description:
      "They offer advice on insurance regulations and ensure that clients comply with any legal obligations related to their insurance coverage, such as industry-specific requirements or local regulations.",
    link: "#",
  },
  {
    id: "7",
    title: "Renewal Management",
    description:
      "We handle policy renewals, ensuring that coverage remains continuous and that the best terms are negotiated. This avoids lapses in coverage and keeps premiums competitive.",
    link: "#",
  },
  {
    id: "8",
    title: "Market Expertise",
    description:
      "With Our industry knowledge, Linking Insurance Brokers provide insights into current trends and the latest insurance products, helping clients make informed decisions about their coverage.",
    link: "#",
  },
  {
    id: "9",
    title: "Risk Mitigation Strategies",
    description:
      "We offer proactive advice on reducing exposure to risks, such as implementing safety measures or improving business practices, which can help lower premiums and prevent future claims.",
    link: "#",
  },
  {
    id: "10",
    title: "Client Advocacy",
    description:
      "Acting as a client advocate, We work on behalf of their clients, ensuring their needs are prioritized in negotiations with insurers, and providing support whenever issues arise.",
    link: "#",
  },
];
