import { Box, Container, Image, Text, VStack, IconButton } from "@chakra-ui/react";
import { counterData } from "./data";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Counter = () => {
  return (
    <>
      <Box mt="-55px" position="relative">
        <Container maxW="container.xl">
          <Box position="relative">
            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={4}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 8 },
              }}
              navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
              loop
            >
              {counterData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Link to={item.to} className="pointer">
                  <Box
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  p={4}
  bg="white" /* Ensure a solid background for the shadow */
  borderRadius="lg"
  boxShadow="lg" /* Increase shadow visibility */
  textAlign="center"
  minW="120px"
>
  <VStack align="center" spacing={2}>
    {item.isImage ? (
      <Image 
        src={item.icon} 
        alt={item.title} 
        boxSize="40px" 
        bg="transparent" /* Ensures image does not override box styling */
      />
    ) : (
      <Text fontSize="4xl" color="#F26727">
        <item.icon />
      </Text>
    )}
    <Text fontSize="sm" fontWeight="medium">
      {item.title}
    </Text>
  </VStack>
</Box>

                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <IconButton
              aria-label="Previous"
              icon={<FaChevronLeft />}
              position="absolute"
              left="-50px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              className="prev-btn"
            />
            <IconButton
              aria-label="Next"
              icon={<FaChevronRight />}
              position="absolute"
              right="-50px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              className="next-btn"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Counter;
