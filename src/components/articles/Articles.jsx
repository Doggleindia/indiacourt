import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import BlogCard from "../home/component/blog/BlogCard";
import law_queen from "../../assets/home/law_queen.png";
import Navbar from "../header/Navbar";
import CommonFooter from "../CommonFooter";

const Articles = () => {
  return (
    <>
      <Navbar />
      <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description="Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida "
          />

          <Serachbutton bordercolor="#C08729" />

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
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 2 }} py={4} spacing={4}>
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
            <BlogCard
              title={"7 Cases Have Been Success"}
              desc={
                " Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero  Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero"
              }
              imgurl={law_queen}
            />
          </SimpleGrid>
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Articles;
