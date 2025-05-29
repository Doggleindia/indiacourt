import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BookCard from "../books/BookCard";
import JudgeHammer from "../../assets/legalTopics/judge_hammer.png";
import LegalBook from "../../assets/legalTopics/family_law_in_india.png";

const LegalTopicDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MAIN_BACKEND}/legal-topics/${id}`
        );
        setTopic(response.data.topic); // Set fetched topic data
      } catch (err) {
        setError("Failed to fetch topic data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id]);

  if (loading) return <Spinner size="xl" mt={20} color="blue.500" />;
  if (error)
    return (
      <Text textAlign="center" fontSize="2xl" color="red.500">
        {error}
      </Text>
    );
  if (!topic)
    return (
      <Text textAlign="center" fontSize="2xl">
        No topic found.
      </Text>
    );
  console.log(topic, "checkdata");
  return (
    <Box>
      <Container maxW="8xl" pb={10}>
        <Box>
          <Flex
            gap={2}
            as="button"
            align="center"
            _hover={{ color: "#C08729" }}
            onClick={() => navigate(-1)}
            mt={10}
            ml={{ base: 0, md: -8 }}
          >
            <FaArrowLeftLong />
            <Text className="text-xl font-bold">BACK</Text>
          </Flex>
        </Box>

        <HStack
          mt={12}
          alignItems="start"
          justify="center"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Box w={{ base: "100%", md: "80%" }}>
            <HStack
              align="start"
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
              mx={12}
            >
              <Box minW={{ base: "300px", md: "250px" }}>
                <BookCard image={JudgeHammer} />
              </Box>
              <VStack
                align={{ base: "center", md: "start" }}
                textAlign={{ base: "center", md: "left" }}
                gap={5}
              >
                <Box>
                  <Text fontSize="lg" color="#07070B">
                    Legal topic
                  </Text>
                  <Text fontSize="5xl" fontWeight="bold" color="#07070B">
                    {topic.title}
                  </Text>
                </Box>

                <Text fontSize="sm" color="#3A3A38">
                  {topic.description}
                </Text>
              </VStack>
            </HStack>
          </Box>

          <VStack
            gap={5}
            align="start"
            justify="center"
            maxW={{ base: "100%", lg: "20%" }}
          >
            <Text className="text-2xl text-[#3F4242] mx-auto">Quotes</Text>
            <Box border="1px solid black" px={3} py={3} w="full">
              <Text fontSize="xl" color="#C08729">
                {topic.quotes}
              </Text>
            </Box>

            <Image src={LegalBook} alignSelf="center" />
          </VStack>
        </HStack>

        <Box maxW="100%" mx="auto" mt={10} border="1px solid #C08729">
          <VStack spacing={0} align="stretch">
            {topic.laws.map(({ _id, title, documentUrl }) => (
              <Box
                key={_id}
                display="flex"
                alignItems="center"
                _hover={{ bg: "#FFF9F1" }}
                cursor="pointer"
                borderBottom="1px solid #C08729"
              >
                <Box
                  width="50px"
                  textAlign="center"
                  fontWeight="bold"
                  color="#C08729"
                >
                  {_id.slice(-3)}
                </Box>

                <Flex
                  flex="1"
                  px={4}
                  borderLeft="1px solid #C08729"
                  py={3}
                  justify="space-between"
                  fontWeight="bold"
                  color="#C08729"
                  flexWrap="wrap"
                  gap={2}
                  align="center"
                >
                  <Text>{title}</Text>

                  <Button
                    variant="solid"
                    bg="#056B38"
                    color="white"
                    display="flex"
                    gap={1}
                    _hover={{ bg: "#056000" }}
                    as="a"
                    href={documentUrl}
                    download
                  >
                    <Text>Download</Text>
                    <IoMdDownload />
                  </Button>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalTopicDetails;
