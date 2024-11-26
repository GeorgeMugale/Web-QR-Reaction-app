import * as React from 'react';
import { InputProps } from './PropTypes';


/**
 * An input component that displays a label and input field.
 *
 * @param {string} id - The `id` of the input element.
 * @param {"text" | "number" | "image"} type - The type of input (`"text"`, `"number"`, or `"image"`).
 * @param {string} purpose - The label displayed above the input.
 * @param {string} [value] - The initial value of the input (for text or number types).
 * @param {string} [placeHolder="Enter Answer"] - Placeholder text displayed in the input field.
 * @param {string} [image] - The `src` of the image (used when `type` is `"image"`).
 * @param {number} [fontSize=20] - Font size of the input text, in pixels.
 * @param {number} [height=30] - Height of the input field, in pixels.
 * @param {number} [width=200] - Width of the input field, in pixels.
 * @param {string} [borderStyle="2px solid black"] - The border style of the input.
 * @param {string} [borderRadius="5px"] - The border radius of the input.
 * @param {string} [backgroundColour="hsl(0, 24%, 86%, 0.48)"] - Background color of the input.
 */
const InputComponent: React.FC<InputProps> = ({ id, type, purpose, value, placeHolder = "Enter Answer", image, fontSize = 20, height = 30, width = 200, borderStyle = "2px solid black", borderRadius = "5px", backgroundColour = "hsl(0, 24%, 86%, 0,48)" }) => {

    if (type === 'image') {
        return (
            <div className={"mb-3"}>
                <label htmlFor={id} className="form-label fw-bold">{purpose}</label>
                <input
                    id={id}
                    type={type}
                    placeholder={placeHolder}
                    src={image}

                    style={{
                        fontSize: `${fontSize}px`,
                        height: `${height}px`,
                        width: `${width}px`,
                        borderStyle: borderStyle,
                        borderRadius: borderRadius,
                        backgroundColor: backgroundColour
                    }}>
                </input>
            </div>
        )

    } else {
        return (
            <div className={"mb-3"}>
                <label htmlFor={id} className="form-label fw-bold">{purpose}</label>
                <input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeHolder}
                    className={'form-control'}
                    style={{
                        fontSize: `${fontSize}px`,
                        height: `${height}px`,
                        width: `${width}px`,
                        borderStyle: borderStyle,
                        borderRadius: borderRadius,
                        backgroundColor: backgroundColour
                    }}>
                </input>
            </div>
        )

    }

};

export default InputComponent;