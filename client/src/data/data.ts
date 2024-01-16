import curipod from "../assets/curipod.png";
import chatgpt from "../assets/chatgpt.png";
import copilot from "../assets/copilot.png";
import perplexity from "../assets/perplexity.png";
import yippity from "../assets/yippity.png";
import processFace from "../assets/process_face.png";
import processPost from "../assets/process_post.png";
import processShare from "../assets/process_share.png";
import dashboard from "../assets/dashboard.svg";
import contacts from "../assets/contacts.svg";
import analytics from "../assets/analytics.svg";
import earnings from "../assets/earnings.svg";
import services from "../assets/services.svg";
import setting from "../assets/settings.svg";
import orders from "../assets/orders.svg";
import { NavItem } from "../types/Types";

export const offerings = [
  {
    id: 1,
    title: "Sales & Prospecting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 2,
    title: "Recruiting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 3,
    title: "Data Research",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  },
];

export const Categories = [
  {
    id: "1",
    title: "Ad management",
    url: "#",
  },
  {
    id: "2",
    title: "SEO",
    url: "#",
  },
  {
    id: "3",
    title: "Cold calling",
    url: "#",
  },
];

export const allIntegrations = [
  {
    id: "1",
    title: "Chat GPT",
    icon: chatgpt,
  },
  {
    id: "2",
    title: "Perplexity",
    icon: perplexity,
  },
  {
    id: "3",
    title: "Curipod",
    icon: curipod,
  },
  {
    id: "4",
    title: "Copilot",
    icon: copilot,
  },
  {
    id: "5",
    title: "Yippity",
    icon: yippity,
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const processes = [
  {
    id: "1",
    title: "Register Your Account",
    description:
      "Start by signing up for an AI tool or platform of your choice. This usually involves providing basic information and setting up your preferences.",
    icon: processFace,
  },
  {
    id: "2",
    title: "Post a Job",
    description:
      "Start by signing up for an AI tool or platform of your choice. This usually involves providing basic information and setting up your preferences.",
    icon: processPost,
  },
  {
    id: "3",
    title: "Get the work done",
    description:
      "Start by signing up for an AI tool or platform of your choice. This usually involves providing basic information and setting up your preferences.",
    icon: processShare,
  },
];

export const homeMenu = [
  {
    id: 1,
    url: "/my-orders",
    title: "Orders",
  },
  {
    id: 2,
    url: "/my-selling-profile",
    title: "Switch to Selling",
  },
  {
    id: 3,
    url: "/my-buying-profile",
    title: "Switch to Buying",
  },
];

export const profileLinks = [
  { href: "/profile", label: "Profile" },
  { href: "/post-a-job", label: "Post a Job" },
];
export const settinglinks = [
  { href: "/become-seller", label: "Become a Seller" },
  { href: "/account-settings", label: "Settings" },
  { href: "/support", label: "Help & Support" },
  { href: "/billing", label: "Billing" },
];

export const languages = [
  { value: "Mandarin Chinese", label: "Mandarin Chinese" },
  { value: "Spanish", label: "Spanish" },
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Bengali", label: "Bengali" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Russian", label: "Russian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Western Punjabi", label: "Western Punjabi" },
  { value: "Marathi", label: "Marathi" },
  { value: "Telugu", label: "Telugu" },
  { value: "Wu Chinese", label: "Wu Chinese" },
  { value: "Turkish", label: "Turkish" },
  { value: "Korean", label: "Korean" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Tamil", label: "Tamil" },
  { value: "Yue Chinese", label: "Yue Chinese" },
  { value: "Urdu", label: "Urdu" },
];

export const languageLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "proficient", label: "Proficient" },
  { value: "native", label: "Native" },
];

export const skillLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "proficient", label: "Proficient" },
];

export const skills = [
  { value: "socialm media management", label: "Social Media Management" },
  { value: "digital marketing", label: "Digital Marketing" },
  { value: "web scraping", label: "Web Scraping" },
  { value: "web development", label: "Web Development" },
];

export const automationTools = [
  { value: "uipath", label: "UiPath" },
  { value: "blueprism", label: "Blue Prism" },
  { value: "automationanywhere", label: "Automation Anywhere" },
  { value: "ansible", label: "Ansible" },
  { value: "chef", label: "Chef" },
  { value: "puppet", label: "Puppet" },
  { value: "jenkins", label: "Jenkins" },
  { value: "gitlabci", label: "GitLab CI/CD" },
  { value: "circleci", label: "CircleCI" },
  { value: "nintex", label: "Nintex" },
  { value: "zapier", label: "Zapier" },
  { value: "powerautomate", label: "Microsoft Power Automate" },
  { value: "terraform", label: "Terraform" },
  { value: "cloudformation", label: "AWS CloudFormation" },
  { value: "selenium", label: "Selenium" },
  { value: "appium", label: "Appium" },
  { value: "cypress", label: "Cypress" },
  { value: "hubspot", label: "HubSpot" },
  { value: "marketo", label: "Marketo" },
  { value: "informatica", label: "Informatica PowerCenter" },
  { value: "apachenifi", label: "Apache NiFi" },
  { value: "talend", label: "Talend" },
  { value: "zendesk", label: "Zendesk" },
  { value: "freshdesk", label: "Freshdesk" },
];

export const automationLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "proficient", label: "Proficient" },
];

export const sidebarNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/setup-profile",
    icon: dashboard,
  },
  {
    label: "Orders",
    href: "/my-orders",
    icon: orders,
  },
  {
    label: "Jobs",
    href: "/my-jobs",
    icon: services,
  },
  {
    label: "Analytics",
    href: "/my-analytics",
    icon: analytics,
  },
  {
    label: "Earnings",
    href: "/my-earnings",
    icon: earnings,
  },
  {
    label: "Contacts",
    href: "/my-contacts",
    icon: contacts,
  },
  {
    label: "Setting",
    href: "/setup-profile",
    icon: setting,
  },
];

export const feeTypes = [
  {
    id: 1,
    label: "One-time",
    value: "one-time",
  },
  {
    id: 3,
    value: "Fixed Price",
    label: "Fixed Price",
  },
  {
    id: 2,
    value: "Subscription",
    label: "Subscription",
  },
  {
    id: 3,
    value: "Pay-As-You-Go",
    label: "Pay-As-You-Go",
  },
];
