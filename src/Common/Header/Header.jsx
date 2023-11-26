import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { SettingIcon, AngleDownIcon } from "../Icons";
import { ThemeProvider } from "@mui/material/styles";
import StarzPlayLogoPng from "../../Assets/starzplay.png";
import { navLinks } from "../../Utils/Navbar";
import {
  SearchIconWrapperStyle,
  Themetypography,
  CustomAppBar,
  CustomSearchIcon,
  CustomIconButton,
  CustomSearchIconButton,
} from "../MuiStyles/Styles";
import "./Header.css";

const SearchIconWrapper = SearchIconWrapperStyle();
const Header = () => {
  const menuId = "primary-search-account-menu";
  const renderMobileMenu = (
    <div className="mobile-menu">
      <ul className="nav_list_mobile_menu">
        {navLinks.map(({ navTitle, id }) => (
          <li key={id}>
            <MenuItem>
              <ThemeProvider theme={Themetypography}>
                <Typography variant="overline">{navTitle}</Typography>
              </ThemeProvider>
            </MenuItem>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          <img
            className="starz_play_logo"
            src={StarzPlayLogoPng}
            alt="starzPlayLogo"
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ul className="nav_list">
              {navLinks.map(({ navTitle, id }) => (
                <li key={id}>
                  <ThemeProvider theme={Themetypography}>
                    <Typography variant="overline">{navTitle}</Typography>
                  </ThemeProvider>
                </li>
              ))}
            </ul>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <CustomSearchIconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <SearchIconWrapper>
                <CustomSearchIcon />
              </SearchIconWrapper>
            </CustomSearchIconButton>
            <CustomIconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <SettingIcon />
            </CustomIconButton>
            <CustomIconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AngleDownIcon />
            </CustomIconButton>
          </Box>
        </Toolbar>
      </CustomAppBar>
      {renderMobileMenu}
    </>
  );
};
export default React.memo(Header);
