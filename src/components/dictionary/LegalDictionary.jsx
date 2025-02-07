import { Box, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const legalTerms = [
  {
    term: "a fortiori",
    pronunciation: "(ah-for-she-ory)",
    type: "prep.",
    definition:
      'Latin for "with even stronger reason," which applies to a situation in which if one thing is true then it can be inferred that a second thing is even more certainly true. Thus, if Anil is too young to serve as administrator, then his younger brother Amit certainly is too young.',
  },
  {
    term: "a priori assumption",
    pronunciation: "(ah-pree-ory)",
    type: "n.",
    definition:
      "from Latin, an assumption that is true without further proof or need to prove it. It is assumed the sun will come up tomorrow. However, it has a negative side: an a priori assumption made without question on the basis that no analysis or study is necessary, can be mental laziness when the reality is not so certain.",
  },
  {
    term: "a.k.a.",
    type: "prep.",
    definition:
      'abbreviation for "also known as" when someone uses different initials, a nickname, a maiden or married name. Example: Amit G. Das, a.k.a. A. G. Das, a.k.a. "Snuffy the Snod."',
  },
  {
    term: "ab initio",
    type: "prep.",
    definition: 'lawyer Latin for "from the start," as "it was legal ab initio."',
  },
  {
    term: "abandon",
    type: "v.",
    definition:
      "to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to come back.",
  },
];

const LegalDictionary = () => {
  return (
    <Box p={2}  mx="auto">
      {/* Alphabetical Index */}
      <HStack justify="center" spacing={{base:2, xl:8}} mb={6} wrap="wrap">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <Text key={letter} fontWeight="bold" color="#C08729" fontSize="lg">
            {letter}
          </Text>
        ))}
      </HStack>

      <VStack spacing={6} align="start">
        {legalTerms.map((item, index) => (
          <Box key={index} w="100%">
            <Text fontSize="xl" fontWeight="bold">
              {item.term} <Text as="span" fontSize="md" color="gray.500">{item.pronunciation}</Text>
            </Text>
            <Text fontSize="md" fontWeight="semibold" color="gray.600">
              {item.type}
            </Text>
            <Text fontSize="sm" color="gray.700">{item.definition}</Text>
            {index !== legalTerms.length - 1 && <Divider my={4} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default LegalDictionary;
