export interface ContainerProps {
    backgroundColour?: string;
    font?: string;
    children?: React.ReactNode;
}

export interface InputProps {
    id: string;
    type: "text" | "number" | "image";
    purpose: string;
    value?: string;
    placeHolder: string;
    image?: string;
    fontSize?: number;
    height?: number;
    width?: number;
    borderStyle?: string;
    borderRadius?: number;
    backgroundColour?: string;
}

export interface CardProps {
    backgroundColour: string;
}