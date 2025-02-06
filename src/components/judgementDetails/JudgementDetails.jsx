import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
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

      <Box mt={8} maxW="5xl">
        <Image src={LawyerImage} />

        <Flex mt={10} gap={10}>
          <VStack gap={10}>
            <Text className=" text-3xl text-[#07070B]">
              NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents
              Welfare Association
            </Text>
            <Text className="text-[#1B1E21] text-lg">
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
              adipiscing pretium. Erat facilisis dis arcu senectus sit mi
              fermentum eu aliquam. Felis neque posuere pharetra porttitor
              lacinia proin pretium. Et et pharetra tincidunt vel egestas risus
              sed mollis adipiscing. Lobortis risus mauris vitae pellentesque
              lobortis sapien. Mi convallis leo nisl pharetra quam arcu blandit.
              Metus nisl volutpat ut sed sit sit est. At molestie eu dictum
              ipsum pretium magna. Sed eget pretium lacus et fermentum nunc.
              Odio neque turpis tortor a pharetra a faucibus quis. A morbi
              sociis diam egestas varius id vitae suscipit. Cursus mauris
              hendrerit pellentesque erat gravida vel.Augue tristique quis
              fringilla. Erat pellentesque elementum consequat quis volutpat
              diam praesent molestie. Molestie scelerisque eleifend eu amet quam
              vitae fusce aliquam ornare. Accumsan est ut at tristique arcu.
              Semper lectus vulputate volutpat consectetur gravida ac gravida.
              Sem placerat pellentesque turpis tellus etiam porttitor sed.
              Scelerisque condimentum volutpat tempus lobortis. Accumsan dui
              felis turpis elementum. Leo nibh magnis sociis diam purus dui.
              Amet nulla urna curabitur consequat augue risus faucibus cursus.
              Egestas eros rutrum etiam mauris. Facilisis cras elementum diam
              bibendum.
            </Text>
          </VStack>

          <Box flex={1}>
            <RecentJudgements />
          </Box>
        </Flex>
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
