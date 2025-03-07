import { Box, Container, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import CommonFooter from "../CommonFooter";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ActsDesc = () => {
  const location = useLocation();
  const { url, slug } = location.state || {};
  const [actDetails, setActDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug || !url) {
      // setError("Missing required data");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_MAIN_BACKEND}/api/bareacts/details?slug=${slug}&queryParams=Title=${encodeURIComponent(
          url
        )}`;

        const response = await axios.get(apiUrl);
        setActDetails(response.data);
      } catch (err) {
        // setError("Failed to fetch act details");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, url]);

  if (loading) return <Spinner size="xl" mt={10} color="blue.500" />;
  // if (error || !actDetails) return ;

  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description="Details of the selected Act."
          />

          {/* Render Act Title */}
          <Text color={"#C08729"} fontSize={"2xl"}>
            {actDetails?.details[0] || "Act Title Not Available"}
          </Text>

          {/* Render Act Details */}
          {actDetails ? actDetails?.details.slice(1).map((paragraph, index) => (
            <Text key={index} fontSize={"sm"} mt={2}>
              {paragraph}
            </Text>
          ))
          :<Text fontSize="xl" color="gray.500" className="m-auto">Data is not present</Text>}
          
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default ActsDesc;
