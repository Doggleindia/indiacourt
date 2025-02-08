import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../../../header/Header";
import Serachbutton from "../../../header/Serachbutton";
import LAWYER from "../../../../assets/blog/LAWYER.png";

import law_queen from "../../../../assets/home/law_queen.png";
import Recomendedblog from "../../../articles/Recomendedblog";
import BrowseMore from "../../../articles/BrowseMore";
import CommonFooter from "../../../CommonFooter";
const BlogDetails = () => {
  return (
    <>
      <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description="Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida "
          />

          <Serachbutton bordercolor="#C08729" />
          <Image
            src={LAWYER}
            alt="lawyer image"
            margin={"auto"}
            width={"100%"}
            py={4}
          />
          <Box mx={"auto"}>
            <HStack
              spacing={8}
              align={"center"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack flex="1" align={"start"} spacing={4}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  23 cases have been successfully
                </Text>
                <Text color={"#3A3A38"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentesque urna libero velit porta. Velit
                  pellentesque hac gravida pellentesque est semper. Duis lectus
                  gravida ultricies eleifend in pharetra faucibus orci sem.
                  Proin ac a cursus praesent. Malesuada risus amet nunc posuere
                  rhoncus accumsan congue id dolor. Convallis maecenas sed in
                  pellentesque. Diam tristique semper mauris dolor amet. Dolor
                  elit nunc et purus quam amet laoreet eu risus.Cum mattis
                  mollis odio gravida adipiscing. Facilisis scelerisque non
                  lacinia tincidunt faucibus tortor vel. Erat risus etiam quam
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                  mollis odio gravida adipiscing. Facilisis scelerisque non
                  lacinia tincidunt faucibus tortor vel. Erat risus etiam quam
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                </Text>
                <Text color={"#3A3A38"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentesque urna libero velit porta. Velit
                  pellentesque hac gravida pellentesque est semper. Duis lectus
                  gravida ultricies eleifend in pharetra faucibus orci sem.
                  Proin ac a cursus praesent. Malesuada risus amet nunc posuere
                  rhoncus accumsan congue id dolor. Convallis maecenas sed in
                  pellentesque. Diam tristique semper mauris dolor amet. Dolor
                  elit nunc et purus quam amet laoreet eu risus.Cum mattis
                  mollis odio gravida adipiscing. Facilisis scelerisque non
                  lacinia tincidunt faucibus tortor vel. Erat risus etiam quam
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                </Text>
                <Text color={"#3A3A38"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentesque urna libero velit porta. Velit
                  pellentesque hac gravida pellentesque est semper. Duis lectus
                  gravida ultricies eleifend in pharetra faucibus orci sem.
                  Proin ac a cursus praesent. Malesuada risus amet nunc posuere
                  rhoncus accumsan congue id dolor. Convallis maecenas sed in
                  pellentesque. Diam tristique semper mauris dolor amet. Dolor
                  elit nunc et purus quam amet laoreet eu risus.Cum mattis
                  mollis odio gravida adipiscing. Facilisis scelerisque non
                  lacinia tincidunt faucibus tortor vel. Erat risus etiam quam
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                </Text>
                <Text color={"#3A3A38"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentesque urna libero velit porta. Velit
                  pellentesque hac gravida pellentesque est semper. Duis lectus
                  gravida ultricies eleifend in pharetra faucibus orci sem.
                  Proin ac a cursus praesent. Malesuada risus amet nunc posuere
                  rhoncus accumsan congue id dolor. Convallis maecenas sed in
                  pellentesque. Diam tristique semper mauris dolor amet. Dolor
                  elit nunc et purus quam amet laoreet eu risus.Cum mattis
                  mollis odio gravida adipiscing. Facilisis scelerisque non
                  lacinia tincidunt faucibus tortor vel. Erat risus etiam quam
                  pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                </Text>
              </VStack>
              <Box flex="1" width="100%" minH="400px">
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Recommendation Articles
                </Text>
                <Recomendedblog
                  title={"7 Cases Have Been Success"}
                  desc={
                    " Lorem ipsum dolor sit Lorem ipsum dolor sit  Lorem ipsum dolor sit"
                  }
                  imgurl={law_queen}
                />
                <Recomendedblog
                  title={"7 Cases Have Been Success"}
                  desc={
                    " Lorem ipsum dolor sit Lorem ipsum dolor sit  Lorem ipsum dolor sit"
                  }
                  imgurl={law_queen}
                />
                <Recomendedblog
                  title={"7 Cases Have Been Success"}
                  desc={
                    " Lorem ipsum dolor sit Lorem ipsum dolor sit  Lorem ipsum dolor sit"
                  }
                  imgurl={law_queen}
                />
              </Box>
            </HStack>
          </Box>
          <BrowseMore />
        </Container>
      </Box>

      <CommonFooter />
    </>
  );
};

export default BlogDetails;
