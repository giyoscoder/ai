module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
        center: true,
    },
    extend: {
      backgroundImage: {
        'showcase_bg': "url('/src/assets/images/showcase.png')",
        'bg_about_card': "url('/src/assets/images/team.png')",
      },
    },
  },
  plugins: [],
}