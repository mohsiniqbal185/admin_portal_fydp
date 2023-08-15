import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const list = [
  {
    title: "Main",
    links: [
      {
        type: "Link",
        text: "Dashboard",
        href: "/",
        icon: <DashboardIcon className="icon" />,
      },
      {
        type: "Link",
        text: "Users",
        href: "/users",
        icon: <GroupOutlinedIcon className="icon" />,
      },
    ],
  },
  {
    title: "Lists",
    links: [
      {
        type: "Dropdown",
        text: "View Transactions",
        open:false,
        href: "/",
        icon: <PreviewOutlinedIcon className="icon" />,
        dropdownLinks: [
          {
            text: "Token Transactions",
            href: "/view-transactions-token",
            icon: <ReceiptOutlinedIcon className="icon" />,
          },
          {
            text: "Rental Transactions",
            href: "/view-transactions-rental",
            icon: <PaymentsOutlinedIcon className="icon" />,
          },
        ],
      },
      {
        type: "Link",
        text: "Token Payments",
        href: "/view-payments-token",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
      },
      {
        type: "Dropdown",
        text: "Manage Transactions",
        open:false,
        href: "/",
        icon: <ManageAccountsOutlinedIcon className="icon" />,
        dropdownLinks: [
          {
            text: "Token Transactions",
            href: "/manage-transactions-token",
            icon: <ReceiptOutlinedIcon className="icon" />,
          },
          {
            text: "Rental Transactions",
            href: "/manage-transactions-rental",
            icon: <PaymentsOutlinedIcon className="icon" />,
          },
        ],
      },
      {
        type: "Dropdown",
        text: "Properties",
        open:false,
        href: "/",
        icon: <AccountTreeOutlinedIcon className="icon" />,
        dropdownLinks: [
          {
            text: "Edit Property",
            href: "/edit-property",
            icon: <EditOutlinedIcon className="icon" />,
          },
          {
            text: "Create Property",
            href: "/create-property",
            icon: <AddOutlinedIcon className="icon" />,
          },
        ],
      },
      {
        type: "Link",
        text: "Token Market Sale",
        href: "/token-market-sale",
        icon: <StoreOutlinedIcon className="icon" />,
      },
      {
        type: "Link",
        text: "Update Token Value",
        href: "/update-token-value",
        icon: <StoreOutlinedIcon className="icon" />,
      },
    ],
  },
  // {
  //   title: "Service",
  //   links: [
  //     {
  //       type: "Link",
  //       text: "Settings",
  //       href: "/settings",
  //       icon: <SettingsIcon className="icon" />,
  //     },
  //   ],
  // },
];
