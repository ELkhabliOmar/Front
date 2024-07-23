import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { RiMastercardFill } from "react-icons/ri";
import "./CreditCard.scss";

const CreditCard = ({
  backgroundImage,
  image,
  title,
  number,
  validity,
  cvv,
  icon
}) => {
  return (
    <Box
      w="380px"
      h="250px"
      borderRadius="15px"
      p="40px"
      className="credit-card"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      color="white"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <img src={image} alt="Card image" className="card-image" style={{ width: '100px', height: 'auto' }} />
      <Text fontSize="lg" fontWeight="bold">{title}</Text>
      <Box position="absolute" top="20px" right="20px">
        {icon}
      </Box>
      <Text fontSize="lg" fontWeight="bold" mt="60px" letterSpacing="2px">{number}</Text>
      <Box display="flex" justifyContent="space-between" mt="auto">
        <Box>
          <Text fontSize="xs" mt="40px" letterSpacing="1px">{validity.name}</Text>
          <Text fontSize="lg" fontWeight="bold" letterSpacing="1px">{validity.data}</Text>
        </Box>
        <Box mt={40}>
          <Text fontSize="xs" letterSpacing="1px">{cvv.name}</Text>
          <Text fontSize="lg" fontWeight="bold"  letterSpacing="1px">{cvv.code}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditCard;

