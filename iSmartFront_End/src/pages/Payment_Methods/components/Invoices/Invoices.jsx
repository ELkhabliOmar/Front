import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import InvoicesRow from "../../../../components/Tables/InvoicesRow/InvoicesRow.jsx";
import "./Invoices.scss";

const Invoices = ({ title, data }) => {
  const cyanColor = "#4FD1C5";

  return (
    <Card
      p="22px"
      my={{ sm: "24px", lg: "0px" }}
      ms={{ sm: "0px", lg: "24px" }}
      bg="white"
      borderRadius="10"
      className="invoices-card"
    >
      <CardHeader>
        <Flex justify="space-between" align="center" mb="1rem" w="100%">
          <Text fontSize="lg" color={cyanColor} fontWeight="bold">
            {title}
          </Text>
          <Button
            borderColor={cyanColor}
            borderRadius={15}
            variant="outline"
            color={cyanColor}
            fontSize="xs"
            p="8px 32px"
          >
            VIEW ALL
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          {data.map((row, index) => (
            <InvoicesRow
              key={index}
              date={row.date}
              code={row.code}
              price={row.price}
              logo={row.logo}
              format={row.format}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Invoices;
