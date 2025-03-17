import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../header/Header";
import { LuFolder, LuUser } from "react-icons/lu";
import Inputform from "./Inputform";
import CommonFooter from "../CommonFooter";
import { useNavigate } from "react-router-dom";

const CaseNumber = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open("https://services.ecourts.gov.in/ecourtindia_v6/", "_blank");

    navigate(-1);
  }, [navigate]);

  return (
    true ? null :<> {/* //return null */}
      <Box pb={4} pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Court Case Status Checker"
            headtitle="Case Status"
            description="Track the status of your court case in real-time. Get updates on hearings, judgments, and case progress instantly."
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
