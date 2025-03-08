import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import React from "react";
import ComponentHeader from "./header/ComponentHeader";
import judgements from "../../../assets/home/judgements.png";
import BillsTab from "./bills/BillsTab";

const Bills = () => {
  return (
    <Box py={4}>
      <Container maxW="container.xl" py={2}>
        <ComponentHeader
          title="Highlights"
          headtitle="Bills"
          description="Stay updated with key highlights, including recent judgments, newly passed bills, and significant legal updates."
          to="/bills"
        />

        <Box mx="auto">
          <HStack
            spacing={8}
            align="flex-start"
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack flex="1" align="start" spacing={4}>
              <Box overflow="hidden" pb={2} w="100%">
                <Image
                  src={judgements}
                  alt="Judgements"
                  width="100%"
                  borderRadius="md"
                />

                <Text fontSize="sm" pt={2} color="#BF9874" fontWeight="bold">
                  Rajya Sabha Bill
                </Text>
                <Text fontSize="2xl" color="#07070B" fontWeight="bold">
                  NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA
                  Residents Welfare Association
                </Text>
                <Text fontSize="sm" color="#07070B">
                  The NOIDA Toll Bridge Company Limited (NTBCL), has preferred
                  the instant appeal questioning the judgement dated 26.10.2016
                  passed by the High Court of Judicature at Allahabad (High
                  Court). The issue before the High Court concerned a challenge
                  to the collection and levying of toll, as legitimised by the
                  provisions enumerated in the Agreement dated 12.11.1997.
                </Text>
              </Box>
            </VStack>

            <Box flex="1" width="100%">
              <Tabs variant="unstyled" defaultIndex={0}>
                <TabList
                  bg="#f6f6f6"
                  p={2}
                  borderRadius="md"
                  justifyContent="space-between"
                >
                  <Tab
                    _selected={{ bg: "#056B38", color: "#FFFFFF" }}
                    p={3}
                    px={{ base: 0, sm: 3 }}
                    borderRadius="md"
                    flex={1}
                    flexWrap="wrap"
                  >
                    Lok Sabha
                  </Tab>
                  <Tab
                    _selected={{ bg: "#056B38", color: "#FFFFFF" }}
                    p={3}
                    px={{ base: 0, sm: 3 }}
                    borderRadius="md"
                    flexWrap="wrap"
                    flex={1}
                  >
                    Rajya Sabha
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <BillsTab tabName="Lok Sabha" />
                  </TabPanel>

                  <TabPanel>
                    <BillsTab tabName="Rajya Sabha"/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Bills;
