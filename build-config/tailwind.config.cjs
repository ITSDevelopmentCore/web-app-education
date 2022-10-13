const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
    content: ['./src/**/*.{js,jsx,html}'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
});