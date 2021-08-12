import { FieldType } from "../concerns/FieldType";
import { FieldValue } from "../concerns/FieldValue";
import { IFormConfig } from "../concerns/FormConfig";
import { TabsEnum } from "../concerns/Tabs";

export const FormConfig: IFormConfig = {
  tabs: [
    {
      key: TabsEnum.Tab1,
      displayName: "Customer Info",
      fields: [
        {
          key: FieldValue.State,
          displayName: "State",
          type: FieldType.Dropdown,
          options: ["California", "Nevada", "Oregon", "Washington"],
        },
        {
          key: FieldValue.Gender,
          displayName: "Gender",
          type: FieldType.Choice,
          options: ["M", "F"],
        },
        {
          key: FieldValue.Education,
          displayName: "Education",
          type: FieldType.Dropdown,
          options: ["College", "Doctor", "High School or Below", "Master"],
        },
        {
          key: FieldValue.Vehicle_Size,
          displayName: "Vehicle Size",
          type: FieldType.Dropdown,
          options: ["Medsize", "Small"],
        },
        {
          key: FieldValue.Vehicle_Class,
          displayName: "Vehicle Class",
          type: FieldType.Dropdown,
          options: [
            "Luxury Car",
            "Luxury SUV",
            "SUV",
            "Sports Car",
            "Two-Door Car",
          ],
        },
        {
          key: FieldValue.Location_Code,
          displayName: "Location Code",
          type: FieldType.Choice,
          options: ["Suburban", "Urban"],
        },
        {
          key: FieldValue.Marital_Status,
          displayName: "Martial Status",
          type: FieldType.Choice,
          options: ["Married", "Single"],
        },
        {
          key: FieldValue.EmploymentStatus,
          displayName: "Employment Status",
          type: FieldType.Dropdown,
          options: ["Employed", "Medical Leave", "Retired", "Unemployed"],
        },
      ],
    },
    {
      key: TabsEnum.Tab2,
      displayName: "Customer Pay",
      fields: [
        {
          key: FieldValue.Income,
          displayName: "Income",
          type: FieldType.Integer,
        },
        {
          key: FieldValue.Monthly_Premium_Auto,
          displayName: "Monthly Premium Auto",
          type: FieldType.Integer,
        },
        {
          key: FieldValue.Months_Since_Last_Claim,
          displayName: "Monthly Since Last Claim",
          type: FieldType.Integer,
        },
        {
          key: FieldValue.Months_Since_Policy_Inception,
          displayName: "Monthly Since Policy Inception",
          type: FieldType.Integer,
        },
        {
          key: FieldValue.Total_Claim_Amount,
          displayName: "Total Claim Amount",
          type: FieldType.Integer,
        },
      ],
    },
    {
      key: TabsEnum.Tab3,
      displayName: "Policies Info",
      fields: [
        {
          key: FieldValue.Policy,
          displayName: "Policy",
          type: FieldType.Choice,
          options: ["Corporte L2", "Corporate L3"],
        },
        {
          key: FieldValue.Response,
          displayName: "Response",
          type: FieldType.Choice,
          options: ["Yes", "No"],
        },
        {
          key: FieldValue.Coverage,
          displayName: "Coverage",
          type: FieldType.Choice,
          options: ["Extended", "Premium"],
        },
        {
          key: FieldValue.Sales_Channel,
          displayName: "Sales Channel",
          type: FieldType.Dropdown,
          options: ["Branch", "Call", "Center", "Web"],
        },
        {
          key: FieldValue.Renew_Offer_Type,
          displayName: "Renew Offer Type",
          type: FieldType.Dropdown,
          options: ["Offer2", "Offer3", "Offer4"],
        },
        {
          key: FieldValue.Number_of_Policies,
          displayName: "Policies Count",
          type: FieldType.Integer,
        },
        {
          key: FieldValue.Number_of_Open_Compaints,
          displayName: "Open Complaints Count",
          type: FieldType.Integer,
        },
      ],
    },
  ],
};
