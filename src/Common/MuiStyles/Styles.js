/////////navbar styling components
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { styled, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
let commonCss = {
  cursor: "pointer",
  NavbarIconFontSize: "1.6rem",
  CopyrightIconFontSize: "0.8rem",
};
export const CustomInputStyle = () =>
  styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
export const SearchIconWrapperStyle = () =>
  styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

export const CustomMenu = createTheme({
  typography: {
    overline: {
      "&:hover": {
        color: "#ffffff", // Change the color to your desired hover color
        borderBottom: "1px solid orange",
        borderBottomWidth: "1px",
      },
      fontSize: 9,
      fontWeight: 100,
      lineHeight: 4.66,
      margin: 16,
      cursor: commonCss.cursor,
      color: "var(--lightgrey)",
    },
  },
});
////typography style navbar

export const Themetypography = createTheme({
  typography: {
    overline: {
      "&:hover": {
        color: "#ffffff", // Change the color to your desired hover color
        borderBottom: "1px solid orange",
        borderBottomWidth: "1px",
      },
      fontSize: 9,
      fontWeight: 100,
      lineHeight: 4.66,
      margin: 16,
      cursor: commonCss.cursor,
      color: "var(--lightgrey)",
    },
  },
});

export const CustomAppBar = styled(AppBar)(() => ({
  background:
    "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 80%, rgb(63, 61, 61) 94.9%)",
}));
export const CustomSearchIcon = styled(SearchIcon)(() => ({
  fontSize: commonCss.NavbarIconFontSize,
  color: "var(--lightgrey)",
  border: "1px solid #404040",
  borderRadius: "50%",
  padding: "5px",
  background: "#404040",
}));
export const CustomCopyrightIcon = styled(CopyrightIcon)(() => ({
  fontSize: commonCss.CopyrightIconFontSize,
  color: "var(--lightgrey)",
  margin: "0.2rem",
}));

export const CustomSearchIconButton = styled(IconButton)({
  "&.MuiButtonBase-root": {
    marginRight: 25,
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
});

export const CustomIconButton = styled(IconButton)({
  "&.MuiButtonBase-root": {
    padding: 6,
    fontSize: "1rem",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
});

export const CustomBootstrapButton = () =>
  styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    padding: "0.4rem 3.5rem",
    margin: "2rem 0rem",
    lineHeight: 1.5,
    backgroundColor: "#FF7F50",
    fontFamily: ["italic"].join(","),
  });
export const customStyledMenu = () =>
  styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "&.MuiPaper-root": {
      "&.MuiMenuItem-root": {
        "&:focus": {
          outline: "none",
          border: "none",
        },
        "&:active": {
          backgroundColor: "transparent",
        },
      },
    },
  }));
export const swiperBreakPoints = (props) => {
  return {
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: props.title === "Hero Banner" ? 2 : 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: props.title === "Hero Banner" ? 3 : 9,
      spaceBetween: 5,
    },
  };
};
