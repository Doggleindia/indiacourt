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

// FIXED HC Judgements As HC API Not working
const HC = {
  judgements: [
    {
      "title": "Himalaya Global Holdings Ltd & Anr. vs Rajasthan Aushdhalaya Private Limited ...",
      "date": "13 March, 2025",
      "id": "54510839"
    },
    {
      "title": "Tm 25 Holding Bv vs Akhtar Ali & Ors.",
      "date": "13 March, 2025",
      "id": "64906398"
    },
    {
      "title": "Naval Kishore Kapoor vs National Investigation Agency",
      "date": "12 March, 2025",
      "id": "65320202"
    },
    {
      "title": "Monu @ Sandeep vs Union Of India Through Its Secretary & ...",
      "date": "12 March, 2025",
      "id": "132405804"
    },
    {
      "title": "Mercedes-Benz Group Ag (Previously ... vs Minda Corporation Limited",
      "date": "12 March, 2025",
      "id": "133845374"
    },
    {
      "title": "Janki Newsprint Ltd vs Principal Commissioner Of Customs New ...",
      "date": "12 March, 2025",
      "id": "64027764"
    },
    {
      "title": "M/S Pc Jain Textile Pvt Ltd Through Its ... vs Sh. Shyam Sunder Suri And Anr",
      "date": "12 March, 2025",
      "id": "19861497"
    },
    {
      "title": "Sushil Kumar Alias Raju vs State",
      "date": "12 March, 2025",
      "id": "87831079"
    },
    {
      "title": "M/S B Braun Medical India Pvt Ltd vs Union Of India & Ors.",
      "date": "12 March, 2025",
      "id": "129760565"
    },
    {
      "title": "Shish Ram & Anr vs Govind Vashish",
      "date": "12 March, 2025",
      "id": "9719096"
    }
  ],
  loading: false,
  error: null,
}

export default function TabContent({ tabName }) {
  const [searchQuery, setSearchQuery] = useState("");
  // const arr = [...Array(8).keys()].map((i) => i);
  // const base = 1920;
  const dispatch = useDispatch();
  const { SC } = useSelector((state) => state.judgements);

  useEffect(() => {
    // Temporary Fetch only SC judgements..HC API not working
    tabName === 'Supreme Court' && dispatch(
      fetchSupremeCourtJudgements()
      // tabName === "High Court"
      //   ? fetchHighCourtJudgements()
      //   : fetchSupremeCourtJudgements()
    ); // ✅ Fetch data on mount
  }, [dispatch, tabName]);

  // Temporary use Fixed HC Judgements..HC API not working
  const {judgements, loading, error} = tabName === "High Court" ? HC : SC;

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
