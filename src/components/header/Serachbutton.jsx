import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Serachbutton = ({
  bordercolor,
  placeholder = "Enter your number",
  label = "Subscribe Now",
  onButtonPress = () => {}
}) => {
  const [text, setText] = useState('')

  return (
    <>
      <HStack display={"flex"} justifyContent={"center"} gap={"0"} flexDirection={{base:'column', sm:'row'}}>
        <Input
          value={text}
          onChange={({target}) => {setText(target.value)}}
          name="phone"
          placeholder={placeholder}
          border={`2px solid ${bordercolor}`}
          _focus={{ boxShadow: "none", borderBottom: "2px solid #000000" }}
          rounded="0"
        />
        <Button
          backgroundColor={"#056B38"}
          color={"#ffff"}
          rounded={"0"}
          borderLeft={"1px solid #056B38"}
          border="2px solid #056B38"
          _hover={{ color: "#000000" }}
          onClick={() => onButtonPress(text)}
          mt={{base:4, md:0}}
        >
          {label}
        </Button>
      </HStack>
    </>
  );
};

export default Serachbutton;
