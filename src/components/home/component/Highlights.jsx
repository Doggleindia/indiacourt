import {
  Box,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ComponentHeader from "./header/ComponentHeader";
// import { counterData } from "./data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLegalTopics } from "../../../redux/features/legalTopicsSlice";

const Highlights = () => {

  const dispatch = useDispatch();
  const { topics, loading, error } = useSelector((state) => state.legalTopics);

  useEffect(() => {
    dispatch(fetchLegalTopics());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <>
      <Box py={4}>
        <Container maxW="container.xl" py={2}>
          <ComponentHeader
            headtitle={"Highlights"}
            title={"Explore Legal Topics"}
            description={
              "Whether you are facing a legal issue or want to learn about a specific legal subject, browsing our legal topics is the perfect starting point."
            }
            to="/legal-topics"
          />
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={8}>
          {topics.length > 0 ? (
            topics.slice(0,6).map((topic, idx) => (
              <Box
                key={idx}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={4}
                bg={`#FFFF`}
                borderRadius="lg"
                boxShadow="md"
              >
                <VStack align="start" spacing={3} ml={4}>
                  <Image src={topic.icon} alt={topic.title} boxSize="50px" />
                  <Text fontSize="lg" fontWeight="bold">
                    {topic.title}
                  </Text>
                  <Text fontSize="sm" fontWeight="sm" noOfLines={3}>
                    {topic.description}
                  </Text>
                  <Link to={`/legal-topic/${topic._id}`}>
                    <HStack
                      as={"button"}
                      _hover={{ color: "#C08729" }}
                      cursor="pointer"
                    >
                      <Text fontSize="sm" fontWeight="semibold">
                        Read more
                      </Text>
                      <FaArrowRight />
                    </HStack>
                  </Link>
                </VStack>
              </Box>
            ))
          ) : (
            <Text>No legal topics available.</Text>
          )}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Highlights;
