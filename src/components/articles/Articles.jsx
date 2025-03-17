import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../header/Header";
// import Serachbutton from "../header/Serachbutton";
import BlogCard from "../home/component/blog/BlogCard";
// import law_queen from "../../assets/home/law_queen.png";
import CommonFooter from "../CommonFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/features/articlesSlice";

const Articles = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles()); // ✅ Fetch articles on mount
  }, [dispatch]);
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
          />

          {/* <Serachbutton bordercolor="#C08729" /> */}

          <VStack pt={4}>
            <HStack justify="center" spacing={3}>
              <HStack>
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
                <Box height="2px" width="60px" bg="#C08729" />
              </HStack>
              <Text color="#BF9874" fontSize="md" textTransform="uppercase">
                Blogs
              </Text>
              <HStack>
                <Box height="2px" width="60px" bg="#C08729" />
                <Box
                  width="12px"
                  height="12px"
                  bg="#C08729"
                  transform="rotate(45deg)"
                />
              </HStack>
            </HStack>
            <Text className="text-4xl" fontWeight={"bold"}>
              Featured articles
            </Text>
          </VStack>
          {loading ? (
            <Spinner size="xl" mt={10} color="blue.500" />
          ) : error ? (
            <Text color="red.500" fontSize="xl" textAlign="center">{error}</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, xl: 2 }} spacing={8} my={4}>
              {articles.map((article,index) => (
                <BlogCard
                  key={article._id}
                  title={article.title}
                  desc={article.content.substring(0, 100) + "..."} // Shortened description
                  imgurl={article.image || "default-image.png"} // Placeholder image
                  to={`/blog/${article._id}`} // Navigate to article details
                  // top={index % 2 === 1 ? "100px" : "0px"}
                />
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Articles;
