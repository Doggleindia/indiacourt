import { Box, Text, VStack, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBareActs } from "../../redux/features/bareActsSlice";
// import { fetchBareActs } from "../../redux/features/bareActsSlice";

const LegalActsList = () => {
  const dispatch = useDispatch();
  const { acts, loading, error } = useSelector((state) => state.bareActs);

  useEffect(() => {
    dispatch(fetchBareActs()); // Fetch acts when component mounts
  }, [dispatch]);

  if (loading) return <Spinner size="xl" mt={10} color="#BF9874" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box maxW="800px" mx="auto" mt={10} border="1px solid #BF9874">
      <VStack spacing={0} align="stretch">
        {acts.map((act, index) => (
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
            <Link to={`/acts/${encodeURIComponent(act.href)}`}>
              <Text flex="1" color="#BF9874" fontWeight="semibold" cursor="pointer">
                {act.title}
              </Text>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default LegalActsList;
