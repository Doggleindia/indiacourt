import { Box, Button, HStack, Text, VStack, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupremeCourtJudgements } from "../../../../redux/features/judgementsSlice";

const Judgementstab = () => {
  const dispatch = useDispatch();
  const { judgements, loading, error } = useSelector((state) => state.judgements);

  useEffect(() => {
    dispatch(fetchSupremeCourtJudgements()); // ✅ Fetch data on mount
  }, [dispatch]);

  return (
    <Box display={"flex"}>
      <VStack w="100%">
        <HStack w="100%" align="center">
          <Text fontSize="lg" fontWeight="bold" color="#C08729">
            Supreme Court Judgements
          </Text>
          <Box flex="1" borderBottom="2px solid #C08729" />
        </HStack>

        {loading && <Spinner color="#C08729" size="lg" />}
        {error && <Text color="red.500">Error: {error}</Text>}

        {judgements.slice(0,6).map((judgement, index) => (
          <HStack
            key={index}
            w="100%"
            spacing={2}
            align="center"
            p={2}
            flexWrap={{base:'wrap', sm:'nowrap'}}
            borderBottom="1px solid #C08729"
          >
          <Box className=" max-w-full">
            <TbPlayerTrackNextFilled  />
          </Box>
            <Box className=" w-max">
            <Button
              backgroundColor={"#C08729"}
              variant="link"
              color="#fff"
              fontSize="sm"
              p={2}
              // as="a"
              // ✅ Open judgement link
              // target="_blank"
              // rel="noopener noreferrer"
            >
              {judgement.date}
            </Button>
            </Box>
            <Text  as="a" fontSize="sm" color="black" fontWeight="md"  href={judgement.href} target="_blank"
              rel="noopener noreferrer">
              {judgement.title}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Judgementstab;
