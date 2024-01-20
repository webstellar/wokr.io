/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "wokr-red-50": "#FFECF0",
        "wokr-red-100": "#D03D5A",
        "wokr-red-200": "#AE0A2B",
        "wokr-green-100": "#55C1AC",
      },
      fontFamily: {
        "pangram-extralight": ["Pangram-ExtraLight"],
        "pangram-light": ["Pangram-Light"],
        "pangram-normal": ["Pangram-Regular"],
        "pangram-medium": ["Pangram-Medium"],
        "pangram-bold": ["Pangram-Bold"],
        "pangram-extrabold": ["Pangram-ExtraBold"],
        "pangram-black": ["Pangram-Black"],
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
    },
  },
};
