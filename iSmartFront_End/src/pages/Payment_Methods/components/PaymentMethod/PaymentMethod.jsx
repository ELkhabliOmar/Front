import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import IconBox from "../../../../components/Icons/IconBox.js";
import "./PaymentMethod.scss";
import CreditCardForm from "./newCardInfo/CreditCardForm.jsx"

const PaymentMethod = ({ title, mastercard, visa }) => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  const boxBg = "white"; // Set background color to white

  return (
    <Card p="18px" mt="10px" me="100px" mr="20px">
      <CardHeader>
        <Flex justify="space-between" align="center" minHeight="100px" w="101%" ml={6}>
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button
            bg={bgButton}
            color="white"
            fontSize="xs"
            mr={0}
            variant="no-hover"
            className="add-card-button"
            onClick={openModal} // Open modal on click
          >
            ADD NEW CARD
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="center"
          w="104%"
          justify="center"
          py="rem"
          gap={0}
        >
          <Flex
            p="1rem"
            className="card-info"
            bg={boxBg}
            borderRadius="15px"
            width="100%"
            border="1px solid"
            borderColor={borderColor}
            align="center"
            mb={{ sm: "24px", md: "0px" }}
            mr={{ sm: "0px", md: "24px" }}
            justify="space-between"
          >
            <Flex align="center">
              <IconBox me="10px" w="25px" h="25px">
                {mastercard.icon}
              </IconBox>
              <Text color={textColor} fontSize="md" fontWeight='bold'>
                {mastercard.number}
              </Text>
            </Flex>
            <Button
              p="0px"
              bg="transparent"
              w="16px"
              h="16px"
              variant="no-hover"
              border="none"
            >
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
          <Flex
            p="1rem"
            className="card-info"
            bg={boxBg}
            borderRadius="15px"
            width="100%"
            border="1px solid"
            borderColor={borderColor}
            align="center"
            justify="space-between"
            ml={15}
          >
            <Flex align="center">
              <IconBox me="10px" w="25px" h="25px">
                {visa.icon}
              </IconBox>
              <Text color={textColor} fontSize="md" fontWeight='bold'>
                {visa.number}
              </Text>
            </Flex>
            <Button
              p="0px"
              bg="transparent"
              w="16px"
              h="16px"
              variant="no-hover"
              border="none"
            >
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
        </Flex>
      </CardBody>

      {/* Modal for Add New Card */}
      <Modal isOpen={showModal} onClose={closeModal} size="xl">
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton  style={{ backgroundColor: 'transparent', border: 'none',marginTop:"20px" }}/>
    <ModalBody>
      {/* Your credit card form component can go here */}
      <CreditCardForm onClose={closeModal} />
    </ModalBody>
  </ModalContent>
</Modal>

    </Card>
  );
};

export default PaymentMethod;
