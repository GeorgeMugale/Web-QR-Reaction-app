import * as React from 'react';
import { LinkToQRProps } from './PropTypes';
import { QRCodeCanvas } from "qrcode.react";

/**
 * A QR Code component that generates a QR code for the provided link
 *
 * @param {string} [link] - link to be converted to a QR code
 * @param {number} [size=200] - size of the qr cde in pixels
 */
const QRComponent: React.FC<LinkToQRProps> = ({ link, size=200 }) => (
    <div>
        <h2>Scan the QR Code:</h2>
        <QRCodeCanvas
            value={link} // link to convert
            size={size}   // Size of the QR Code in pixels
            bgColor="#ffffff" // Background color
            fgColor="#000000" // Foreground (QR Code color)
            level="H"
            includeMargin={true}
        />
    </div>
);

export default QRComponent;