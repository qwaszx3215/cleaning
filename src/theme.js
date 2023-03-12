import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `montserrat`,
    body: `montserrat`,
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        teal: {
          bgColor: "#95B4E3",
          size: "md",
          color: "lightMode.white",
          fontWeight: "700",
          _hover: {
            bgColor: "red",
          },
          _focus: {
            bgColor: "#95B4E3",
          },
          _active: {
            bgColor: "#95B4E3",
          },
        },
        blue: {
          bgColor: "lightMode.blue",
          size: "md",
          color: "lightMode.white",
          fontWeight: "700",
          _hover: {
            bgColor: "lightMode.blue",
          },
          _focus: {
            bgColor: "lightMode.blue",
          },
          _active: {
            bgColor: "lightMode.blue",
          },
        },
      },
    },
  },
  colors: {
    primary: {
      main: "#95B4E3",
      50: "#95B4E3",
      100: "#95B4E3",
      200: "#95B4E3",
      300: "#95B4E3",
      400: "#95B4E3",
      500: "#95B4E3",
      600: "#95B4E3",
      700: "#95B4E3",
      800: "#95B4E3",
      900: "#95B4E3",
    },

    darkMode: {
      backgroundColor: "white",
    },
    lightMode: {
      backgroundColor: "white",
    },
  },
});
