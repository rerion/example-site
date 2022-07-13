import { ReactNode } from "react";
import "./Button.css";

export type ButtonProps = {
    color?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    children: ReactNode;
}

export default function Button({ color = '#DAC2F2', onClick = () => {}, type, children }: ButtonProps) {
    return (
        <button className="btn" type={type} onClick={onClick} style={{ backgroundColor: color }}>
            {children}
        </button>
    );
}