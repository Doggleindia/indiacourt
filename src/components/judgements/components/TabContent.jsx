import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TrackInput from "./TrackInput";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";
import JudgementBlock from "./JudgementBlock";
import LatestJudgements from "./LatestJudgements";
import JudgementDetails from "./JudgementDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchHighCourtJudgements,
  fetchSupremeCourtJudgements,
} from "../../../redux/features/judgementsSlice";

export default function TabContent({ tabName }) {
  const [searchQuery, setSearchQuery] = useState("");
  // const arr = [...Array(8).keys()].map((i) => i);
  // const base = 1920;
  const dispatch = useDispatch();
  const { SC } = useSelector((state) => state.judgements);

  useEffect(() => {
    dispatch(
      // Temporary Fetch only SC judgements for both HC and SC..HC API not working
      fetchSupremeCourtJudgements()
      // tabName === "High Court"
      //   ? fetchHighCourtJudgements()
      //   : fetchSupremeCourtJudgements()
    ); // ✅ Fetch data on mount
  }, [dispatch, tabName]);

  // Temporary use only SC judgements for both HC and SC..HC API not working
  const {judgements, loading, error} = SC;
  // const {judgements, loading, error} = tabName === "High Court" ? HC : SC;

  return (
    <Box border="1px solid #BF987466" pl={9} pr={10} py={5}>
     <TrackInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Flex mt={8} w="full" gap={5} justify="space-between">
        <Box className="hidden md:flex flex-col" gap={6}>
          {/* <Box border="1px solid #C08729" px={4} py={5} w="full">
            {arr.map((val) => (
              <Text className=" text-sm font-normal text-[#07070B] border-b-[1px] border-b-[#F0E5D4] leading-6 w-max mx-auto">
                {base - val * 10} - {base - val * 10 + 9}
              </Text>
            ))}
          </Box> */}
          <Image src={BookImage} w="197px" />
        </Box>

        <Box>
          <Flex gap={6} justify="space-between">
            <JudgementDetails  error = {error} loading = {loading} judgements = {judgements} />

            <Box className="hidden md:block">
              <LatestJudgements  error = {error} loading = {loading} judgements = {judgements}/>
            </Box>
          </Flex>

          <VStack mt={4} align={'flex-start'} width={'full'} gap={6}>
          <JudgementBlock error={error} loading={loading} judgements={judgements} searchQuery={searchQuery} tabName={tabName} />
            
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
