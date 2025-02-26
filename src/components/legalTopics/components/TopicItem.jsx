import { Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function TopicItem({ title, description, icon,topic }) {
  console.log(topic,"getid")
  return (
    <Card
      py="25px"
      px="40px"
      boxShadow="4px 8px 8px rgba(218, 218, 218, 0.68)"
      gap={3}
    >
      <Image src={icon} w={10}/>
      <Text fontWeight="bold" fontSize="20px" color="#07070B">
        {title}
      </Text>
      <Text
        noOfLines={2}
        fontWeight="light"
        className="text-base"
        color="#3A3A38"
      >
        {description}
      </Text>

       <Link to={`/legal-topic/${topic._id}`}>
        <Flex gap={2} as="button" align="center" _hover={{ color: "#C08729" }}>
          <Text className=" text-[12px] font-bold">READ MORE</Text>
          <FaArrowRightLong />
        </Flex>
      </Link>
    </Card>
  );
}
