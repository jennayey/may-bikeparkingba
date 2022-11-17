import React from "react";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import logo from "../logo-white.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function NavBar(props) {
  const NavBar = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: "20px 20px",
  }));

  const TopBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "30px",
    marginBottom: "15px",
  }));
  
  return (
    <NavBar>
      <TopBar>
        <img src={logo} alt="logo" />

        <div>
          <Typography
            variant="body"
            color="white"
            sx={{ marginRight: "15px", cursor: "pointer" }}
          >
            About
          </Typography>
          <Typography variant="body" color="white" sx={{ cursor: "pointer" }}>
            Contribute
          </Typography>
        </div>
      </TopBar>
      <Paper sx={{ display: "flex", alignItems: "center", padding: "2px 5px" }}>
        <SearchIcon sx={{ padding: "10px" }} />
        <InputBase
          sx={{ flexGrow: 2 }}
          placeholder="Search Bike Parking"
          value={props.query}
          onChange={props.handleQuery}
        />
      </Paper>
    </NavBar>
  );
}
