module.exports = {
    content: ["./src/**/*.{vue,js,ts}"],
    theme: {
        screens: {
            sm: "600px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
            xxl: "1740",
        },
        borderRadius: {
            sm: "0.125rem",
            md: "0.375rem",
            lg: "0.5rem",
        },
        extend: {
            colors: {
                "brown": "#984B03",
                "dark-gray": "#404654",
                "light-gray": "#EAEAEA",
                "medium-gray": "#C8C8C8",
                "yellow": "#FFE8A0",
                "yellow-btn": "#D9C179",
            },
            fontFamily: {
                merriweather: ["Merriweather", "serif"]
            },
            spacing: {
                112: "28rem",
                128: "32rem",
                144: "36rem",
                160: "40rem",
            },
        },
    },
    plugins: [],
}  