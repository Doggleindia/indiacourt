import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import FamilyLawI from "../../assets/books/Family_Law_I.png";
import BookCard from "../books/BookCard";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axiosInstance from "../../config/axiosInstance";
import axios from "axios";

const books = [
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
  {
    image: FamilyLawI,
    version: "English Version",
    title: "Family Law I",
    description:
      "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
  },
];

export default function BookDetails() {
const {id} = useParams();
const navigate = useNavigate()
 const [books, setbooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

console.log(process.env.REACT_APP_MAIN_BACKEND,"env")


  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_MAIN_BACKEND}/api/books/${id}`);
        setbooks(response.data); // Set fetched topic data
      } catch (err) {
        setError("Failed to fetch topic data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id]);

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  if (error) return <Text textAlign="center" fontSize="2xl" color="red.500">{error}</Text>;
  if (!books) return <Text textAlign="center" fontSize="2xl">No topic found.</Text>;
console.log(books,"allDataBooks")

  return (
    <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}>
      <Container maxW="container.xl">
        <Box>
          <Flex
            gap={2}
            as="button"
            align="center"
            _hover={{ color: "#C08729" }}
            // onClick={navigate(-1)}
          >
            <FaArrowLeftLong />
            <Text className=" text-xl font-bold">BACK</Text>
          </Flex>
        </Box>

        <Box mt={6} maxW="container.lg">
          <HStack
            align="center"
            justify="space-between"
            gap={4}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box>
              <BookCard image={books.image} />
            </Box>
            <VStack align="start" maxW="xl" gap={5}>
              <Box>
                <Text className=" text-lg text-[#07070B]">{books.language}</Text>
                <Text className=" text-6xl text-[#07070B]">{books.title} I</Text>
              </Box>

              <HStack>
                {[1, 2, 3, 4, 5].map(() => (
                  <FaStar fill="#C08729" />
                ))}
                <Text className=" text-base text-black">{books.author}</Text>
              </HStack>

              <Text className="text-[#3A3A38] text-lg">
               {books?.description}
              </Text>

              <Button
                variant="solid"
                bg="#056B38"
                color="white"
                _hover={{ bg: "#056000" }}
              >
                <Link to={books?.bookDoc}>
                READ NOW
                </Link>
              </Button>
            </VStack>
          </HStack>
        </Box>

        <Box mt={8}>
          <Text className=" text-4xl font-bold">Featured Books </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={9}>
            {/* {books.map((book) => ( */}
              <BookCard  
              image={books.image}
              version={books.language}
              title={books.title}
              description={books.category}
              // _id={books._id}
              
              />
            {/* // ))} */}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
