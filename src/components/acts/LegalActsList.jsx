import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const actsList = [
  "Advocates Welfare Fund Act, 2001",
  "African Development Bank Act, 1983",
  "African Development Fund Act, 1982",
  "Agricultural and Processed Food Products Export Cess Act, 1985",
  "Agricultural and Processed Food Products Export Development Authority Act, 1985",
  "Agricultural Produce (Grading and Marking) Act, 1937",
  "Air (Prevention and Control of Pollution) Act, 1981",
  "Air Corporations (Amendment) Act, 1962",
  "Air Corporations (Transfer of Undertakings and Repeal) Act, 1994",
  "Air Force Act, 1950",
  "Airports Authority of India Act, 1994",
  "Airports Economic Regulatory Authority of India Act, 2008",
  "Ajmer Tenancy and Land Records Act, 1950",
  "Aligarh Muslim University (Amendment) Act, 1972",
  "Aligarh Muslim University Act, 1920",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
  "All India Council for Technical Education Act, 1987",
];

const LegalActsList = () => {
  return (
    <Box maxW="800px" mx="auto" mt={10} border="1px solid #BF9874">
      <VStack spacing={0} align="stretch">
        {actsList.map((act, index) => (
          <Box
            key={index}
            display="flex"
            borderBottom="1px solid #BF9874"
            bg={index % 2 === 0 ? "#F0F0F0" : "white"} // Alternating row colors
            padding="8px"
          >
            <Text width="40px" textAlign="right" fontWeight="bold" pr="8px">
              {index + 1}.
            </Text>
            <Link to={'/acts/:id'}>
            <Text flex="1" color="#BF9874" fontWeight="semibold" cursor="pointer">
              {act}
            </Text>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default LegalActsList;
