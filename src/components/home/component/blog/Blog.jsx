import React from "react";
import ComponentHeader from "../header/ComponentHeader";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Image,
  SimpleGrid,
 
} from "@chakra-ui/react";
import law_queen from "../../../../assets/home/law_queen.png";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      className="items-center"
      justifyContent={"center"}
      py={4}
      backgroundColor={"#F267271A"}
    >
      <Container maxW="container.xl">
        <Box mx="auto">
          <ComponentHeader headtitle={"Blogs"} title={"Features articles"} />
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 2 }} spacing={8}>
            <BlogCard
            title={'7 Cases Have Been Success'}
            desc={" Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"}
            imgurl={law_queen}
            />
            <BlogCard
            top={'100px'}
            title={'7 Cases Have Been Success'}
            desc={" Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"}
            imgurl={law_queen}
            />
            <BlogCard
            title={'7 Cases Have Been Success'}
            desc={" Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"}
            imgurl={law_queen}
            />
            <BlogCard
            top={'100px'}
            title={'7 Cases Have Been Success'}
            desc={" Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"}
            imgurl={law_queen}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
