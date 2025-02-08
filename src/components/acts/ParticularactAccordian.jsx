import {
  Box,
  Text,
  VStack,
  Collapse,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const legalDocuments = [
  {
    id: "I",
    title: "Personal Legal Documents",
    categories: [
      {
        category: "Wills & Estate Planning",
      },
      {
        category: "Family Law",
      },
      {
        category: "Health & Medical",
      },
    ],
  },
  {
    id: "II",
    title: "Business & Commercial Documents",
    categories: [
      {
        category: "Contracts",
      },
      {
        category: "Intellectual Property",
      },
      {
        category: "Business Transactions",
      },
    ],
  },
  {
    id: "III",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
      },
      {
        category: "Social Media & Online Use",
      },
    ],
  },
  {
    id: "IV",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
      },
      {
        category: "Social Media & Online Use",
      },
    ],
  },
  {
    id: "V",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
      },
      {
        category: "Social Media & Online Use",
      },
    ],
  },
  {
    id: "III",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
      },
      {
        category: "Social Media & Online Use",
      },
    ],
  },
];

const ParticularactAccordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box maxW="100%" mx="auto" my={4} border="1px solid #C08729">
      {legalDocuments.map((section, index) => (
        <VStack key={index} spacing={0} align="stretch">
          {/* Title Row */}
          <Box
            display="flex"
            alignItems="center"
            bg="white"
            _hover={{ bg: "#FFF9F1" }}
            cursor="pointer"
            onClick={() => toggleOpen(index)}
            p={3}
            borderBottom={openIndex === index ? "1px solid #C08729" : "none"}
          >
            {/* Left Numbering Box */}
            <Box
              width="50px"
              textAlign="center"
              fontWeight="bold"
              color="#C08729"
              borderRight="1px solid #C08729"
            >
              {section.id}
            </Box>

            {/* Title Text */}
            <Box flex="1" px={4} fontWeight="bold" color="#C08729">
              {section.title}
            </Box>

            {/* Expand/Collapse Icon */}
            <IconButton
              icon={
                openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />
              }
              variant="ghost"
              colorScheme="yellow"
              aria-label="Expand section"
            />
          </Box>

          {/* Collapsible List */}
          <Collapse in={openIndex === index}>
            <Box px={6} py={3} bg="#FFF9F1">
              {section.categories.map((category, i) => (
                <Box key={i} mb={3}>
                  <Link to={"/acts/:id/desc"}>
                    <Text
                      fontWeight="bold"
                      borderBottom={"1px solid black"}
                      width={{ base: "100%", md: "25%" }}
                      color="#3A3A38"
                    >
                      {category.category}
                    </Text>
                  </Link>
                </Box>
              ))}
            </Box>
          </Collapse>

          {/* Divider Line */}
          {index < legalDocuments.length - 1 && (
            <Divider borderColor="#C08729" />
          )}
        </VStack>
      ))}
    </Box>
  );
};

export default ParticularactAccordian;
