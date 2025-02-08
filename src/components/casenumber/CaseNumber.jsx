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
import { LuFolder, LuUser } from "react-icons/lu";
import Inputform from "./Inputform";
import CommonFooter from "../CommonFooter";

const CaseNumber = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Court Case Status Checker"
            headtitle="Case Status"
            description="Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et  "
          />

          <Box>
            <Tabs variant="unstyled" defaultIndex={0}>
              {/* Tabs Header */}
              <TabList bg="#f6f6f6" p={2} borderRadius="md">
                <Tab
                  _selected={{ bg: "#056B38", color: "#FFFFFF" }}
                  p={3}
                  borderRadius="md"
                  flexWrap="wrap"
                >
                  <LuUser style={{ marginRight: 8 }} />
                  Supreme court
                </Tab>
                <Tab
                  _selected={{ bg: "#056B38", color: "#FFFFFF" }}
                  p={3}
                  borderRadius="md"
                  flexWrap="wrap"
                >
                  <LuFolder style={{ marginRight: 8 }} />
                  High court
                </Tab>
              </TabList>

              {/* Tabs Content */}
              <TabPanels>
                <TabPanel>
                  <Inputform />
                </TabPanel>
                <TabPanel>
                  <Inputform />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default CaseNumber;
