import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import LawyerImage from "../../assets/judgements/lawyer.png";
import RecentJudgements from "./components/RecentJudgements";
import JudgementBlock from "../judgements/components/JudgementBlock";

export default function JudgementDetails() {
  return (
    <Container maxW="5xl" pb={12}>
      <Box>
        <Flex gap={2} as="button" align="center" _hover={{ color: "#C08729" }}>
          <FaArrowLeftLong />
          <Text className=" text-xl font-bold">
            BACK{" ( "}
            <Text as="span" textDecorationLine="underline">
              Supreme Court
            </Text>
            {" )"}{" "}
          </Text>
        </Flex>
      </Box>

      <Image
        src={LawyerImage}
        alt="lawyer image"
        margin={"auto"}
        width={"100%"}
        py={4}
      />

      <Box mx={"auto"}>
        <HStack
          spacing={8}
          align="flex-start"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack flex="1" align={"start"} spacing={4}>
            <Text className="text-3xl font-bold">
              NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents
              Welfare Association
            </Text>
            <Text color={"#1B1E21"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
              pellentesque urna libero velit porta. Velit pellentesque hac
              gravida pellentesque est semper. Duis lectus gravida ultricies
              eleifend in pharetra faucibus orci sem. Proin ac a cursus
              praesent. Malesuada risus amet nunc posuere rhoncus accumsan
              congue id dolor. Convallis maecenas sed in pellentesque. Diam
              tristique semper mauris dolor amet. Dolor elit nunc et purus quam
              amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing.
              Facilisis scelerisque non lacinia tincidunt faucibus tortor vel.
              Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar
              adipiscing pretium. mollis odio gravida adipiscing. Facilisis
              scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus
              etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing
              pretium. pretium ornare. Semper orci arcu pulvinar adipiscing
              pretium.
            </Text>
            <Text color={"#1B1E21"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
              pellentesque urna libero velit porta. Velit pellentesque hac
              gravida pellentesque est semper. Duis lectus gravida ultricies
              eleifend in pharetra faucibus orci sem. Proin ac a cursus
              praesent. Malesuada risus amet nunc posuere rhoncus accumsan
              congue id dolor. Convallis maecenas sed in pellentesque. Diam
              tristique semper mauris dolor amet. Dolor elit nunc et purus quam
              amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing.
              Facilisis scelerisque non lacinia tincidunt faucibus tortor vel.
              Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar
              adipiscing pretium.
            </Text>
            <Text color={"#1B1E21"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
              pellentesque urna libero velit porta. Velit pellentesque hac
              gravida pellentesque est semper. Duis lectus gravida ultricies
              eleifend in pharetra faucibus orci sem. Proin ac a cursus
              praesent. Malesuada risus amet nunc posuere rhoncus accumsan
              congue id dolor. Convallis maecenas sed in pellentesque. Diam
              tristique semper mauris dolor amet. Dolor elit nunc et purus quam
              amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing.
              Facilisis scelerisque non lacinia tincidunt faucibus tortor vel.
              Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar
              adipiscing pretium.
            </Text>
            <Text color={"#1B1E21"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
              pellentesque urna libero velit porta. Velit pellentesque hac
              gravida pellentesque est semper. Duis lectus gravida ultricies
              eleifend in pharetra faucibus orci sem. Proin ac a cursus
              praesent. Malesuada risus amet nunc posuere rhoncus accumsan
              congue id dolor. Convallis maecenas sed in pellentesque. Diam
              tristique semper mauris dolor amet. Dolor elit nunc et purus quam
              amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing.
              Facilisis scelerisque non lacinia tincidunt faucibus tortor vel.
              Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar
              adipiscing pretium.
            </Text>
          </VStack>

          <RecentJudgements />
        </HStack>
      </Box>

      <Box>
        <Flex mt={12} gap={7} alignItems="center">
          <Text className=" text-5xl">Browse more </Text>
          <div className="flex items-center relative">
            <div className="h-[.2vw] bg-[#C08729]  w-20"></div>
            <div
              className="w-3 h-3 bg-[#C08729] transform rotate-90 absolute right-[-4px]"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
          </div>
        </Flex>

        <VStack mt={10} gap={5} w="full">
          <JudgementBlock />
          <JudgementBlock />
          <JudgementBlock />
          <JudgementBlock />
        </VStack>
      </Box>
    </Container>
  );
}
