import { Box, Typography } from "@mui/material";

import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },

          "& p": { textAlign: "justify", fontSize: "1rem" },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">WELCOME TO MY RESTURANT</Typography>
        <p>
          Food and restaurants Are you looking for somewhere special to go this
          weekend? Do you want to try something new? Check out one of these hot
          new restaurants. Last Days of the Raj A centrally located Indian
          restaurant, perfect for eating before or after the cinema or a show.
          In summer enjoy your meal in the beautiful garden. The most popular
          dishes are lamb and chicken cooked with mild, medium or hot spices.
          For brave customers there is extra hot! A Taste of Tuscany Whether
          you’d like a great value-for-money lunch or a relaxed evening meal in
          stylish surroundings, this is the place for you. The chefs have all
          been trained in Italy and they make both traditional and contemporary
          dishes. We recommend the pasta and seafood. Your Local Caff Remember
          when cafés served full English breakfasts – sausages, beans, fried
          bread, bacon and eggs – with a strong cup of tea? Well, this place
          still does and you can have your breakfast at any time you like during
          the day while you listen to your favourite tunes from the 1980s. The
          Lemon Tree This pretty restaurant serves healthy food that’s tasty
          too. Come in for a vegetarian snack at lunchtime or a great fruit
          smoothie or a cappuccino and a delicious piece of cake in the
          afternoon.
        </p>
        <br />
        <p>
          Food is bought from local producers whenever possible. Cheesy Bites A
          restaurant that only serves cheese, but hundreds of cheeses from many
          countries and in lots of different forms. They serve reasonably priced
          lunches but dinner can be expensive. Lovely food and a very elegant
          dining room, looking onto an amazing flower garden. Fast Best Fast
          food doesn’t have to be junk food, as this café proves. Do you fancy a
          really good hamburger made with the best ingredients, or old-fashioned
          fish and chips fried to perfection, all on the table in super-quick
          time? Speed and quality are important here, and the prices aren’t bad
          either. The Chocolate Box The owner of this small café used to cook
          all kinds of food, but then she realised she preferred desserts to
          anything else. If you want meat or fish, don’t come here. They only do
          desserts! Lots of different kinds of sweets. Chocolate lovers will be
          excited by the range of chocolate cakes. Musical Chairs Have you
          noticed how music improves the taste of your food? This new restaurant
          has different types of live music every night except Sundays, and
          excellent food to go with it. Great fish dishes, steak and pizza.
          Monday is classic rock night, so see you there!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
