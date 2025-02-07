import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

const Serachbutton = ({
  bordercolor,
  placeholder = "Enter your number",
  label = "Subscribe Now",
}) => {
  return (
    <>
      <HStack display={"flex"} justifyContent={"center"} gap={"0"}>
        <Input
          name="phone"
          placeholder={placeholder}
          border={`2px solid ${bordercolor}`}
          _focus={{ boxShadow: "none", borderBottom: "2px solid #000000" }}
          rounded="0"
          //   px={2}

          width={{ sm: "80%", md: "full" }}
        />
        <Button
          backgroundColor={"#056B38"}
          color={"#ffff"}
          rounded={"0"}
          borderLeft={"1px solid #056B38"}
          border="2px solid #056B38"
          _hover={{ color: "#000000" }}
        >
          {label}
        </Button>
      </HStack>
    </>
  );
};

export default Serachbutton;
