import { Box, Container, Select, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NumberCard from "./NumberCard";
import { helplineNumber } from "./data";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import CommonFooter from "../CommonFooter";

const Page = () => {
  return (
    <>
      <Box pt={{ base: "5rem", xl: "8rem" }}>
        <Container maxW="container.xl" pb={4}>
          <Header
            title="Helpline Numbers"
            headtitle="Helpline"
            description="Stay updated with key highlights, including recent judgments, newly passed bills, and significant legal updates."
          />
          <Serachbutton bordercolor="#000000" />
          <SimpleGrid
            columns={{ base: 2, sm: 2, xl: 4 }}
            spacing={{ base: 3, xl: 6 }}
            p={{ base: 2, xl: 4 }}
          >
            {helplineNumber.map((item, idx) => (
              <>
                <NumberCard idx={idx} title={item.title} number={item.Number} />
              </>
            ))}
          </SimpleGrid>
          <Select
            placeholder="Rajasthan"
            width={{ base: "38%", xl: "14%" }}
            py={3}
            marginLeft={"auto"}
          >
            <option value="Bihar">Option 1</option>
            <option value="MP">Option 2</option>
            <option value="UP">Option 3</option>
            <option value="Delhi">Option 3</option>
          </Select>
          <SimpleGrid
            columns={{ base: 2, sm: 2, xl: 4 }}
            spacing={{ base: 3, xl: 6 }}
            p={{ base: 2, xl: 4 }}
          >
            {helplineNumber.map((item, idx) => (
              <>
                <NumberCard idx={idx} title={item.title} number={item.Number} />
              </>
            ))}
          </SimpleGrid>
        </Container>
        <CommonFooter />
      </Box>
    </>
  );
};

export default Page;
