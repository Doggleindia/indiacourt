import { Box, Container, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/features/booksSlice";

// const books = [
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
//   {
//     image: FamilyLawI,
//     version: "English Version",
//     title: "Family Law I",
//     description:
//       "Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et",
//   },
// ];
export default function Books() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  if (error) return <Text textAlign="center" fontSize="2xl" color="red.500">{error}</Text>;
  if (books.length === 0) return <Text textAlign="center" fontSize="2xl">No books available</Text>;

  return (
    <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}>
      <Container maxW="container.xl">
        <Header
          title="Books & Documents"
          description="Sidestep the lawyers with do-it-yourself books"
          headtitle="Books"
        />
        <Serachbutton bordercolor="#C08729" label="Search" placeholder="" />

        <HStack mt={8} align="start">
          <Box className="border px-3 py-3">
            <Text className="text-[#07070B] text-xl mb-6">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
            <Text className="text-[#C08729] text-lg">Categories</Text>
          </Box>

          <Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
              {books.map((book) => (
                <BookCard {...book} />
              ))}
            </SimpleGrid>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
