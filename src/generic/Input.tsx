import { HTMLInputTypeAttribute } from "react";
import "./Input.css";

export type InputProps = {
    placeholder?: string;
    type?: HTMLInputTypeAttribute; 
    label: string;
    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <>
            <label htmlFor={props.label} hidden></label>
            <input id={props.label} {...props} className={`input ${props.className}`} />
        </>
    );
}