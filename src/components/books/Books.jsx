import { Box, Container, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  const { books:totalBooks, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const [books, setBooks] = useState(totalBooks);
  useEffect(()=>{
    setBooks(totalBooks);
  },[totalBooks])

  if (loading) return  <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}><Spinner size="xl" mt={10} color="blue.500" /></Box>;
  if (error) return <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}><Text textAlign="center" fontSize="2xl" color="red.500">{error}</Text></Box>;
  // if (books.length === 0) return <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}></Box>;

  const onSearch = (searchText) => {
    const filtered_books = totalBooks.filter(({title}) => title.toLowerCase().includes(searchText.toLowerCase()));
    
    setBooks(filtered_books);
  }


  return (
    <Box pb={10} pt={{ base: "5rem", xl: "8rem" }}>
      <Container maxW="container.xl">
        <Header
          title="Books & Documents"
          description="Sidestep the lawyers with do-it-yourself books"
          headtitle="Books"
        />
        <Serachbutton bordercolor="#C08729" label="Search" placeholder="Search for a book..." onButtonPress={onSearch}/>

      {books.length === 0 ? 
        <Text textAlign="center" fontSize="2xl">No books available</Text> :
          <HStack mt={8} align="start" flexWrap={{ base:'wrap', sm:'nowrap' }} justify='center'>
            <Box className="border px-3 py-3 text-center">
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
          </HStack>}
      </Container>
    </Box>
  );
}
