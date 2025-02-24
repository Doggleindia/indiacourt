import {
  Box,
  Text,
  VStack,
  Collapse,
  IconButton,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActDetails } from "../../redux/features/bareActsSlice";

const ParticularactAccordian = () => {
  const { id } = useParams(); // Extract act ID from route
  const dispatch = useDispatch();
  const { actDetails, loading, error } = useSelector((state) => state.bareActs);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!actDetails || actDetails.length === 0) {
      dispatch(fetchActDetails(id));
    }
  }, [dispatch, id, actDetails]); // ✅ Depend only on `id` and existing data length

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box maxW="100%" mx="auto" my={4} border="1px solid #C08729">
      {actDetails.map((section, index) => (
        <VStack key={index} spacing={0} align="stretch">
          <Box
            display="flex"
            alignItems="center"
            bg="white"
            _hover={{ bg: "#FFF9F1" }}
            cursor="pointer"
            onClick={() => toggleOpen(index)}
            p={3}
          >
            <Box flex="1" px={4} fontWeight="bold" color="#C08729">
              {section[0]?.title || "Unknown Section"}
            </Box>
            <IconButton
              icon={openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
              variant="ghost"
              colorScheme="yellow"
              aria-label="Expand section"
            />
          </Box>

          <Collapse in={openIndex === index}>
            <Box px={6} py={3} bg="#FFF9F1">
              {section.slice(1).map((item, i) => (
                <Link key={i} to={item.href || "#"}>
                  <Text fontWeight="bold" color="#3A3A38">{item.title}</Text>
                </Link>
              ))}
            </Box>
          </Collapse>

          {index < actDetails.length - 1 && <Divider borderColor="#C08729" />}
        </VStack>
      ))}
    </Box>
  );
};

export default ParticularactAccordian;
