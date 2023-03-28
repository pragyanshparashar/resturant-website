import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          ml: 10,
          my: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "& p": { fontSize: "1.2rem" },
          "@media (max-width:600px)": { mr: 5 },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Fast food doesn’t have to be junk food, as this café proves. Do you
          fancy a really good hamburger made with the best ingredients, or
          old-fashioned fish and chips fried to perfection, all on the table in
          super-quick time? Speed and quality are important here, and the prices
          aren’t bad either.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": { width: "300px", ml: 5 },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact us ">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ bgcolor: "lightblue" }}>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1234567890(Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ bgcolor: "lightblue" }}>
                  <EmailIcon sx={{ color: "blue", pt: 1 }} />
                  help@myrestur.com(Email us)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ bgcolor: "lightblue" }}>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  324768890(Call us)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
