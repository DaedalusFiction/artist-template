import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/images/logo.png";
import { Slide, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import lightTheme from "../styles/themes/lightTheme";
import { useState } from "react";
import { navigateToTop } from "../utility/navigateToTop";

const pages = ["about", "clothing", "artwork"];
const artistName = "SHANDON BLACK";

const activeStyle = {
    color: lightTheme.palette.custom.light,
};
const inactiveStyle = {
    color: lightTheme.palette.custom.lightMuted,
};

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    return (
        <Slide
            direction="down"
            in={trigger}
            sx={{ position: "fixed", top: "0", zIndex: "10" }}
        >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link href="/">
                            <Box
                                onClick={() => {
                                    navigateToTop();
                                }}
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    mr: 1,
                                }}
                            >
                                <Typography sx={{ textTransform: "uppercase" }}>
                                    <Link href="/">{artistName}</Link>
                                </Typography>
                                {/* <img
                                    src={logo}
                                    className="logo"
                                    alt="nautilus shell"
                                /> */}
                            </Box>
                        </Link>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem
                                        onClick={() => {
                                            navigateToTop();
                                            handleCloseNavMenu();
                                        }}
                                        key={page}
                                    >
                                        <Typography textAlign="center">
                                            <Link href={`/${page}`}>
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h3"
                            noWrap
                            onClick={() => {
                                navigateToTop();
                            }}
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                fontSize: "1.75rem",
                                flexGrow: 1,
                                fontWeight: 700,
                                color: lightTheme.palette.custom.light,
                            }}
                        >
                            <Link href="/" style={{ color: "inherit" }}>
                                {artistName}
                            </Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Typography
                                    key={page}
                                    onClick={() => {
                                        navigateToTop();
                                    }}
                                    //separate styling because can't get NavLink working with hover
                                    sx={{
                                        textTransform: "uppercase",
                                        margin: "0 1em",
                                        "&:hover": {
                                            color: lightTheme.palette.custom
                                                .light,
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    <Link
                                        href={`/${page}`}
                                        style={({ isActive }) =>
                                            isActive
                                                ? activeStyle
                                                : inactiveStyle
                                        }
                                    >
                                        {page}
                                    </Link>
                                </Typography>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Header;
