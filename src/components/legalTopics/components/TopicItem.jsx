import { Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// ICON IMPORTS
import {
  FaBalanceScale,
  FaHandHoldingHeart,
  FaUsers,
  FaLeaf,
  FaLaptop,
  FaGavel,
  FaBan,
  FaBuilding,
  FaGlobe,
  FaBriefcase,
  FaUniversity,
  FaBaby,
  FaShieldAlt,
  FaLightbulb,
  FaShip,
  FaMoneyBillAlt,
  FaIdBadge,
  FaIndustry,
} from "react-icons/fa";

// ICON MAP (you can expand this)
const iconMap = {
  "Constitutional Law": FaBalanceScale,
  "Human Rights Law": FaHandHoldingHeart,
  "Family Law": FaUsers,
  "Environmental Law": FaLeaf,
  "Cyber Law": FaLaptop,
  "Criminal Law": FaGavel,
  "Anticorruption Law": FaBan,
  "Real Estate Law": FaBuilding,
  "International Law": FaGlobe,
  "Corporate and Commercial Law": FaBriefcase,
  "Taxation Law": FaMoneyBillAlt,
  "Intellectual Property Law": FaLightbulb,
  "Admiralty and Maritime Law": FaShip,
  "Immigration and Citizenship Law": FaIdBadge,
  "Consumer Protection Law": FaShieldAlt,
  "Women and Child Protection Laws": FaBaby,
  "Tribunals and Dispute Resolution": FaUniversity,
  "Competition Law": FaIndustry,
};

export default function TopicItem({ title, description, topic }) {
  const IconComponent = iconMap[title] || FaBalanceScale; // fallback icon

  return (
    <Card
      py="25px"
      px="40px"
      boxShadow="4px 8px 8px rgba(218, 218, 218, 0.68)"
      gap={3}
    >
      <IconComponent size={30} color="#F26727" />
      <Text fontWeight="bold" fontSize="20px" color="#07070B">
        {title}
      </Text>
      <Text noOfLines={2} fontWeight="light" color="#3A3A38">
        {description}
      </Text>
      <Link to={`/legal-topic/${topic._id}`}>
        <Flex gap={2} as="button" align="center" _hover={{ color: "#C08729" }}>
          <Text fontSize="12px" fontWeight="bold">READ MORE</Text>
          <FaArrowRightLong />
        </Flex>
      </Link>
    </Card>
  );
}
