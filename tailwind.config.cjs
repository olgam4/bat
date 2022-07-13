const { Icons } = require('tailwindcss-plugin-icons')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
    Icons({
      carbon: {
        icons: ['language', 'arrow-left', 'arrow-right', 'location-hazard', 'logo-github', 'moonrise', 'face-dissatisfied-filled', 'phone-voice']
      }
    }),
  ],
}
