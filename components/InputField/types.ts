import { FormData } from "../ContactForm/types";

export type InputFieldProps = {
  label: string;
  type: string;
  name: keyof FormData;
  register: any;
  errors: any;
  options: any;
};