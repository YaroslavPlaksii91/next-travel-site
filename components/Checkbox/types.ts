import { KeyboardEvent } from "react";
import { UseFormRegisterReturn , FieldErrors } from "react-hook-form";

export type CheckboxProps = {
    label: string;
    register: UseFormRegisterReturn;
    errors: FieldErrors;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}





