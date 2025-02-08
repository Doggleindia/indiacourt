import {
  Box,
  Text,
  VStack,
  Collapse,
  IconButton,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const legalDocuments = [
  {
    id: "I",
    title: "Personal Legal Documents",
    categories: [
      {
        category: "Wills & Estate Planning",
        subItems: [
          "Wills and Testamentary Documents",
          "Living Trusts",
          "Guardian Appointment for Minor Children",
          "Power of Attorney (General & Medical)",
          "Living Wills and Healthcare Directives",
        ],
      },
      {
        category: "Family Law",
        subItems: [
          "Divorce Agreements",
          "Child Custody",
          "Prenuptial Agreements",
          "Separation Agreements",
        ],
      },
      {
        category: "Health & Medical",
        subItems: [
          "Medical Power of Attorney",
          "Health Insurance Waiver",
          "Medical Release Form",
        ],
      },
    ],
  },
  {
    id: "II",
    title: "Business & Commercial Documents",
    categories: [
      {
        category: "Contracts",
        subItems: [
          "Business Contracts (General)",
          "Non-Disclosure Agreements (NDAs)",
          "Franchise Agreements",
          "Employment Contracts",
          "Freelance/Contractor Agreements",
        ],
      },
      {
        category: "Intellectual Property",
        subItems: [
          "Copyright Assignment Agreements",
          "Trademark License Agreements",
          "Non-Compete Agreements",
        ],
      },
      {
        category: "Business Transactions",
        subItems: [
          "Shareholder Agreements",
          "Partnership Agreements",
          "Loan Agreements",
          "Debt Repayment Agreements",
        ],
      },
    ],
  },
  {
    id: "III",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "IV",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "V",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "III",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
];

const LegalDocumentsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box maxW="100%" mx="auto" mt={10} border="1px solid #C08729">
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
                  <Text fontWeight="bold" color="#3A3A38">
                    {category.category}
                  </Text>
                  <UnorderedList pl={5}>
                    {category.subItems.map((item, j) => (
                      <ListItem key={j} color="#3A3A38">
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
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

export default LegalDocumentsAccordion;
