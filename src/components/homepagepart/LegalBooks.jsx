import React, { useEffect } from "react";
import ComponentHeader from "../home/component/header/ComponentHeader";
import { Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/features/booksSlice";
import BookCard from "../books/BookCard";

const LegalBooks = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // List of titles to show
  const selectedTitles = [
    "Bhartiya Nagrik Suraksha Sanhita, 2023 (Act No. 46 of 2023)",
    "Bhartiya Nyay Sanhita, 2023 (Act No. 45 of 2023)",
    "Kanun Bhartiya - India Court",
  ];

  // Filter books by title
  const filteredBooks = books.filter((book) =>
    selectedTitles.includes(book.title)
  );

  const sortedBooks = filteredBooks.sort(
    (a, b) => selectedTitles.indexOf(a.title) - selectedTitles.indexOf(b.title)
  );

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  if (error)
    return (
      <Text textAlign="center" fontSize="2xl" color="red.500">
        {error}
      </Text>
    );
  if (sortedBooks.length === 0)
    return (
      <Text textAlign="center" fontSize="2xl">
        No books available
      </Text>
    );

  return (
    <>
      <div className="bg-[#F267271A] min-h-screen p-2">
        <Container maxW="container.xl" py={2}>
          <div>
            <ComponentHeader
              headtitle={"Reference"}
              title={"Explore legal materials for education "}
              description={"Sidestep the lawyers with do-it-yourself books"}
              to="/books"
            />

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
              {sortedBooks.map((book) => (
                <BookCard key={book._id} {...book} />
              ))}
            </SimpleGrid>
          </div>

          <div className="mt-16 flex justify-end">
            <div className="flex items-center text-right relative">
              {/* Left Diamond */}
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90 absolute right-8"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90 absolute right-12"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>

              {/* Line */}
              <div className="h-[2px] bg-[#C08729] w-20"></div>

              {/* Right Diamond */}
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LegalBooks;
