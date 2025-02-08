import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import BookCard from "../books/BookCard";
import JudgeHammer from "../../assets/legalTopics/judge_hammer.png";
import LegalBook from "../../assets/legalTopics/family_law_in_india.png";
import { IoMdDownload } from "react-icons/io";

const topics = [
  {
    id: "I",
    title:
      "The Supreme Court (Enlargement of Criminal Appellate Jurisdiction) Act, 1970",
  },
  {
    id: "II",
    title: "The Bharatiya Nagarik Suraksha Sanhita, 2023",
  },
  {
    id: "III",
    title: "The Judges (Protection) Act, 1985",
  },
  {
    id: "IV",
    title: "The Muslim Women (Protection of Rights on Divorce) Act, 1986",
  },
  {
    id: "V",
    title: "The Prisons Act, 1894",
  },
  {
    id: "VI",
    title: "The Prisoners Act, 1900",
  },
];

export default function LegalTopicDetails() {
  return (
    <Box>
      <Container maxW="8xl" pb={10}>
        <Box>
          <Flex
            gap={2}
            as="button"
            align="center"
            _hover={{ color: "#C08729" }}
          >
            <FaArrowLeftLong />
            <Text className=" text-xl font-bold">BACK</Text>
          </Flex>
        </Box>

        <HStack mt={6} alignItems="start">
          <Box>
            <HStack
              align="start"
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box minW="250px">
                <BookCard image={JudgeHammer} />
              </Box>
              <VStack align="start" gap={5}>
                <Box>
                  <Text className=" text-lg text-[#07070B]">Legal topic</Text>
                  <Text className=" text-6xl text-[#07070B]">Criminal Law</Text>
                </Box>

                <Text className="text-[#3A3A38] text-lg">
                  Criminal law is the body of law that relates to crime. It
                  prescribes conduct perceived as threatening, harmful, or
                  otherwise endangering to the property, health, safety,
                  and welfare of people inclusive of one's self. Most criminal
                  law is established by statute, which is to say that the laws
                  are enacted by a legislature. Criminal law includes
                  the punishment and rehabilitation of people who violate such
                  laws. Criminal law varies according to jurisdiction, and
                  differs from civil law, where emphasis is more on dispute
                  resolution and victim compensation, rather than
                  on punishment or rehabilitation. Criminal procedure is a
                  formalized official activity that authenticates the fact of
                  commission of a crime and authorizes punitive or
                  rehabilitative treatment of the offender.
                </Text>
              </VStack>
            </HStack>
            <Box mt={6}>
              <Text className="text-base text-[#07070B]">
                Criminal law is the body of law that relates to crime. It
                prescribes conduct perceived as threatening, harmful, or
                otherwise endangering to the property, health, safety,
                and welfare of people inclusive of one's self. Most criminal law
                is established by statute, which is to say that the laws are
                enacted by a legislature. Criminal law includes
                the punishment and rehabilitation of people who violate such
                laws. Criminal law varies according to jurisdiction, and differs
                from civil law, where emphasis is more on dispute resolution and
                victim compensation, rather than
                on punishment or rehabilitation.
              </Text>
              <Text className="text-base text-[#07070B]">
                Criminal procedure is a formalized official activity that
                authenticates the fact of commission of a crime and authorizes
                punitive or rehabilitative treatment of the offender.Criminal
                law is the body of law that relates to crime. It prescribes
                conduct perceived as threatening, harmful, or otherwise
                endangering to the property, health, safety, and welfare of
                people inclusive of one's self. Most criminal law is established
                by statuteCriminal law is the body of law that relates to crime.
                It prescribes conduct perceived as threatening, harmful, or
                otherwise endangering to the property, health, safety,
                and welfare of people inclusive of one's self. Most criminal law
                is established by statute, which is to say that the laws are
                enacted by a legislature. Criminal law includes
                the punishment and rehabilitation of people who violate such
                laws. Criminal law varies
              </Text>
            </Box>
          </Box>

          <VStack gap={5} align="start">
            <Text className="text-2xl text-[#3F4242]">Quotes</Text>
            <Box className="border px-3 py-3">
              <Text className=" text-xl text-[#001025]">
                “I've always been tremendously interested in criminal law. It
                goes to a deep interest I have in prisons and the criminal
                element, and what we do as a society with it. I've always been
                touched by the idea of criminality.”
              </Text>
            </Box>

            <Image src={LegalBook} alignSelf="center" />
          </VStack>
        </HStack>

        <Box maxW="100%" mx="auto" mt={10} border="1px solid #C08729">
          <VStack spacing={0} align="stretch">
            {topics.map(({ id, title }) => (
              <Box
                display="flex"
                alignItems="center"
                _hover={{ bg: "#FFF9F1" }}
                cursor="pointer"
                borderBottom="1px solid #C08729"
              >
                <Box
                  width="50px"
                  textAlign="center"
                  fontWeight="bold"
                  color="#C08729"
                >
                  {id}
                </Box>

                <Flex
                  flex="1"
                  px={4}
                  borderLeft="1px solid #C08729"
                  py={3}
                  justify="space-between"
                  fontWeight="bold"
                  color="#C08729"
                  align="center"
                >
                  <Text>{title}</Text>

                  <Button
                    variant="solid"
                    bg="#056B38"
                    color="white"
                    display="flex"
                    gap={1}
                    _hover={{ bg: "#056000" }}
                  >
                    <Text>Download</Text>
                    <IoMdDownload />
                  </Button>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box mt={8}>
          <Text className=" text-4xl font-bold">Explore other topics</Text>

          <Flex flexWrap="wrap" gap={6} justify="space-around" mt={9}>
            {[1, 2, 3, 4, 5].map(() => (
              <Box maxW="250px">
                <BookCard
                  image={JudgeHammer}
                  title="Constitutional Law"
                  description="Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
