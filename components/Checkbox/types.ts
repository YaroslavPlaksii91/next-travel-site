import { KeyboardEvent } from "react";

export type CheckboxProps = {
    label: string;
    register: any;
    errors: any;
    options: any;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}





