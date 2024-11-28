import * as React from "react";
import { ContainerProps } from "./PropTypes";

//Emmanuel : adding the prop here cause its one thing, you can change it if you want to and move to the PropTypes File

/**
 * A background component that holds other components.
 *
 * @param {string} [font="Figtree, sans-serif"] - Font the whole webpage will inherit.
 * @param {string} [backgroundColour="hsl(47, 88%, 63%)"] - Background color of the page.
 */
const ContainerComponent: React.FC<ContainerProps> = ({
  backgroundColour = "hsl(47, 88%, 63%)",
  font = "Figtree, sans-serif",
  children,
  displayprop,
}) => (
  <div
    style={{
      backgroundColor: backgroundColour,
      fontFamily: font,
      margin: 0,
      padding: 0,
      height: "100vw",
      width: "100vw",
      alignItems: "flex-start",
      justifyContent: "center",
      display: `${displayprop}`,
    }}
  >
    {children}
  </div>
);

export default ContainerComponent;
