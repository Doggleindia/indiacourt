import {
  Box,
  Text,
  VStack,
  Collapse,
  IconButton,
  Divider,
  UnorderedList,
  ListItem,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchResources, fetchResourceDetails, downloadResourceAsPDF } from "../../redux/features/resourcesSlice";

const LegalDocumentsAccordion = () => {
  const dispatch = useDispatch();
  const { resources, resourceDetails, loading, error } = useSelector((state) => state.resources);

  useEffect(() => {
    dispatch(fetchResources()); // ✅ Fetch resources on mount
  }, [dispatch]);

  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null); // Reset sub-accordion
  };

  const toggleSubOpen = (index, url) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
    if (!resourceDetails[url]) {
      dispatch(fetchResourceDetails(url)); // ✅ Fetch details if not already loaded
    }
  };

  return (
    <Box maxW="100%" mx="auto" mt={10} border="1px solid #C08729">
      {loading && <Spinner color="#C08729" />}
      {error && <Text color="red.500">{error}</Text>}

      {resources.map((resource, index) => (
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
            <Box flex="1" px={4} fontWeight="bold" color="#C08729">
              {resource.title}
            </Box>
            <IconButton
              icon={openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
              variant="ghost"
              colorScheme="yellow"
              aria-label="Expand section"
            />
          </Box>

          {/* Collapsible Sub-List */}
          <Collapse in={openIndex === index}>
            <Box px={6} py={3} bg="#FFF9F1">
              {resource.sub_resources.map((sub, i) => (
                <Box key={i} mb={3}>
                  <Text
                    fontWeight="bold"
                    color="#3A3A38"
                    cursor="pointer"
                    borderBottom="1px solid black"
                    onClick={() => toggleSubOpen(i, sub.href)}
                  >
                    {sub.title}
                  </Text>

                  {/* Sub-Details Collapse */}
                  <Collapse in={openSubIndex === i}>
                    <UnorderedList pl={5} mt={2}>
                      {resourceDetails[sub.href] ? (
                        resourceDetails[sub.href].map((detail, j) => (
                          <ListItem key={j} color="#3A3A38">
                            {detail}
                          </ListItem>
                        ))
                      ) : (
                        <Spinner color="#C08729" />
                      )}
                    </UnorderedList>

                    {/* Download PDF Button */}
                    {resourceDetails[sub.href] && (
                      <Button
                        mt={3}
                        colorScheme="yellow"
                        onClick={() => downloadResourceAsPDF(sub.title, resourceDetails[sub.href])}
                      >
                        Download as PDF
                      </Button>
                    )}
                  </Collapse>
                </Box>
              ))}
            </Box>
          </Collapse>

          {/* Divider */}
          {index < resources.length - 1 && <Divider borderColor="#C08729" />}
        </VStack>
      ))}
    </Box>
  );
};

export default LegalDocumentsAccordion;
