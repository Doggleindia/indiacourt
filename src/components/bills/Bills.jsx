import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import TabContent from "./components/TabContent";

export default function Bills() {
  const tabStyles = {
    borderRadius: "sm",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    border: "1px solid #F0E5D480",
    _selected: { bg: "#056B38", color: "#FFFFFF" },
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Container maxW="container.xl" pb={12}>
      <Header
        title="Bills"
        headtitle="Points"
        description="Stay updated with key highlights, including recent judgments, newly passed bills, and significant legal updates."
      />

      <Box>
        <Tabs variant="unstyled" defaultIndex={0}>
          <TabList w="full" justifyContent="space-between">
            <Tab {...tabStyles}>Lok Sabha</Tab>
            <Tab {...tabStyles}>Rajya Sabha</Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0}>
              <TabContent tabName='Lok Sabha' />
            </TabPanel>
            <TabPanel px={0}>
              <TabContent tabName='Rajya Sabha'/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
