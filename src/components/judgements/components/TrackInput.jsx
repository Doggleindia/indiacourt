import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

const TrackInput = ({ searchQuery, setSearchQuery,placeinput = "Enter your Bill number" }) => {
  return (
    <HStack display="flex" justifyContent="center" gap="0">
      <Input
        name="search"
        placeholder={placeinput }
        border="1px solid #C08729"
        borderRight="0px"
        _focus={{
          boxShadow: "none",
          border: "1px solid grey",
          borderRight: "0px",
        }}
        rounded="0"
        width={{ sm: "80%", md: "full" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        backgroundColor={"#056B38"}
        color={"#ffff"}
        rounded={"0"}
        borderLeft={"1px solid #056B38"}
        border="1px solid #056B38"
        _hover={{ color: "#000000" }}
        px={10}
      >
        Search
      </Button>
    </HStack>
  );
};

export default TrackInput;
