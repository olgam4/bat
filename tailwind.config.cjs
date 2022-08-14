const { Icons } = require('tailwindcss-plugin-icons')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
    Icons({
      carbon: {
        icons: ['sun', 'moon', 'language', 'arrow-left', 'arrow-right', 'location-hazard', 'logo-github', 'moonrise', 'face-dissatisfied-filled', 'phone-voice']
      }
    }),
  ],
}
