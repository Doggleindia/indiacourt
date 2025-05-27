import { Box, Container, HStack, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../../../header/Header";
// import Serachbutton from "../../../header/Serachbutton";
import LAWYER from "../../../../assets/blog/LAWYER.png";
import Recomendedblog from "../../../articles/Recomendedblog";
import BrowseMore from "../../../articles/BrowseMore";
import CommonFooter from "../../../CommonFooter";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById, fetchRecommendedArticles } from "../../../../redux/features/articlesSlice";
import Serachbutton from "../../../header/Serachbutton";
const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { article, recommendedArticles, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticleById(id)); // ✅ Fetch article details
    dispatch(fetchRecommendedArticles()); // ✅ Fetch recommended articles
  }, [dispatch, id]);
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="7xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description={article?.title}
          />

          <Serachbutton bordercolor="#C08729" placeholder="Find Article" label="Search" />
           {/* ✅ Loading & Error Handling */}
          {loading ? (
            <Spinner size="xl" mt={10} color="blue.500" />
          ) : error ? (
            <Text color="red.500" fontSize="xl" textAlign="center">
              {error}
            </Text>
          ) : article ? (
            <>
          <Image
            src={article?.image}
            alt="lawyer image"
            margin={"auto"}
            width={"100%"}
            py={4}
          />
          <Box mx={"auto"}>
            <HStack
              spacing={8}
              align={"center"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack flex="6" align={"start"} spacing={4}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  {article?.title}
                </Text>
                <Text color={"#3A3A38"} fontSize={"sm"}>
                 {article?.content}
                </Text>
              </VStack>
              <Box flex="4" width="100%" minH="400px">
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Recommendation Articles
                </Text>
                {recommendedArticles.length > 0 ? (
                      recommendedArticles.map((recArticle) => (
                <Recomendedblog
                key={recArticle._id}
                title={recArticle.title}
                desc={recArticle.content.substring(0, 100) + "..."}
                imgurl={recArticle.image || LAWYER} // Placeholder image
                to={`/blog/${recArticle._id}`} 
                />
              ))
            ) : (
              <Text>No recommended articles available.</Text>
            )}
              </Box>
            </HStack>
          </Box>
          <BrowseMore recommendedArticles={recommendedArticles} article = {article}/>
          </>
        ) : (
          <Text textAlign="center" fontSize="lg">
            Article not found.
          </Text>
        )}
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default BlogDetails;
