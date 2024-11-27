import * as React from "react";
import { PostReplyViewProps } from "./PropTypes";
import "./Replies.css"


/**
 * A component that shows a topic and contains the replies to it.
 *
 * @param {string} [topic] - The topic of the discussion.
 * @param {number} [width] - Thewidth of the component.
 * @param {number} [height] - The height of the component.
 * @param {string} [background] - The background colour of the component.
 * @param {string} [children] - An array containing the riples.
 * @param {string} [maxChildren] - The maximum number of replies.
 */
const ViewRepliesComponent: React.FC<PostReplyViewProps> = ({
    topic,
    width,
    height,
    background,
    children = [],
    maxChildren
}) => {
    const [renderedChildren, setRenderedChildren] = React.useState<React.ReactNode[]>(() => (children));
    // renderedChildren- is a state variable to track the numbers rendered by the component.

    // Re-runs this code whenever the children prop changes (when length of children array increases)
    React.useEffect(() => {
        // Check if a new reply was added
        if (children.length > renderedChildren.length) {
            const newReply = children[children.length - 1]; // Get latest reply (at the edn of the array)
            setRenderedChildren((prevState) => [...prevState /*previous state*/, newReply /*with new element*/]); // Update the state
        }
    }, [children, renderedChildren]);

    return (
        <div className='outerContainer'>
            <div
            className="container"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                background
            }}
        >
            {children.map((child, index) => {
                if (maxChildren === undefined || index < maxChildren) {
                    return (
                        <div key={index} className="child-item">
                            {child}
                        </div>
                    );
                }
                return null;
            })}
            <div className="item">{topic}</div>
            </div><h2>Maximum Number of replies: { maxChildren === undefined ? ("Infinity") : (maxChildren)}</h2>
        </div>
    );
};

export default ViewRepliesComponent;
