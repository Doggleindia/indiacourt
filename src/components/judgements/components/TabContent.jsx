import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TrackInput from "./TrackInput";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";
import JudgementBlock from "./JudgementBlock";
import LatestJudgements from "./LatestJudgements";
import JudgementDetails from "./JudgementDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupremeCourtJudgements } from "../../../redux/features/judgementsSlice";
import HC from "./HC"; // move your HC object to a separate file if large

export default function TabContent({ tabName }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hcState, setHcState] = useState("Delhi"); // controlled state
  const dispatch = useDispatch();
  const [selectedYearRange, setSelectedYearRange] = useState(null); //
  const { SC } = useSelector((state) => state.judgements);

  useEffect(() => {
    if (tabName === 'Supreme Court') {
      dispatch(fetchSupremeCourtJudgements());
    }
  }, [dispatch, tabName]);
  const allHCJudgements = HC[hcState] || [];
   // 🧠 Filter judgements based on selected year range
   const filteredHCJudgements = (
    selectedYearRange
      ? allHCJudgements.filter((j) => {
          const judgementYear = new Date(j.date).getFullYear();
          return (
            judgementYear >= selectedYearRange.start &&
            judgementYear <= selectedYearRange.end
          );
        })
      : allHCJudgements
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

   const judgements = tabName === "High Court" ? filteredHCJudgements : SC.judgements || [];
  const loading = tabName === "High Court" ? false : SC.loading;
  const error = tabName === "High Court" ? null : SC.error;

  const yearRanges = [...Array(8).keys()].map((i) => {
    const start = 2025 - i * 1;
    return { start};
  });

  return (
    <Box border="1px solid #BF987466" pl={9} pr={10} py={5}>
      <TrackInput placeinput = "Search judgements" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {tabName === "High Court" && (
        <Box mt={6}>
          <Text fontWeight="bold" mb={2}>Select High Court State:</Text>
          <Flex wrap="wrap" gap={2}>
            {Object.keys(HC).map((state) => (
              <Button
                key={state}
                size="sm"
                variant={hcState === state ? "solid" : "outline"}
                colorScheme={hcState === state ? "yellow" : "gray"}
                onClick={() => setHcState(state)}
              >
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </Button>
              
            ))}
              <a
               className="flex items-center gap-2"
                size="sm"
                target="_blank" // Added target attribute
                rel="noopener noreferrer" 
                variant={"outline"}
                colorScheme={"gray"}
               href="https://indiankanoon.org/browse/"
              >
               more
              </a>
          </Flex>
        </Box>
      )}

      <Flex mt={8} w="full" gap={5} justify="space-between">
        <Box className="hidden md:flex flex-col" gap={6}>
        {/* <Box border="1px solid #C08729" px={4} py={5} w="full">
            {yearRanges.map((range, index) => (
              <Text
                key={index}
                onClick={() => setSelectedYearRange(range)}
                className={`cursor-pointer text-sm font-normal text-[#07070B] border-b-[1px] border-b-[#F0E5D4] leading-6 w-max mx-auto ${
                  selectedYearRange?.start === range.start ? "font-bold text-[#C08729]" : ""
                }`}
              >
                {range.start}
              </Text>
            ))}
          </Box> */}

          <Image src={BookImage} w="197px" />
        </Box>

        <Box>
          <Flex gap={6} justify="space-between">
            <JudgementDetails error={error} loading={loading} judgements={judgements} />
            <Box className="hidden md:block">
              <LatestJudgements error={error} loading={loading} judgements={judgements} tabName={tabName} />
            </Box>
          </Flex>

          <VStack mt={4} align="flex-start" width="full" gap={6}>
            <JudgementBlock
              error={error}
              loading={loading}
              judgements={judgements}
              searchQuery={searchQuery}
              tabName={tabName}
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
