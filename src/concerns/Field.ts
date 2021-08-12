import { FieldType } from "./FieldType";
import { FieldValue } from "./FieldValue";

export interface IField {
  key: FieldValue;
  displayName: string;
  type: FieldType;
  options?: any[];
  validationRule?: string;
}
