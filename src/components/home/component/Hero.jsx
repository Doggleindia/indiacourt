import StickyChatBox from "./StickyChatBox";
import { Box, Container, Heading, HStack, Input, Text, VStack, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLegalTopics } from "../../../redux/features/legalTopicsSlice";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const handleToggleChat = () => setIsChatOpen(!isChatOpen);

  const dispatch = useDispatch();
  const { topics } = useSelector((state) => state.legalTopics);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    dispatch(fetchLegalTopics()); // Fetch topics from backend
  }, [dispatch]);

  return (
    <>
      <Box
        position="relative"
        overflow="hidden"
        bgImage={`url(https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1740159684742_SUPREME%20COURT%20HOME%20PAGE.png)`}
        bgSize="cover"
        bgPosition="top"
        height="container.sm"
        display="flex"
        alignItems="center"
        top={28}
      >
        <Container maxW="container.xl" position="relative" zIndex="1">
          <Stack spacing={8} justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <VStack spacing={4} align={{ base: "center", md: "start" }} maxW="lg">
              <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium" color="#07070B">
                Empowering You with Legal Knowledge
              </Heading>

              <VStack align={{ base: "center", md: "start" }} width="100%">
                <Text fontSize="sm" fontWeight="medium" my={2}>
                  What do you want to learn today?
                </Text>
                <Box bg="white" p={4} borderRadius="md" boxShadow="lg" width={{ base: "100%", md: "350px" }}>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    I want to
                  </Text>
                  <HStack>
                    <Input
                      border="1px solid #F0E5D4"
                      placeholder="I want to learn about legal topics..."
                      flex="1"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                  </HStack>

                  {/* Search Suggestions (Smaller Box) */}
                  {showSuggestions && (
                    <Box
                      mt={2}
                      borderRadius="md"
                      boxShadow="md"
                      bg="white"
                      maxH="150px" // Smaller height
                      overflowY="auto"
                      p={2} // Less padding
                    >
                      {topics.length > 0 ? (
                        topics.map((topic) => (
                          <Link to={`/legal-topic/${topic._id}`} key={topic._id}>
                            <Text
                              p={1} // Reduce padding
                              fontSize="sm" // Reduce font size
                              _hover={{ bg: "gray.200" }}
                              cursor="pointer"
                              onClick={() => setShowSuggestions(false)}
                            >
                              {topic.title}
                            </Text>
                          </Link>
                        ))
                      ) : (
                        <Text fontSize="sm" p={1}>No topics found</Text>
                      )}
                    </Box>
                  )}
                </Box>
              </VStack>
            </VStack>
          </Stack>
        </Container>
      </Box>
      <StickyChatBox isChatOpen={isChatOpen} handleToggleChat={handleToggleChat} />
    </>
  );
};

export default Hero;
