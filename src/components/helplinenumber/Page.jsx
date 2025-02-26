import { Box, Container, Select, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NumberCard from "./NumberCard";
import Header from "../header/Header";
import Serachbutton from "../header/Serachbutton";
import CommonFooter from "../CommonFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelpline } from "../../redux/features/helplineSlice";

const Page = () => {
  const dispatch = useDispatch();
  const { helpline, loading, error } = useSelector((state) => state.helpline);
  
  // ✅ State for filtering by selected state
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    dispatch(fetchHelpline()); // ✅ Fetch API data on mount
  }, [dispatch]);

  // ✅ Separate national helplines
  const nationalHelplines = helpline.filter((item) => item.state === "India");
  
  // ✅ Filter state-specific helplines (excluding national)
  const stateHelplines = selectedState
    ? helpline.filter((item) => item.state === selectedState)
    : [];

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

          {/* ✅ National Helplines (Always Visible) */}
          <Text fontSize="xl" fontWeight="bold" mt={5}>
            National Helpline Numbers
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 2, xl: 4 }} spacing={6} p={4}>
            {loading ? (
              <Spinner size="xl" mt={10} color="blue.500" />
            ) : error ? (
              <Text color="red.500" fontSize="xl" textAlign="center">{error}</Text>
            ) : (
              nationalHelplines.map((item, idx) => (
                <NumberCard key={item._id} idx={idx} title={item.title} number={item.number} />
              ))
            )}
          </SimpleGrid>

          {/* ✅ State Filter Dropdown */}
          <Select
            placeholder="Select State"
            width={{ base: "38%", xl: "14%" }}
            py={3}
            marginLeft={"auto"}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="Goa">Goa</option>
            <option value="Bihar">Bihar</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Daman">Daman</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option> 
            <option value="Manipur">Manipur</option> 
            <option value="Maharashtra">Maharashtra</option> 
            <option value="Meghalaya">Meghalaya</option> 
            <option value="Mizoram">Mizoram</option> 
            <option value="Nagaland">Nagaland</option> 
            <option value="Puducherry">Puducherry</option> 
            <option value="Sikkim">Sikkim</option> 
            <option value="Punjab">Punjab</option> 
            <option value="Tamil Nadu">Tamil Nadu</option> 
            <option value="Telangana">Telangana</option> 
            <option value="Tripura">Tripura</option> 
            <option value="West Bengal">West Bengal</option> 
            <option value="Uttarakhand">Uttarakhand</option> 
          </Select>

          
          <Text fontSize="xl" fontWeight="bold" mt={5}>
            {selectedState ? `${selectedState} Helpline Numbers` : "Select a State"}
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 2, xl: 4 }} spacing={6} p={4}>
            {stateHelplines.length > 0 ? (
              stateHelplines.map((item, idx) => (
                <NumberCard key={item._id} idx={idx} title={item.title} number={item.number} />
              ))
            ) : (
              <Text textAlign="center" fontSize="lg" color="gray.500">
                No helpline numbers available for this state.
              </Text>
            )}
          </SimpleGrid>
        </Container>
        <CommonFooter />
      </Box>
    </>
  );
};

export default Page;
