export interface ContainerProps {
  backgroundColour?: string;
  font?: string;
  children?: React.ReactNode;
  displayprop: string;
}

export interface CardProps {
  title: string;
  modified: Date;
  name: string;
  picChosen: string;
  Description: string;
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

export interface LinkToQRProps {
  link: string;
  size: number;
}

//Button component will be used in the whole project
//will accept props such as Text of button, fucntion, width and height
export interface ButProps {
  children: string;
  Action: () => any;
  Width: number;
  Height: number;
}
