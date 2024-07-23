import React from "react";
import { Flex, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import TransactionRow from "../../../../components/Tables/TransactionRow/TransactionRow.jsx";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./Transactions.scss";

const Transactions = ({ title, date, newestTransactions, olderTransactions }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card className="transactions-card" ms={{ lg: "24px" }} bg="white" p="1rem" borderRadius="10">
      <CardHeader mb="12px">
        <Flex direction="column" w="100%">
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w="100%"
            my={{ md: "12px" }}
          >
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Flex align="center">
              <Icon
                as={FaRegCalendarAlt}
                color="gray.400"
                fontSize="md"
                ms="250px"
                me="6px"
              ></Icon>
              <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Text
            color="gray.400"
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight="semibold"
            my="12px"
          >
            NEWEST
          </Text>
          {newestTransactions.map((row, index) => (
            <TransactionRow key={`newest-${index}`} {...row} />
          ))}
          <Text
            color="gray.400"
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight="semibold"
            my="12px"
          >
            OLDER
          </Text>
          {olderTransactions.map((row, index) => (
            <TransactionRow key={`older-${index}`} {...row} />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Transactions;
