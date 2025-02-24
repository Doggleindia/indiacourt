import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../home/component/blog/BlogCard";
const BrowseMore = ({ recommendedArticles,article }) => {
  return (
    <>
      <HStack justify="start" py={4} spacing={6}>
        <Text
          color="#07070B"
          fontWeight={"bold"}
          fontSize={{ base: "1rem", md: "3xl" }}
        >
          Browse more blogs
        </Text>
        <HStack>
          <Box height="2px" width="100px" bg="#C08729" />
          <Box
            width="12px"
            height="12px"
            bg="#C08729"
            transform="rotate(45deg)"
          />
        </HStack>
      </HStack>
      <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} py={4} spacing={4}>
        {recommendedArticles.length > 0 ? (
          recommendedArticles.map((recArticle) => (
            <BlogCard
              width={"350px"}
              key={recArticle._id}
              Direction="column"
              title={recArticle.title}
              desc={recArticle.content.substring(0, 100) + "..."}
              imgurl={recArticle.image } // Placeholder image
              to={`/blog/${recArticle._id}`}
            />
          ))
        ) : (
          <Text>No recommended articles available.</Text>
        )}
        {/* <BlogCard
          Direction="column"
          width={"350px"}
          title={"7 Cases Have Been Success"}
          desc={
            " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
          }
          imgurl={law_queen}
        />
        <BlogCard
          Direction="column"
          width={"350px"}
          title={"7 Cases Have Been Success"}
          desc={
            " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
          }
          imgurl={law_queen}
        /> */}
      </SimpleGrid>
    </>
  );
};

export default BrowseMore;
