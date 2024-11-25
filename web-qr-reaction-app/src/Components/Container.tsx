import * as React from 'react';
import { ContainerProps } from './PropTypes';



const ContainerComponent: React.FC<ContainerProps> = ({ backgroundColour, font = "Figtree, sans-serif" }) => (

    <div style={{
        backgroundColor: backgroundColour,
        fontFamily: font,
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    </div>
);


export default ContainerComponent;