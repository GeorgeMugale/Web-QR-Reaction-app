import * as React from 'react';
import { ContainerProps } from './PropTypes';



const ContainerComponent: React.FC<ContainerProps> = ({ backgroundColour = "hsl(47, 88%, 63%)", font = "Figtree, sans-serif", children }) => (

    <div style={{
        backgroundColor: backgroundColour,
        fontFamily: font,
        margin: 0,
        padding: 0,
        height: '100vw',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        { children }
    </div>
);


export default ContainerComponent;