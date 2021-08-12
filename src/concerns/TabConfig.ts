import { IField } from "./Field";
import { TabsEnum } from "./Tabs";

export interface ITabConfig {
  key: TabsEnum;
  displayName: string;
  fields: IField[];
}
