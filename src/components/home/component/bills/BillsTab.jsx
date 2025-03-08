import { Box, HStack, Text, VStack, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestLokSabhaBills, fetchLatestRajyaSabhaBills } from "../../../../redux/features/billsSlice";

const BillsTab = ({tabName}) => {
  const dispatch = useDispatch();
  const {rajyaSabhaBills, lokSabhaBills, loading, error } = useSelector((state) => state.bills);

  useEffect(() => {
    dispatch(tabName === 'Rajya Sabha' ? fetchLatestRajyaSabhaBills() : fetchLatestLokSabhaBills());
  }, [dispatch, tabName]);

  const bills = tabName === 'Rajya Sabha' ? rajyaSabhaBills : lokSabhaBills;

  return (
    <Box display={"flex"}>
      <VStack w="100%">
        <HStack w="100%" align="center">
          <Text fontSize="lg" fontWeight="bold" color="#C08729">
            {tabName} Updates
          </Text>
          <Box flex="1" borderBottom="2px solid #C08729" />
        </HStack>

        {loading && <Spinner color="#C08729" size="lg" />}
        {error && <Text color="red.500">Error: {error}</Text>}

        {bills.slice(0, 6).map((bill, index) => (
          <HStack
            key={index}
            w="100%"
            spacing={2}
            align="center"
            p={2}
            flexWrap={{ base: "wrap", sm: "nowrap" }}
            borderBottom="1px solid #C08729"
          >
            <Box className=" max-w-full">
              <TbPlayerTrackNextFilled />
            </Box>
            <Text
              as="a"
              fontSize="sm"
              color="black"
              fontWeight="md"
              href={bill.pdfFileUrl || bill.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bill.title}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default BillsTab;
