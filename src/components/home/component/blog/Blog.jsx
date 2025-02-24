import React, { useEffect } from "react";
import ComponentHeader from "../header/ComponentHeader";
import { Box, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import law_queen from "../../../../assets/home/law_queen.png";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../../../redux/features/articlesSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles()); // ✅ Fetch articles on mount
  }, [dispatch]);
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
          <ComponentHeader
            headtitle={"Blogs"}
            title={"Features articles"}
            to="/articles"
          />
           {loading ? (
            <Spinner size="xl" mt={10} color="blue.500" />
          ) : error ? (
            <Text color="red.500" fontSize="xl" textAlign="center">{error}</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, xl: 2 }} spacing={8}>
              {articles.map((article,index) => (
                <BlogCard
                  key={article._id}
                  title={article.title}
                  desc={article.content.substring(0, 100) + "..."} // Shortened description
                  imgurl={article.image || "default-image.png"} // Placeholder image
                  to={`/blog/${article._id}`} // Navigate to article details
                  top={index % 2 === 1 ? "100px" : "0px"}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
