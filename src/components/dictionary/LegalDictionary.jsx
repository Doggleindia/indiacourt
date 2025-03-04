import { useEffect, useState } from "react";
import { Box, Text, VStack, HStack, Divider, Button } from "@chakra-ui/react";
import { full_glosaryy } from "./full_glossary";
import Serachbutton from "../header/Serachbutton";


const LegalDictionary = () => {
  const [selectedLetter, setSelectedLetter] = useState("a");

  const [glossary, setGlossary] = useState(full_glosaryy[selectedLetter]);

  useEffect(()=>{
    setGlossary(full_glosaryy[selectedLetter]);
  },[selectedLetter])

  const onSearch = (searchText) => {
    const filtered_glossary = full_glosaryy[selectedLetter].filter(({term}) => term.toLowerCase().includes(searchText.toLowerCase()));

    setGlossary(filtered_glossary);
  }

  return (
    <>
      <Serachbutton bordercolor="#C08729" label="Search" onButtonPress={onSearch} placeholder="Search for a word..."/>

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
          {glossary.map((item, index) => (
            <Box key={index} w="100%">
              <Text fontSize="xl" fontWeight="bold">
                {item.term}
              </Text>
              <Text fontSize="sm" color="gray.700">
                {item.definition}
              </Text>
              {index !== glossary.length - 1 && <Divider my={4} />}
            </Box>
          )) }
          {glossary.length === 0 && <Text>No terms available for this letter.</Text>}
        </VStack>
      </Box>
    </>
  );
};

export default LegalDictionary;
