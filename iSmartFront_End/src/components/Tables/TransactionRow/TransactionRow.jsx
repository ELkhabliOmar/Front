import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "./TransactionRow.scss";

function TransactionRow({ name, date, logo, price }) {
  const textColor = useColorModeValue("gray.700", "white");
  const greenColor = "#48BB78"; 
  const redColor = "#FC8181"; 
  const greyColor = "#A0AEC0";

  return (
    <Flex my="0.5rem" justifyContent="space-between" className="transaction-row">
      <Flex alignItems="center">
        <Box
          me="50px"
          borderRadius="50%"
          className={`icon-box ${price[0] === "+" ? "green" : price[0] === "-" ? "red" : "grey"}`}
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="20px"
          h="35px"
        >
          <Icon as={logo} />
        </Box>
        <Flex direction="column">
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={textColor}
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text
            fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
            color={greyColor}
            fontWeight="semibold"
          >
            {date}
          </Text>
        </Flex>
      </Flex>
      <Box
        className={`price ${price[0] === "+" ? "green" : price[0] === "-" ? "red" : "default"}`}
      >
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
          {price}
        </Text>
      </Box>
    </Flex>
  );
}

export default TransactionRow;
