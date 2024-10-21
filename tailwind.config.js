/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        'sh': '600px',
        'hoverWidth': '1370px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-70%)' }, // Сдвигаем на 50% для бесконечного цикла
        },
      },
      animation: {
        marquee: 'marquee 8s linear infinite', // Настраиваем скорость движения
      },
      boxShadow: {
        'card': '0px 4px 20px 5px rgba(63, 57, 207, 0.26)',  // Добавляем кастомную тень
      },
      backgroundImage: {
        "homeBannerImg": "url('/src/assets/Main/ultraVedaHomeBanner.png')",
        "grad": "linear-gradient(to bottom, #3f39cf, #201d69)",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      playfair: ["Playfair Display", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      mono: ["Montserrat"],
    },
    colors: {
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      black: "#1E1E1E",
      desc: "#646464",
      blue: "#202338",
      blueLight: "#2023381a",
      gray: "#BEBEBE",
      grayLight: "#828282",
      border: "rgba(0,0,0,.05)",
      white: "#ffffff",
      main: "#3F39CF",
      grayBlog: "#525151",
      borderColor: "#c5c5c5",
      footerColor: "#1c1a56",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
