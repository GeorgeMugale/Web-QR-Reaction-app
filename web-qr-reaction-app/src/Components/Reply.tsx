import * as React from "react";
import { PostReplyProps } from "./PropTypes";

interface position {
    top: number;
    left: number;
};

function getRandomInt(min : number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBGColour(colour : string) : string {

    switch (colour) {
        // Top Left Quadrant
        case 'Red':
            return 'rgb(255, 0, 0, 0.5)';
            break;

        // Top Right Quadrant
        case 'Green':
            return  'rgb(0, 255, 0, 0.5)'
            break;

        // Bottom Left Quadrant
        case 'Yellow':
            return 'rgb(255, 255, 0, 0.5)';
            break;

        // Bottom Right Quadrant
        case 'Blue':
            return 'rgb(0, 0, 255, 0.5)'
            break;

        // default random
        default:
            return 'RGB(0, 0, 0, 0.5)';
            break;
    }

}

function generatePosition(colour: string, width: number, height: number ): position {

    switch (colour) {
        // Top Left Quadrant
        case 'Red':
            return { top: getRandomInt(0, height / 2), left: getRandomInt(0, width / 2) }
            break;

        // Top Right Quadrant
        case 'Green':
            return { top: getRandomInt(0, height / 2), left: getRandomInt(width / 2 , width) }
            break;

        // Bottom Left Quadrant
        case 'Yellow':
            return { top: getRandomInt(height / 2, height), left: getRandomInt(0, width / 2) }
            break;
        
        // Bottom Right Quadrant
        case 'Blue':
            return { top: getRandomInt(height / 2, height), left: getRandomInt(width /2, width) }
            break;

        // default random
        default:
            return { top: getRandomInt(0, height), left: getRandomInt(0, width) }
            break;
    }

}

/**
 * A reply component that holds a person reply to a post.
 *
 * @param {string} [text] - The actual reply.
 * @param {string} [colour] - The colour the person chose
 * @param {dimensions} [containerDimensions] - The dimentions (width & height) of the container that holds all the replies.
 * 
 */
const ReplyComponent: React.FC<PostReplyProps> = ({ text, colour, containerDimensions }) => {

    const pos : position = generatePosition(colour, containerDimensions.width, containerDimensions.height);

    return <div className="reply-item" style={{ top: `${pos.top}px`, left: `${pos.left}px`, borderColor: colour, background: getBGColour(colour), borderWidth: '2px' }} >{ text }</div>

};

export default ReplyComponent;