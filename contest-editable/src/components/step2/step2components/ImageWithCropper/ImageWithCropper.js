import React, {useRef} from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export const ImageWithCropper = ({photoArray,change=false}) => {
    const cropperRef = useRef(null);
    let data = {};
    const onCrop = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        data = {
            nWidth:Math.floor(cropper.imageData.width),
            nHeight:Math.floor(cropper.imageData.height),
            selWidth : Math.floor(cropper.cropBoxData.width),
            x: Math.floor(cropper.cropBoxData.left - cropper.cropBoxData.minLeft),
            y: Math.floor(cropper.cropBoxData.top - cropper.cropBoxData.minTop),
            change:change
        }
        sessionStorage.setItem("cropData", JSON.stringify(data));
        //console.log(cropper.cropBoxData);
        //console.log(cropper.imageData);
    };
    return (
        <Cropper zoomOnWheel={false} viewMode={1} defaultChecked={true}
            src={photoArray[0].preview}
            style={{ height: 300, width: "100%" }}
            // Cropper.js options
            initialAspectRatio={1}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
            aspectRatio={1}
        />
    );
}
