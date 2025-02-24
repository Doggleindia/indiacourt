import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import TopicItem from "./TopicItem";
import { HiCurrencyDollar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchLegalTopics } from "../../../redux/features/legalTopicsSlice";

let topics = [
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
  {
    title: "Women and Child Protection Laws",
    description:
      "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputatsadsad sad asd",
    icon: <HiCurrencyDollar size={42} color="#F26828" />,
  },
];

export default function Topics() {
  const dispatch = useDispatch();
  const { topics, loading, error } = useSelector((state) => state.legalTopics);

  useEffect(() => {
    dispatch(fetchLegalTopics());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={{ base: 3, md: 6 }}
      >
        {topics.map((topic) => (
          <TopicItem
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            topic={topic}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
