import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ComponentHeader from "./header/ComponentHeader";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLegalTopics } from "../../../redux/features/legalTopicsSlice";


import {
  FaBalanceScale,
  FaHandHoldingHeart,
  FaUsers,
  FaLeaf,
  FaLaptop,
  FaGavel,
} from "react-icons/fa";

const Highlights = () => {
  const dispatch = useDispatch();
  const { topics, loading, error } = useSelector((state) => state.legalTopics);

  useEffect(() => {
    dispatch(fetchLegalTopics());
  }, [dispatch]);

  // Fixed order and icons
  const orderedTopicsWithIcons = [
    { title: "Constitutional Law", icon: <FaBalanceScale size={30} color="#F26727" /> },
    { title: "Human Rights Law", icon: <FaHandHoldingHeart size={30} color="#F26727" /> },
    { title: "Family Law", icon: <FaUsers size={30} color="#F26727" /> },
    { title: "Environmental Law", icon: <FaLeaf size={30} color="#F26727" /> },
    { title: "Cyber Law", icon: <FaLaptop size={30} color="#F26727" /> },
    { title: "Criminal Law", icon: <FaGavel size={30} color="#F26727" /> },
    
  ];

  // Match icons with backend topics
  const sortedTopics = orderedTopicsWithIcons
    .map((item) => {
      const topic = topics.find((t) => t.title === item.title);
      if (topic) return { ...topic, icon: item.icon };
      return null;
    })
    .filter(Boolean);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box py={{base:4, md:8}}>
      <Container maxW="container.xl" py={2}>
        <ComponentHeader
          headtitle="Highlights"
          title="Explore Legal Topics"
          description="Whether you are facing a legal issue or want to learn about a specific legal subject, browsing our legal topics is the perfect starting point."
          to="/legal-topics"
        />

        <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={8}>
          {sortedTopics.slice(0, 6).map((topic, idx) => (
            <Box
              key={idx}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={4}
              bg="#FFF"
              borderRadius="lg"
              boxShadow="md"
            >
              <VStack align="start" spacing={3} ml={4}>
                {topic.icon}
                <Text fontSize="lg" fontWeight="bold">
                  {topic.title}
                </Text>
                <Text fontSize="sm" noOfLines={3}>
                  {topic.description}
                </Text>
                <Link to={`/legal-topic/${topic._id}`}>
                  <HStack
                    as="button"
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Highlights;
