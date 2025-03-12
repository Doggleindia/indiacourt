import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TrackInput from "../../judgements/components/TrackInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestLokSabhaBills, fetchLatestRajyaSabhaBills } from "../../../redux/features/billsSlice";
import BookImage from "../../../assets/legalTopics/family_law_in_india.png";
import LatestJudgements from "../../judgements/components/LatestJudgements";
import JudgementBlock from "../../judgements/components/JudgementBlock";
import JudgementDetails from "../../judgements/components/JudgementDetails";

const tempJudgements = [
  {
    title:
      "LOK MAL @ LOKU VS. THE STATE OF UTTAR PRADESH - Crl.A. No. 325/2011 - Diary Number 15553 / 2010",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=155532010&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 19:14:19",
  },
  {
    title:
      "GYANENDRA SINGH @ RAJA SINGH VS. THE STATE OF UTTAR PRADESH - Crl.A. No. 1257/2025 - Diary Number 36334 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=363342024&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 18:27:37",
  },
  {
    title:
      "STATE OF RAJASTHAN VS. INDRAJ SINGH AND ETC - Crl.A. No. 1242-1243/2025 - Diary Number 35874 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=358742024&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 18:27:18",
  },
  {
    title:
      "MADAN LAL VS. STATE OF RAJASTHAN - Crl.A. No. 1247/2025 - Diary Number 18552 / 2022",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=185522022&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 17:30:11",
  },
  {
    title:
      "YUVRAJ LAXMILAL KANTHER VS. THE STATE OF MAHARASHTRA - Crl.A. No. 2356/2024 - Diary Number 40463 / 2017",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=404632017&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 17:13:34",
  },
  {
    title:
      "DELHI DEV. AUTHORITY VS. S.G.G. TOWERS (P) LTD. - C.A. No. 1972/2011 - Diary Number 14228 / 2010",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=142282010&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 17:13:00",
  },
  {
    title:
      "AYYAVU VS. PRABHA - C.A. No. 3747-3748/2025 - Diary Number 18050 / 2022",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=180502022&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 17:06:38",
  },
  {
    title:
      "THE STATE OF ASSAM VS. ARABINDA RABHA - C.A. No. 2350/2025 - Diary Number 8559 / 2022",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=85592022&type=j&order_date=2025-03-07&from=latest_judgements_order",
    date: "07-Mar-2025",
    uploadedOn: "07-03-2025 15:12:11",
  },
  {
    title:
      "RABINDRANATH PANIGRAHI VS. SURENDRA SAHU - C.A. No. 3719/2025 - Diary Number 29981 / 2022",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=299812022&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 19:10:18",
  },
  {
    title:
      "VIJAY BAHADUR VS. SUNIL KUMAR - C.A. No. 14311/2024 - Diary Number 7791 / 2023",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=77912023&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 18:00:47",
  },
  {
    title:
      "JAMIN VS. STATE OF UTTAR PRADESH - Crl.A. No. 1184/2025 - Diary Number 19275 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=192752024&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 16:58:11",
  },
  {
    title:
      "PERIYAMMAL (DEAD THR. LRS.) VS. V. RAJAMANI AND ANR. ETC - C.A. No. 3640-3642/2025 - Diary Number 12765 / 2020",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=127652020&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 16:39:52",
  },
  {
    title:
      "M/S SHRI SENDHURAGRO AND OIL INDUSTRIES VS. KOTAK MAHINDRA BANK LTD. - T.P.(Crl.) No. 608/2024 - Diary Number 28709 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=287092024&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 16:04:25",
  },
  {
    title:
      "JOYI KITTY JOSEPH VS. UNION OF INDIA - Crl.A. No. 1180/2025 - Diary Number 54131 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=541312024&type=j&order_date=2025-03-06&from=latest_judgements_order",
    date: "06-Mar-2025",
    uploadedOn: "06-03-2025 15:56:27",
  },
  {
    title:
      "U.P. POWER CORPORATION LTD. VS. SATYA RAM - C.A. No. 3612/2025 - Diary Number 22771 / 2023",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=227712023&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "07-03-2025 17:14:58",
  },
  {
    title:
      "TANAJI SHAMRAO KALE VS. THE STATE OF MAHARASHTRA - Crl.A. No. 1145/2011 - Diary Number 6990 / 2011",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=69902011&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "06-03-2025 15:39:52",
  },
  {
    title:
      "LAVANYA C. VS. VITTAL GURUDAS PAI SINCE DECEASED BY LRS SMT. V. AMRITHKALA PAI - C.A. No. 13999/2024 - Diary Number 14322 / 2021",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=143222021&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "05-03-2025 18:29:47",
  },
  {
    title:
      "SURESH @ HANUMANT VS. STATE (GOVT. OF NCT DELHI) - Crl.A. No. 2685/2023 - Diary Number 33695 / 2023",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=336952023&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "05-03-2025 18:08:18",
  },
  {
    title:
      "MORTUZA HUSSAIN CHOUDHURY VS. THE STATE OF NAGALAND - Crl.A. No. 4872-4873/2024 - Diary Number 41438 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=414382024&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "05-03-2025 17:14:43",
  },
  {
    title:
      "PATEL BABUBHAI MANOHARDAS  VS. THE STATE OF GUJARAT - Crl.A. No. 1388/2014 - Diary Number 4230 / 2014",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=42302014&type=j&order_date=2025-03-05&from=latest_judgements_order",
    date: "05-Mar-2025",
    uploadedOn: "05-03-2025 15:27:38",
  },
  {
    title:
      "SPORTS AUTHORITY OF INDIA VS. DR. KULBIR SINGH RANA - C.A. No. 2289-2291/2025 - Diary Number 56463 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=564632024&type=j&order_date=2025-03-04&from=latest_judgements_order",
    date: "04-Mar-2025",
    uploadedOn: "04-03-2025 18:45:45",
  },
  {
    title:
      "SURESH VS. STATE REP.BY INSPECTOR OF POLICE - Crl.A. No. 540/2013 - Diary Number 6122 / 2013",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=61222013&type=j&order_date=2025-03-04&from=latest_judgements_order",
    date: "04-Mar-2025",
    uploadedOn: "04-03-2025 18:37:23",
  },
  {
    title:
      "M.S. NAGABHUSHAN VS. D.S.NAGARAJA - Crl.A. No. 1076-1083/2025 - Diary Number 34346 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=343462024&type=j&order_date=2025-03-04&from=latest_judgements_order",
    date: "04-Mar-2025",
    uploadedOn: "04-03-2025 17:43:41",
  },
  {
    title:
      "K.S. MEHTA VS. M/S MORGAN SECURITIES AND CREDITS PVT. LTD. - Crl.A. No. 1105/2025 - Diary Number 10048 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=100482024&type=j&order_date=2025-03-04&from=latest_judgements_order",
    date: "04-Mar-2025",
    uploadedOn: "04-03-2025 17:36:47",
  },
  {
    title:
      "SARANGA ANILKUMAR AGGARWAL VS. BHAVESH DHIRAJLAL SHETH - C.A. No. 4048/2024 - Diary Number 10447 / 2024",
    href: "https://www.sci.gov.in/view-pdf/?diary_no=104472024&type=j&order_date=2025-03-04&from=latest_judgements_order",
    date: "04-Mar-2025",
    uploadedOn: "04-03-2025 17:26:14",
  },
];

export default function TabContent({tabName}) {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { RS, LS } = useSelector((state) => state.bills);

  useEffect(() => {
    dispatch(tabName === 'Rajya Sabha' ? fetchLatestRajyaSabhaBills() : fetchLatestLokSabhaBills());
  }, [dispatch, tabName]);

  const {bills, loading, error} = tabName === 'Rajya Sabha' ? RS : LS;

  return (
    <Box border="1px solid #BF987466" pl={9} pr={10} py={5}>
      <TrackInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Flex mt={8} w="full" gap={5} justify="space-between">
        <Box className="hidden md:flex flex-col" gap={6}>
          <Image src={BookImage} w="197px" />
        </Box>

        <Box>
          <Flex gap={6} justify="space-between">
            <JudgementDetails
              error={error}
              loading={loading}
              judgements={tempJudgements}
            />

            <Box className="hidden md:block">
              <LatestJudgements
                error={error}
                loading={loading}
                judgements={bills}
                tabName="Rajya Sabha"
              />
            </Box>
          </Flex>

          <VStack mt={4} align={"flex-start"} width={"full"} gap={6}>
            <JudgementBlock
              error={error}
              loading={loading}
              judgements={tempJudgements}
              searchQuery={searchQuery}
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
