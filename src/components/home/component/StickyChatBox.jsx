import React from "react";
import { Box, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StickyChatBox = ({ isChatOpen, handleToggleChat }) => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <Box position="fixed" bottom="20px" right="15px" zIndex="1000">
      {/* Chat Box */}
      {isChatOpen && (
        <Box
          bg="white"
          w={{ base: "95%", sm: "80%", md: "320px" }} // Responsive width
          maxW="360px"
          h="auto"
          borderRadius="lg"
          boxShadow="xl"
          p={4}
          position="fixed"
          bottom={{ base: "80px", md: "150px" }} // Adjusted for small screens
          right="15px"
          display="flex"
          flexDirection="column"
        >
          {/* Header */}
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="bold" color="#1B1E21">
              Hi there! 👋
            </Text>
            <BiX
              size={24}
              color="#1B1E21"
              cursor="pointer"
              onClick={handleToggleChat}
            />
          </HStack>

          {/* Chat Content */}
          <VStack spacing={3} align="start" mt={3}>
            <Text fontSize="sm" color="#1B1E21">
              Need legal help with AI? I'm here to guide you. Say HI to begin!
            </Text>
            <Button
              color="white"
              bg="#056B38"
              size="sm"
              width="100%"
              _hover={{ bg: "#034D29" }}
              onClick={() => navigate("/chat")}
            >
              Chat with AI
            </Button>
          </VStack>
        </Box>
      )}

      {/* Floating Chat Icon Button */}
      <Box
        position="fixed"
        bottom={{ base: "20px", sm: "80px" }} // Changes bottom on max-sm screens
        right="15px"
        bg="#056B38"
        borderRadius="full"
        padding="14px"
        boxShadow="lg"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: "#034D29" }}
        onClick={handleToggleChat}
      >
        <FaCommentDots size={28} color="white" />
      </Box>
    </Box>
  );
};

export default StickyChatBox;
