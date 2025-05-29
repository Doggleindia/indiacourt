import {
  Box,
  Container,
  Image,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
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
          <Box position="relative" zIndex={1}>
            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={20} // Increased space between cards
              slidesPerView={2}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 }, // More spacing for mobile
                480: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 25 },
                1280: { slidesPerView: 8, spaceBetween: 30 },
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
                      p={6} // Increased padding for better spacing
                      bg="white"
                      borderRadius="lg"
                       boxShadow="2xl" 
                      textAlign="center"
                      minW="140px" // Increased width for better spacing
                      gap={4}
                      zIndex={100}
                      // Ensures elements inside the box have proper spacing
                    >
                      <VStack align="center" spacing={3}>
                        {item.isImage ? (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            boxSize="45px" // Slightly increased size for better visibility
                          />
                        ) : (
                          <Text fontSize="4xl" color="#F26727">
                            <item.icon />
                          </Text>
                        )}
                        <Text fontSize="md" fontWeight="semibold">
                          {item.title}
                        </Text>
                      </VStack>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons (Responsive Fix) */}
            <IconButton
              aria-label="Previous"
              icon={<FaChevronLeft />}
              position="absolute"
              left={{ base: "5px", md: "-50px" }}
              top="45%"
              transform="translateY(-50%)"
              zIndex={10}
              className="prev-btn"
              boxSize={{ base: "30px", md: "40px" }}
            />
            <IconButton
              aria-label="Next"
              icon={<FaChevronRight />}
              position="absolute"
              right={{ base: "5px", md: "-50px" }}
              top="45%"
              transform="translateY(-50%)"
              zIndex={10}
              className="next-btn"
              boxSize={{ base: "30px", md: "40px" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Counter;
