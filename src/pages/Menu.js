import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import { Menulist } from "../data/data";
const Menu = () => {
  console.log({ Menulist });
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          m: 10,
          ml: 15,
        }}
      >
        {Menulist.map((Menu) => (
          <Card
            sx={{
              minWidth: 220,
              minHeight: 300,
              display: "flex",
              m: 2,
            }}
          >
            <CardActionArea
              sx={{
                maxHeight: 200,
                maxWidth: 200,
              }}
            >
              <CardMedia
                sx={{ maxHeight: 140 }}
                component={"img"}
                src={Menu.image}
                alt={Menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {Menu.name}
                </Typography>
                <Typography variant="body2">{Menu.description}</Typography>
                <Typography variant="h6">{Menu.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
