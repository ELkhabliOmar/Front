import React from "react";
import "./payment_methods.scss";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { MastercardIcon, VisaIcon } from "../../components/Icons/Icons";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "../../variables/general";

// local components
import CustomHeader from "../../components/CustomHeader/customHeader";
import SideBar from "../../components/SideBar/sideBar";
import PaymentMethodsGrid from "../../components/PaymentMethodsGrid/PaymentMethodsGrid";
import CreditCard from "./components/CreditCard/CreditCard.jsx"; // Import du nouveau composant
//import CreditCardForm from "./components/CreditCard/CreditCardForm.js"; // Import du nouveau composant

import { RiMastercardFill } from "react-icons/ri";
import BackgroundCard1 from "../../assets/images/BackgroundCard1.png";
import logo from "../../assets/images/logo.png";
import PaymentStatistics from "./components/PaymentStatistics/PaymentStatistics";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Invoices from "./components/Invoices/Invoices.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";

function PaymentMethods() {
  return (
    <div className="cntr">
      <SideBar active="payment-methods" />
      <div className="page-cntr">
        <CustomHeader value="Payment Methods" />
        <Flex mt={5} >
          <Box ml={24} mr={2}> {/* Ajout de marge à gauche et à droite */}
             <CreditCard
              backgroundImage={BackgroundCard1}
              image={logo}
              number="7812 2139 0823 XXXX"
              validity={{
                name: "VALID THRU",
                data: "07/26",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  as={RiMastercardFill}
                  w="48px"
                  h="auto"
                  color="currentColor"

                />
              }
            />
          </Box>
          <Flex ml={45} flexDirection="row" justifyContent="space-between">
            <Box bg="white" p={7.5} borderRadius="15px">
              <PaymentStatistics
                icon={<Icon h={"30px"} w={"30px"} color='cyan' as={FaWallet} />}
                title={"Mobile wallet"}
                description={"Belong interactive"}
                amount={2000}
              />
            </Box>
            <Box ml={35} bg="white" p={7.5} borderRadius="15px">
              <PaymentStatistics
                icon={<Icon h={"40px"} w={"40px"} color='cyan' as={MastercardIcon} />}
                title={"Master Card"}
                description={"payment quickly"}
                amount={1500}
              />
            </Box>
            <Box ml={35} bg="white" p={7.5} borderRadius="15px">
              <PaymentStatistics
                icon={<Icon h={"40px"} w={"40px"} color='cyan' as={VisaIcon} />}
                title={"Visa Card"}
                description={"payment quickly"}
                amount={500}
              />
            </Box>
          </Flex>
        </Flex>
        <PaymentMethod
          title={"Payment Method"}
          mastercard={{
            icon: <MastercardIcon w='100%' h='100%' />,
            number: "7812 2139 0823 XXXX",
          }}
          visa={{
            icon: <VisaIcon w='100%' h='100%' />,
            number: "7812 2139 0823 XXXX",
            
          }}
        />
        <Flex direction={{ base: "column", md: "row" }} w="100%" h="auto" mt={5}>
          <Box flex="1" m="2"ml={23} mr={20}>
            <Invoices title={"Invoices"} data={invoicesData} />
          </Box>
          <Box flex="1" m="2"mr={20}>
            <Transactions
              title={"Your Transactions"}
              date={"23 - 30 March"}
              newestTransactions={newestTransactions}
              olderTransactions={olderTransactions}
            />
          </Box>
        </Flex>
{/*         <PaymentMethodsGrid />
 */}      </div>
    </div>
  );
}

export default PaymentMethods;
