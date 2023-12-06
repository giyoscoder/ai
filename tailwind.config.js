module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1520px",
      },
    },
    extend: {
      backgroundImage: {
        showcase_bg: "url('/src/assets/images/showcase.png')",
        bg_about_card: "url('/src/assets/images/team.png')",
      },
    },
  },
  plugins: [],
};
