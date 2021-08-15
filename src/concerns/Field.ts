import { FieldType } from "./FieldType";
import { FieldValue } from "./FieldValue";

export interface IField {
  key: FieldValue;
  displayName: string;
  type: FieldType;
  placeholder?: string;
  options?: any[];
  validationRule?: string;
}
