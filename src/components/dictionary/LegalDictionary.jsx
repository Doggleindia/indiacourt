import { useState } from "react";
import { Box, Text, VStack, HStack, Divider, Button } from "@chakra-ui/react";
import { full_glosaryy } from "./full_glossary";
// const legalTerms = {
//   "a": [
//     {
//       "term": "a fortiori",
//       "definition": "(ah-for-she-ory) prep. Latin for 'with even stronger reason,' which applies to a situation in which if one thing is true then it can be inferred that a second thing is even more certainly true. Thus, if Anil is too young to serve as administrator, then his younger brother Amit certainly is too young."
//     },
//     {
//       "term": "a priori assumption",
//       "definition": "(ah-pree-ory) n. from Latin, an assumption that is true without further proof or need to prove it. It is assumed the sun will come up tomorrow. However, it has a negative side: an a priori assumption made without question on the basis that no analysis or study is necessary, can be mental laziness when the reality is not so certain."
//     }
//   ]
// };

const LegalDictionary = () => {
  const [selectedLetter, setSelectedLetter] = useState("a");

  return (
    <Box p={4} mx="auto">
      {/* Alphabetical Index */}
      <HStack justify="center" spacing={2} mb={6} wrap="wrap">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <Button
            key={letter}
            colorScheme={letter === selectedLetter ? "orange" : "gray"}
            variant={letter === selectedLetter ? "solid" : "outline"}
            onClick={() => setSelectedLetter(letter.toLowerCase())}
          >
            {letter}
          </Button>
        ))}
      </HStack>

      {/* Display Terms */}
      <VStack spacing={6} align="start">
        {full_glosaryy[selectedLetter]?.map((item, index) => (
          <Box key={index} w="100%">
            <Text fontSize="xl" fontWeight="bold">
              {item.term}
            </Text>
            <Text fontSize="sm" color="gray.700">
              {item.definition}
            </Text>
            {index !== full_glosaryy[selectedLetter].length - 1 && <Divider my={4} />}
          </Box>
        )) || <Text>No terms available for this letter.</Text>}
      </VStack>
    </Box>
  );
};

export default LegalDictionary;
