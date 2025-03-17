import { Box, Button, HStack, Text, VStack, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchHighCourtJudgements,
  fetchSupremeCourtJudgements,
} from "../../../../redux/features/judgementsSlice";

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

const Judgementstab = ({ tabName }) => {
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

  const HC_PDF_URL = 'https://indiankanoon.org/doc/'

  return (
    <Box display={"flex"}>
      <VStack w="100%">
        <HStack w="100%" align="center">
          <Text fontSize="lg" fontWeight="bold" color="#C08729">
            {tabName} Judgements
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
            <Text
              as="a"
              fontSize="sm"
              color="black"
              fontWeight="md"
              href={judgement.href ? judgement.href : HC_PDF_URL + judgement.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {judgement.title}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Judgementstab;
