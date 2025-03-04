import { Box, Text, VStack, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBareActs } from "../../redux/features/bareActsSlice";
import Serachbutton from "../header/Serachbutton";
// import { fetchBareActs } from "../../redux/features/bareActsSlice";

const LegalActsList = () => {
  const dispatch = useDispatch();
  const {
    acts: totalActs,
    loading,
    error,
  } = useSelector((state) => state.bareActs);
  useEffect(() => {
    dispatch(fetchBareActs()); // Fetch acts when component mounts
  }, [dispatch]);

  const [acts, setActs] = useState(totalActs);
  useEffect(() => {
    setActs(totalActs);
  }, [totalActs]);

  if (loading) return <Spinner size="xl" mt={10} color="#BF9874" />;
  if (error) return <Text color="red.500">{error}</Text>;

  const onSearch = (searchText) => {
    const filtered_acts = totalActs.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );

    setActs(filtered_acts);
  };

  return (
    <>
      <Serachbutton
        bordercolor="#C08729"
        label="Search"
        placeholder="Search for an act..."
        onButtonPress={onSearch}
      />

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
                <Text
                  flex="1"
                  color="#BF9874"
                  fontWeight="semibold"
                  cursor="pointer"
                >
                  {act.title}
                </Text>
              </Link>
            </Box>
          ))}

          {acts.length === 0 && (
            <Box
              display="flex"
              borderBottom="1px solid #BF9874"
              bg="#F0F0F0"
              padding="8px"
            >
              <Text>No acts available</Text>
            </Box>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default LegalActsList;
