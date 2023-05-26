"use client";

import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  Toolbar,
  styled,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.spacing(3),
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.light,

    "&:active": {
      textDecoration: "underline",
      color: theme.palette.primary.light,
    },
  },
}));

function Header() {
  return (
    <>
      <AppBar position="static">
        {/* <Toolbar > */}
        <Container sx={{ display: "flex" }}>
          <Box sx={{ padding: "8px" }}>
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Picture of the logo"
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: "flex" }}>
            <List sx={{ display: "flex", alignItems: "center" }}>
              <ListItem sx={{ marginRight: "10px" }}>
                <StyledLink href="/">Home</StyledLink>
              </ListItem>
              <ListItem sx={{ marginRight: "10px" }}>
                <StyledLink href="/dashboard">Dashboard</StyledLink>
              </ListItem>{" "}
              <ListItem sx={{ marginRight: "10px" }}>
                <StyledLink href="/contact">Contact</StyledLink>
              </ListItem>
              <ListItem disablePadding>
                <StyledLink href="/post">Posts</StyledLink>
              </ListItem>
            </List>
          </Box>
        </Container>
        {/* </Toolbar> */}
      </AppBar>
    </>
  );
}

export default Header;
