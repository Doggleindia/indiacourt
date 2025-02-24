import { Box, Container, Text, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActDetails } from "../../redux/features/bareActsSlice";
import Header from "../header/Header";
import CommonFooter from "../CommonFooter";
import ParticularactAccordian from "./ParticularactAccordian";

const Particularacts = () => {
  const { id } = useParams(); // Extract act URL from route
  const dispatch = useDispatch();
  const { actDetails, loading, error } = useSelector((state) => state.bareActs);

  useEffect(() => {
    dispatch(fetchActDetails(id)); // Fetch act details on mount
  }, [dispatch, id]);

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Legal Acts"
            headtitle="Legal Sections"
            description="Explore the sections and chapters of various legal acts."
          />
          <Text color={"#C08729"} fontSize={"2xl"}>
            {actDetails[1]?.[1]?.title || "Act Details"}
          </Text>
          <ParticularactAccordian />
        </Container>
      </Box>
      <CommonFooter />
    </>
  );
};

export default Particularacts;
