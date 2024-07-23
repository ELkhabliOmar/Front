
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const invoicesData = [


  {
    date: "June, 05, 2024",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "May, 01, 2024",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 25, 2024",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2024",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2024",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  
];


export const newestTransactions = [
  {
    name: "Station A",
    date: "27 June 2024, at 12:30 PM",
    price: "- $50",
    logo: FaArrowDown,
  },
  {
    name: "Virement vers ma carte virtuelle EV-ISMART ",
    date: "20 June 2024, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [

  {
    name: "Station d",
    date: "30 March 2024, at 12:30 PM",
    price: "- $70",
    logo: FaArrowDown,
  },
  {
    name: "Station E",
    date: "18 March 2024, at 05:00 PM",
    price: "hors service",
    logo: AiOutlineExclamation,
  },
  {
    name: "Station F",
    date: "10 March 2024, at 16:30 PM",
    price: "- $30",
    logo: FaArrowDown,
  },
  {
    name: "Virement vers ma carte virtuelle EV-ISMART",
    date: "03 March 2024, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
];
