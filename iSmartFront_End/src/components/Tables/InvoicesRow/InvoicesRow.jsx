import {
    Box,
    Button,
    Flex,
    Icon,
    Spacer,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import "./InvoicesRow.scss";
  
  function InvoicesRow({ date, code, price, format, logo }) {
    const textColor = useColorModeValue("gray.700", "white");
    const darkRedColor = "#8B0000";
  
    return (
      <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center" className="invoices-row">
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {date}
          </Text>
          <Text fontSize="sm" color="grey" fontWeight="semibold" me="16px">
            {code}
          </Text>
        </Flex>
        <Spacer />
        <Box me="20px">
          <Text fontSize="md" color="grey" fontWeight="semibold">
            {price}
          </Text>
        </Box>
        <Button p="16px" bg="transparent" variant="no-hover" border="none">
          <Flex alignItems="center" p="12px">
            <Icon as={logo} w="20px" h="auto" me="5px" color={darkRedColor} />
            <Text fontSize="md" color="red" fontWeight="bold">
              {format}
            </Text>
          </Flex>
        </Button>
      </Flex>
    );
  }
  
  export default InvoicesRow;
  