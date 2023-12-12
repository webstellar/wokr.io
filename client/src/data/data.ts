import curipod from "../assets/curipod.png";
import chatgpt from "../assets/chatgpt.png";
import copilot from "../assets/copilot.png";
import perplexity from "../assets/perplexity.png";
import yippity from "../assets/yippity.png";
import processFace from "../assets/process_face.png";
import processPost from "../assets/process_post.png";
import processShare from "../assets/process_share.png";

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
  { href: "/post-job", label: "Post a Job" },
];
export const settinglinks = [
  { href: "/become-seller", label: "Become a Seller" },
  { href: "/account-settings", label: "Settings" },
  { href: "/support", label: "Help & Support" },
  { href: "/billing", label: "Billing" },
];
