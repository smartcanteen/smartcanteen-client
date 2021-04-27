import { createMuiTheme } from "@material-ui/core/styles"

const customPallete = {
    primary:{
        main: "#3F51B5", // Primary
        dark: '#303F9F', // Dark-Primary
        contrastText: "#fff",
    },
    background: {
        default: "#FFF",
    },
}
const customTheme = createMuiTheme({
    palette:customPallete,

  });
  
  export default customTheme;