import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CheckIcon from '@mui/icons-material/Check';

const Container = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: "10px 0px"
}))

export default function LocationPerks(props) {
    
  return (
   <Container>
    <CheckIcon color="primary"/>
    <Typography variant="body" sx={{marginLeft: "5px"}}>Folding-bike friendly</Typography>

   </Container>
  );
}